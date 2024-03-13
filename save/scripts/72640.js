(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72640"],
  {
    518533: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b9b0d61c8ad8b4c67ccf.png";
    },
    505406: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0a01c3f1e9a1905a85c0.svg";
    },
    92440: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6bc72dbd78c0bc7d199b.svg";
    },
    608108: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7c8ce8acfec8f0df3ac3.svg";
    },
    794027: function (e, t, n) {
      "use strict";
      e.exports = n.p + "55b7a354cc2c75dc4b11.svg";
    },
    804621: function (e, t, n) {
      "use strict";
      e.exports = n.p + "54ca580fd4d4f935fd11.svg";
    },
    578299: function (e, t, n) {
      "use strict";
      e.exports = n.p + "06f557de76d06b1db825.svg";
    },
    522420: function (e, t, n) {
      "use strict";
      e.exports = n.p + "71d0243ce6c49e0112ea.svg";
    },
    371031: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bacb0a99c70cc58ce8a6.svg";
    },
    674517: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9d882ede81ee084f2929.svg";
    },
    989306: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c563b974fd62dace82e2.svg";
    },
    786948: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7d255b13622dffefb7f7.svg";
    },
    780810: function (e, t, n) {
      "use strict";
      e.exports = n.p + "33b84f5cd47bb4206c9a.svg";
    },
    695449: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f22c6fd558a43f47d7e4.svg";
    },
    816428: function (e, t, n) {
      "use strict";
      e.exports = n.p + "16a2344f855adec72e1e.svg";
    },
    710672: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a1d7e3a6eaf0f8585fca.svg";
    },
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return l;
          },
          categoryExpand: function () {
            return s;
          },
          categoryCollapseAll: function () {
            return i;
          },
          categoryExpandAll: function () {
            return r;
          },
        });
      var a = n("913144");
      function l(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function s(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function i(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function r(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    789207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("872717"),
        l = n("913144"),
        s = n("49111"),
        i = {
          setGuildFilter(e) {
            let { guildFilter: t, roleFilter: n, everyoneFilter: a } = e;
            l.default.dispatch({
              type: "SET_RECENT_MENTIONS_FILTER",
              guildFilter: t,
              roleFilter: n,
              everyoneFilter: a,
            });
          },
          clearMentions() {
            l.default.dispatch({ type: "CLEAR_MENTIONS" });
          },
          truncateMentions(e) {
            l.default.dispatch({ type: "TRUNCATE_MENTIONS", size: e });
          },
          fetchRecentMentions(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s.MAX_MENTIONS_PER_FETCH,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3],
              r =
                !(arguments.length > 4) ||
                void 0 === arguments[4] ||
                arguments[4];
            l.default.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId: n }),
              a.default
                .get({
                  url: s.Endpoints.MENTIONS,
                  query: {
                    before: e,
                    limit: t,
                    guild_id: n,
                    roles: i,
                    everyone: r,
                  },
                  retries: 2,
                  oldFormErrors: !0,
                })
                .then(
                  t => {
                    let { body: n } = t;
                    l.default.dispatch({
                      type: "LOAD_RECENT_MENTIONS_SUCCESS",
                      messages: n,
                      isAfter: null != e,
                      hasMoreAfter: n.length >= s.MAX_MENTIONS_PER_FETCH,
                    });
                  },
                  () => {
                    l.default.dispatch({
                      type: "LOAD_RECENT_MENTIONS_FAILURE",
                    });
                  }
                );
          },
          deleteRecentMention(e) {
            a.default.delete({
              url: s.Endpoints.MENTIONS_MESSAGE_ID(e),
              retries: 2,
              oldFormErrors: !0,
            }),
              l.default.dispatch({ type: "RECENT_MENTION_DELETE", id: e });
          },
          setRecentMentionsStale() {
            l.default.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
          },
        };
    },
    378438: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          search: function () {
            return o;
          },
          searchQueryParamsToSearchMode: function () {
            return u;
          },
          searchByMode: function () {
            return d;
          },
          searchNextPage: function () {
            return c;
          },
          searchPreviousPage: function () {
            return f;
          },
          changePage: function () {
            return h;
          },
          clearHistory: function () {
            return p;
          },
          setSearchState: function () {
            return S;
          },
          clearSearchState: function () {
            return g;
          },
          updateAutocompleteQuery: function () {
            return N;
          },
          setShowBlockedResults: function () {
            return _;
          },
        }),
        n("808653");
      var a = n("913144"),
        l = n("716241"),
        s = n("744983"),
        i = n("751520"),
        r = n("49111");
      function o(e, t, n, o) {
        (0, i.setIncludeNSFW)(t, e), o && (t.search_everywhere = !0);
        let u = Object.keys(t);
        l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
          search_type: s.default.getSearchType(),
          prev_search_id: s.default.getAnalyticsId(e),
          num_modifiers: u.length,
          modifiers: u.reduce((e, n) => {
            let a = t[n];
            return (e[n] = Array.isArray(a) ? a.length : 1), e;
          }, {}),
        }),
          a.default.dispatch({
            type: "SEARCH_START",
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: o,
          });
      }
      function u(e) {
        return "relevance" === e.sort_by
          ? r.SearchModes.MOST_RELEVANT
          : "asc" === e.sort_order
            ? r.SearchModes.OLDEST
            : r.SearchModes.NEWEST;
      }
      function d(e, t) {
        let n = s.default.getQuery(e),
          a = (function (e) {
            switch (e) {
              case r.SearchModes.MOST_RELEVANT:
                return { sort_by: "relevance", sort_order: "desc" };
              case r.SearchModes.OLDEST:
                return { sort_by: "timestamp", sort_order: "asc" };
              case r.SearchModes.NEWEST:
              default:
                return { sort_by: "timestamp", sort_order: "desc" };
            }
          })(t);
        return o(e, { ...n, ...a, offset: 0 });
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : r.SEARCH_PAGE_SIZE;
        return E(e, t);
      }
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : r.SEARCH_PAGE_SIZE;
        return E(e, -t);
      }
      function h(e, t) {
        return m(e, t * r.SEARCH_PAGE_SIZE);
      }
      function E(e, t) {
        let n = s.default.getOffset(e);
        return m(e, n + t);
      }
      function m(e, t) {
        let n = s.default.getQuery(e),
          a = s.default.getTotalResults(e);
        if (!(t < 0) && !(t > a)) return o(e, { ...n, offset: t });
      }
      function p(e) {
        a.default.dispatch({ type: "SEARCH_CLEAR_HISTORY", searchId: e });
      }
      function S(e, t) {
        null != e &&
          a.default.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            searchId: e,
            editorState: t,
          });
      }
      function g(e) {
        l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
          search_id: s.default.getAnalyticsId(e),
        }),
          a.default.wait(() =>
            a.default.dispatch({
              type: "SEARCH_EDITOR_STATE_CLEAR",
              searchId: e,
            })
          );
      }
      function N(e, t, n) {
        null != e &&
          a.default.dispatch({
            type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
            searchId: e,
            tokens: t,
            cursorScope: n,
          });
      }
      function _(e, t) {
        a.default.dispatch({
          type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
          searchId: e,
          showBlocked: t,
        });
      }
    },
    590514: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Header: function () {
            return b;
          },
          EmptyStateCenter: function () {
            return y;
          },
          ItemsPopout: function () {
            return D;
          },
          default: function () {
            return U;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("917351"),
        o = n.n(r),
        u = n("974667"),
        d = n("446674"),
        c = n("77078"),
        f = n("404118"),
        h = n("819689"),
        E = n("510889"),
        m = n("699473"),
        p = n("393414"),
        S = n("161778"),
        g = n("42203"),
        N = n("377253"),
        _ = n("957255"),
        T = n("600133"),
        I = n("471671"),
        C = n("822332"),
        A = n("945330"),
        M = n("599110"),
        x = n("659500"),
        R = n("49111"),
        v = n("782340"),
        L = n("384044");
      function O(e) {
        e.stopPropagation();
      }
      let b = e => {
          let { title: t, children: n, className: l } = e;
          return (0, a.jsxs)("div", {
            className: i(l, L.header),
            children: [
              null == t
                ? null
                : (0, a.jsx)(c.Heading, {
                    variant: "heading-md/medium",
                    children: t,
                  }),
              n,
            ],
          });
        },
        y = e => {
          let { msg: t, image: n } = e;
          return (0, a.jsxs)("div", {
            className: L.emptyPlaceholder,
            children: [
              (0, a.jsx)("div", {
                className: L.image,
                style: { backgroundImage: "url(".concat(n, ")") },
              }),
              (0, a.jsx)("div", { className: L.body, children: t }),
            ],
          });
        };
      class j extends l.PureComponent {
        renderJumpButton() {
          let { jumping: e } = this.props;
          return (0, a.jsxs)(c.Clickable, {
            className: L.jumpButton,
            onClick: this.handleClickJump,
            children: [
              (0, a.jsx)("div", {
                className: i(L.text, { hidden: e }),
                children: v.default.Messages.JUMP,
              }),
              (0, a.jsx)(c.Spinner, {
                type: c.Spinner.Type.PULSING_ELLIPSIS,
                className: i(L.loading, { [L.visible]: e }),
              }),
            ],
          });
        }
        renderCloseButton() {
          let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: n,
            channel: l,
          } = this.props;
          if (null == e) return null;
          let s = t || n || (null != l && l.isPrivate());
          return s
            ? (0, a.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                onClick: this.handleClickClose,
                children: (0, a.jsx)(A.default, { className: L.closeIcon }),
              })
            : null;
        }
        render() {
          return (0, a.jsxs)("div", {
            className: L.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleClickJump = e => {
              let { jumpTo: t, message: n } = this.props;
              t(n, e);
            }),
            (this.handleClickClose = e => {
              let { onCloseMessage: t, message: n } = this.props;
              null != t && t(n, e);
            });
        }
      }
      let F = d.default.connectStores([_.default], e => {
        let { channel: t } = e;
        return {
          canManageMessages:
            null != t && _.default.can(R.Permissions.MANAGE_MESSAGES, t),
        };
      })(j);
      function D(e) {
        let {
            analyticsName: t,
            items: n,
            hasMore: s,
            loading: r,
            loadMore: f,
            renderHeader: h,
            renderEmptyState: m,
            renderItem: p,
            getProTip: g,
            scrollerClassName: N,
            className: _,
            listName: A,
          } = e,
          b = l.useRef(null),
          y = (0, E.default)(A, b),
          j = (0, d.useStateFromStores)([T.default], () =>
            T.default.hasNotice()
          ),
          F = (0, d.useStateFromStores)([I.default], () =>
            I.default.windowSize()
          );
        l.useEffect(() => {
          M.default.track(R.AnalyticEvents.OPEN_POPOUT, { type: t });
        }, [t]),
          l.useEffect(() => {
            function e() {
              var e;
              null === (e = b.current) ||
                void 0 === e ||
                e.scrollPageUp({ animate: !0 });
            }
            function t() {
              var e;
              null === (e = b.current) ||
                void 0 === e ||
                e.scrollPageDown({ animate: !0 });
            }
            return (
              x.ComponentDispatch.subscribe(
                R.ComponentActions.SCROLL_PAGE_DOWN,
                t
              ),
              x.ComponentDispatch.subscribe(
                R.ComponentActions.SCROLL_PAGE_UP,
                e
              ),
              () => {
                x.ComponentDispatch.unsubscribe(
                  R.ComponentActions.SCROLL_PAGE_DOWN,
                  t
                ),
                  x.ComponentDispatch.unsubscribe(
                    R.ComponentActions.SCROLL_PAGE_UP,
                    e
                  );
              }
            );
          }, []);
        let D = l.useCallback(() => {
            var e;
            let t =
              null === (e = b.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            null != t &&
              t.scrollHeight === t.scrollTop + t.offsetHeight &&
              s &&
              !r &&
              (null == f || f());
          }, [s, f, r]),
          U = [],
          k = !0;
        null == n
          ? (U = [
              (0, a.jsx)(
                "div",
                {
                  className: i(L.emptyPlaceholder, L.loadingPlaceholder),
                  children: (0, a.jsx)(c.Spinner, {}),
                },
                "spinner"
              ),
            ])
          : 0 === n.length
            ? U.push(
                (0, a.jsx)(
                  l.Fragment,
                  { children: m(S.default.theme) },
                  "empty-state"
                )
              )
            : ((k = !1),
              (U = []),
              o.each(n, e => {
                U.push(...p(e));
              }));
        let P = null;
        null != n &&
          n.length > 0 &&
          null != f &&
          (P = r
            ? (0, a.jsx)(
                "div",
                {
                  className: L.loadingMore,
                  children: (0, a.jsx)(c.Spinner, {}),
                },
                "loading-more-after"
              )
            : s
              ? (0, a.jsx)("div", {
                  className: L.hasMore,
                  children: (0, a.jsx)(c.Button, {
                    look: c.Button.Looks.FILLED,
                    color: c.Button.Colors.PRIMARY,
                    size: c.Button.Sizes.MAX,
                    onClick: f,
                    children: v.default.Messages.LOAD_MORE_MESSAGES,
                  }),
                })
              : (0, a.jsx)("div", {
                  className: L.scrollingFooterWrap,
                  children: m(S.default.theme),
                }));
        let w = null == g ? void 0 : g(),
          G =
            k && null != w
              ? (0, a.jsx)("div", {
                  className: L.footer,
                  children: (0, a.jsx)(C.default, {
                    style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                    children: w,
                  }),
                })
              : null,
          B = { maxHeight: F.height - 43 - 25 };
        j && (B.maxHeight -= 40);
        let H = null != f && s;
        return (0, a.jsx)("div", {
          className: i(_, L.messagesPopoutWrap),
          style: B,
          onClick: O,
          onDoubleClick: O,
          "aria-label": e["aria-label"],
          children: (0, a.jsxs)(c.HeadingLevel, {
            component: h(),
            children: [
              (0, a.jsxs)(c.AdvancedScroller, {
                className: i(L.messagesPopout, N),
                onScroll: H ? D : void 0,
                ref: b,
                children: [
                  (0, a.jsx)(u.ListNavigatorProvider, {
                    navigator: y,
                    children: (0, a.jsx)(u.ListNavigatorContainer, {
                      children: e => {
                        let { ref: t, ...n } = e;
                        return (0, a.jsx)("div", { ref: t, ...n, children: U });
                      },
                    }),
                  }),
                  P,
                ],
              }),
              G,
            ],
          }),
        });
      }
      function U(e) {
        let {
            analyticsName: t,
            onFetch: n,
            channel: s,
            messages: i,
            hasMore: r,
            loading: o,
            loadMore: u,
            onJump: c,
            canCloseAllMessages: E = !1,
            renderHeader: S,
            renderEmptyState: _,
            renderMessage: T,
            getProTip: I,
            scrollerClassName: C,
            className: A,
            onCloseMessage: M,
            listName: x,
          } = e,
          O = (0, d.useStateFromStores)([N.default], () => {
            let e = null != s ? N.default.getMessages(s.id) : null;
            return (
              null != e &&
              null != e.jumpTargetId &&
              e.loadingMore &&
              null == e.get(e.jumpTargetId)
            );
          });
        function b(e, n) {
          let { id: a, blocked: l, author: s, channel_id: i } = e;
          if (l)
            f.default.show({
              title: v.default.Messages.UNBLOCK_TO_JUMP_TITLE,
              body: v.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                name: s.username,
              }),
              confirmText: v.default.Messages.OKAY,
            });
          else if (!O) {
            let e = g.default.getChannel(i);
            null != e &&
              (h.default.trackJump(i, a, t),
              (0, p.transitionTo)(R.Routes.CHANNEL(e.getGuildId(), i, a))),
              null == c || c(n);
          }
        }
        l.useEffect(() => {
          n(s);
        }, [s, n]);
        let y = l.useMemo(
          () => (null == i ? void 0 : i.map(e => ({ message: e, channel: s }))),
          [i, s]
        );
        return (0, a.jsx)(D, {
          className: A,
          scrollerClassName: C,
          items: y,
          loading: o,
          analyticsName: t,
          renderEmptyState: _,
          renderHeader: S,
          hasMore: r,
          loadMore: u,
          getProTip: I,
          renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != T) return T(t, e => b(t, e));
            let l = [];
            return null == n
              ? []
              : (l.push(
                  (0, a.jsxs)(
                    "div",
                    {
                      className: L.messageGroupWrapper,
                      children: [
                        (0, a.jsx)(m.default, {
                          className: L.messageGroupCozy,
                          message: t,
                          channel: n,
                        }),
                        (0, a.jsx)(F, {
                          channel: s,
                          message: t,
                          jumping: O,
                          canCloseAllMessages: E,
                          jumpTo: b,
                          onCloseMessage: M,
                        }),
                      ],
                    },
                    t.id
                  )
                ),
                l);
          },
          listName: x,
          "aria-label": e["aria-label"],
        });
      }
    },
    425773: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getListboxOptionProps: function () {
            return c;
          },
          default: function () {
            return h;
          },
        }),
        n("70102");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("782340"),
        u = n("328391");
      function d(e) {
        e.stopPropagation(), e.preventDefault();
      }
      function c(e, t, n) {
        return {
          id: "".concat(e, "-").concat(t),
          role: "option",
          tabIndex: -1,
          "aria-selected": n,
        };
      }
      class f extends l.PureComponent {
        renderQuery(e) {
          let {
            query: t,
            navId: n,
            focusedIndex: l,
            onSelectQuery: s,
            onSelectSearchEverywhere: d,
            onHighlightQuery: f,
            hideQuery: h,
            searchFavorites: E,
          } = this.props;
          if (e || h) return null;
          let m = -1 === l;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(r.Clickable, {
                className: i(u.queryContainer, { [u.focused]: m }),
                ...c(n, -1, m),
                onMouseEnter: f,
                onClick: s,
                children: [
                  (0, a.jsx)("div", {
                    className: u.queryText,
                    children: E
                      ? o.default.Messages.SEARCH_FAVORITES
                      : o.default.Messages.SEARCH_FOR_VALUE.format({
                          value: t,
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: u.queryShortcut,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(r.KeyCombo, {
                      shortcut: "return",
                      dim: !0,
                      className: u.keyCombo,
                    }),
                  }),
                ],
              }),
              E &&
                (0, a.jsxs)(r.Clickable, {
                  className: i(u.queryContainer, { [u.focused]: m }),
                  ...c(n, -1, m),
                  onMouseEnter: f,
                  onClick: d,
                  children: [
                    (0, a.jsx)("div", {
                      className: u.queryText,
                      children: o.default.Messages.SEARCH_EVERYWHERE,
                    }),
                    (0, a.jsx)("div", {
                      className: u.queryShortcut,
                      "aria-hidden": !0,
                      children: (0, a.jsx)(r.KeyCombo, {
                        shortcut: "shift+return",
                        dim: !0,
                        className: u.keyCombo,
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        renderResults(e) {
          let {
            numResults: t,
            renderNoResults: n,
            renderInitialState: a,
            renderResult: l,
            renderCustomResults: s,
          } = this.props;
          if (e) return a();
          if (0 === t) return n();
          if (null != l) return Array.from({ length: t }).map((e, t) => l(t));
          if (null != s) return s();
          throw Error(
            "SearchResultsPopout.renderResults: Flow should never allow this..."
          );
        }
        render() {
          let { query: e, focusedIndex: t, navId: n, width: l } = this.props,
            s = "" === e.trim();
          return (0, a.jsxs)("div", {
            className: u.container,
            style: { width: l },
            onMouseDown: d,
            role: "listbox",
            id: n,
            tabIndex: -1,
            "aria-activedescendant": "".concat(n, "-").concat(t),
            children: [this.renderQuery(s), this.renderResults(s)],
          });
        }
      }
      f.defaultProps = {
        renderInitialState: () => null,
        hideQuery: !1,
        width: 320,
      };
      var h = f;
    },
    954172: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Filter: function () {
            return i;
          },
          Answer: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("545146");
      function s(e, t) {
        let { children: n } = e;
        return (0, a.jsx)("span", { className: t, children: n });
      }
      let i = e => s(e, l.searchFilter),
        r = e => s(e, l.searchAnswer);
    },
    904575: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("512861");
      n.es(a, t);
    },
    763377: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("93510");
      n.es(a, t);
    },
    54549: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("922934");
      n.es(a, t);
    },
    440275: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("440224");
      n.es(a, t);
    },
    342072: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("471206");
      n.es(a, t);
    },
    756166: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("884691"),
        l = () => {
          let e = a.useRef(!0);
          a.useEffect(
            () => () => {
              e.current = !1;
            },
            []
          );
          let t = a.useCallback(() => e.current, []);
          return t;
        };
    },
    976789: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("424973");
      var a,
        l = n("872717"),
        s = n("95410"),
        i = n("913144"),
        r = n("355025"),
        o = n("605250"),
        u = n("718517"),
        d = n("773336"),
        c = n("286235"),
        f = n("50885");
      let h = 1 * u.default.Millis.HOUR,
        E = 7 * u.default.Millis.DAY,
        m = 1 * u.default.Millis.DAY,
        p = s.default.get("lastNonRequiredUpdateShown", Date.now()),
        S = new o.default("AutoUpdateManager");
      a = class {
        destroy() {
          clearInterval(this._checkInterval);
        }
        quitAndInstall() {
          this.updateAvailable &&
            (this.hasNativeUpdate
              ? null != this._bootstrapper
                ? this._bootstrapper.finishBootstrap()
                : f.default.send("QUIT_AND_INSTALL")
              : location.reload(!0));
        }
        async _requestNewUpdaterBootstrap() {
          let e;
          S.log("Bootstrapping new updater host...");
          try {
            await f.default.ensureModule("discord_updater_bootstrap"),
              (e = f.default.requireModule("discord_updater_bootstrap")),
              (this._bootstrapper = e);
          } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
          }
          try {
            this._handleCheckingForUpdates(),
              await e.bootstrap(f.default.releaseChannel, "win"),
              (this.updateAvailable = !0),
              (this.hasNativeUpdate = !0),
              this._handleUpdateDownloaded(!0);
          } catch (e) {
            S.log("Failed to bootstrap new updater:", e),
              this._handleNativeUpdateNotAvailable(),
              c.default.captureException(e);
          }
        }
        _emitCallbacks() {
          this._callbacks.forEach(e => e(this.updateAvailable)),
            (this._callbacks = []);
        }
        constructor(e = h) {
          var t = this;
          (this.updateAvailable = !1),
            (this.hasNativeUpdate = !1),
            (this._callbacks = []),
            (this._bootstrapper = null),
            (this.checkForUpdates = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (e || !t.hasNativeUpdate) {
                if (d.isPlatformEmbedded) {
                  let e =
                    "win32" === (0, d.getPlatformName)() &&
                    f.default.canBootstrapNewUpdater;
                  e
                    ? t._requestNewUpdaterBootstrap()
                    : f.default.send("CHECK_FOR_UPDATES");
                } else t._handleNativeUpdateNotAvailable();
              }
              return new Promise(e => {
                t.updateAvailable ? e(!0) : t._callbacks.push(e);
              });
            }),
            (this._handleCheckingForUpdates = () => {
              i.default.dispatch({ type: "CHECKING_FOR_UPDATES" });
            }),
            (this._handleNativeUpdateNotAvailable = () => {
              this._handleCheckingForUpdates(),
                l.default
                  .get({
                    url: ""
                      .concat(location.protocol, "//")
                      .concat(location.host)
                      .concat("/assets/", "version.")
                      .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                    query: { _: (Date.now() / 1e3 / 60 / 5) | 0 },
                    oldFormErrors: !0,
                  })
                  .then(
                    e => {
                      if (
                        null == e.body ||
                        "c5713295a8a1ce004f273c743080553d1d9de1af" ===
                          e.body.hash
                      )
                        return this._handleUpdateNotAvailable();
                      if (e.body.required || (0, r.probablyHasBuildOverride)())
                        return this._handleUpdateDownloaded(!1);
                      let t =
                        "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? E : m;
                      if (Date.now() - p > t)
                        return (
                          s.default.set(
                            "lastNonRequiredUpdateShown",
                            Date.now()
                          ),
                          this._handleUpdateDownloaded(!1)
                        );
                    },
                    () => this._handleUpdateError()
                  );
            }),
            (this._handleUpdateNotAvailable = () => {
              i.default.dispatch({ type: "UPDATE_NOT_AVAILABLE" }),
                this._emitCallbacks();
            }),
            (this._handleUpdateAvailable = e => {
              (this.updateAvailable = !0),
                (this.hasNativeUpdate = e),
                i.default.dispatch({ type: "UPDATE_AVAILABLE" });
            }),
            (this._handleUpdateManually = () => {
              (this.updateAvailable = !0),
                (this.hasNativeUpdate = !0),
                i.default.dispatch({ type: "UPDATE_MANUALLY" });
            }),
            (this._handleUpdateError = e => {
              (this.updateAvailable = !1),
                i.default.dispatch({ type: "UPDATE_ERROR", message: e });
            }),
            (this._handleUpdateDownloaded = (e, t, n, a, l) => {
              this._handleUpdateAvailable(e),
                i.default.dispatch({
                  type: "UPDATE_DOWNLOADED",
                  releaseNotes: t,
                  releaseName: n,
                  releaseDate: a,
                  updateURL: l,
                }),
                this._emitCallbacks();
            }),
            d.isPlatformEmbedded &&
              (f.default.on(
                "CHECKING_FOR_UPDATES",
                this._handleCheckingForUpdates
              ),
              f.default.on(
                "UPDATE_NOT_AVAILABLE",
                this._handleNativeUpdateNotAvailable
              ),
              f.default.on("UPDATE_AVAILABLE", () =>
                this._handleUpdateAvailable(!0)
              ),
              f.default.on("UPDATE_ERROR", this._handleUpdateError),
              f.default.on("UPDATE_DOWNLOADED", () =>
                this._handleUpdateDownloaded(!0)
              ),
              f.default.on("UPDATE_MANUALLY", this._handleUpdateManually)),
            i.default.wait(() => {
              this.checkForUpdates();
            }),
            (this._checkInterval = setInterval(this.checkForUpdates, e));
        }
      };
    },
    531674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMuteTimes: function () {
            return S;
          },
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        s = n.n(l),
        i = n("446674"),
        r = n("77078"),
        o = n("820542"),
        u = n("519705"),
        d = n("319165"),
        c = n("282109"),
        f = n("34676"),
        h = n("679653"),
        E = n("49111"),
        m = n("468200"),
        p = n("782340");
      let S = () => [
          {
            value: m.MuteUntilSeconds.MINUTES_15,
            label: p.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: m.MuteUntilSeconds.HOURS_1,
            label: p.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: m.MuteUntilSeconds.HOURS_3,
            label: p.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: m.MuteUntilSeconds.HOURS_8,
            label: p.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: m.MuteUntilSeconds.HOURS_24,
            label: p.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: m.MuteUntilSeconds.ALWAYS,
            label: p.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        g = e => {
          let t = e > 0 ? s().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function N(e, t) {
        let [n, l] = (0, i.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          s = (0, d.useMutedUntilText)(l),
          m = (0, h.default)(e, !0);
        function N(t) {
          t &&
            e.type === E.ChannelTypes.GUILD_CATEGORY &&
            (0, o.categoryCollapse)(e.id),
            u.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let _ = p.default.Messages.MUTE_CHANNEL_GENERIC,
          T = p.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case E.ChannelTypes.GUILD_CATEGORY:
            (_ = p.default.Messages.MUTE_CATEGORY),
              (T = p.default.Messages.UNMUTE_CATEGORY);
            break;
          case E.ChannelTypes.GROUP_DM:
            (_ = p.default.Messages.MUTE_CONVERSATION),
              (T = p.default.Messages.UNMUTE_CONVERSATION);
            break;
          case E.ChannelTypes.DM:
            (_ = p.default.Messages.MUTE_CHANNEL.format({ name: m })),
              (T = p.default.Messages.UNMUTE_CHANNEL.format({ name: m }));
            break;
          default:
            (_ = p.default.Messages.MUTE_CHANNEL_GENERIC),
              (T = p.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: T,
              subtext: s,
              action: () => N(!1),
            })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: _,
              action: () => N(!0),
              children: S().map(n => {
                let { value: l, label: s } = n;
                return (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "".concat(l),
                    label: s,
                    action: () =>
                      (function (n) {
                        e.type === E.ChannelTypes.GUILD_CATEGORY &&
                          (0, o.categoryCollapse)(e.id);
                        let a = g(n);
                        u.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          f.NotificationLabels.Muted,
                          t
                        );
                      })(l),
                  },
                  l
                );
              }),
            });
      }
    },
    619436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelNotificationRadioItems: function () {
            return h;
          },
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        i = n("519705"),
        r = n("721281"),
        o = n("282109"),
        u = n("34676"),
        d = n("49111"),
        c = n("782340");
      function f(e) {
        var t, n, a;
        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e.type) {
          case d.ChannelTypes.GUILD_VOICE:
            return l
              ? ((t = e),
                [
                  {
                    setting: d.UserNotificationSettings.NULL,
                    label:
                      null != t.parent_id
                        ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                        : c.default.Messages.FORM_LABEL_DEFAULT,
                  },
                  {
                    setting: d.UserNotificationSettings.ALL_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY,
                  },
                  {
                    setting: d.UserNotificationSettings.ONLY_MENTIONS,
                    label:
                      c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format(),
                  },
                  {
                    setting: d.UserNotificationSettings.NO_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_NOTHING,
                  },
                ])
              : null;
          case d.ChannelTypes.GUILD_STAGE_VOICE:
            return (
              (n = e),
              [
                {
                  setting: d.UserNotificationSettings.NULL,
                  label:
                    null != n.parent_id
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
          default:
            return (
              (a = e),
              [
                {
                  setting: d.UserNotificationSettings.NULL,
                  label:
                    null != a.parent_id
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ALL_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_ALL_MESSAGES,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
        }
      }
      function h(e) {
        let t = e.getGuildId(),
          n = e.id,
          h = (0, l.useStateFromStores)(
            [o.default],
            () => {
              let n = d.UserNotificationSettings.NULL;
              return (
                null != e.parent_id &&
                  (n = o.default.getChannelMessageNotifications(
                    t,
                    e.parent_id
                  )),
                n !== d.UserNotificationSettings.NULL
                  ? n
                  : o.default.getMessageNotifications(t)
              );
            },
            [t, e.parent_id]
          ),
          E = (0, l.useStateFromStores)([o.default], () =>
            o.default.getNewForumThreadsCreated(e)
          ),
          m = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.getChannelOverrides(t)[n],
            [t, n]
          ),
          p =
            null == m
              ? d.UserNotificationSettings.NULL
              : m.message_notifications,
          S = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
          g = f(e, S);
        return null == g
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(s.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: E,
                          action: () => i.default.setForumThreadsCreated(e, !E),
                        }),
                        (0, a.jsx)(s.MenuSeparator, {}),
                      ],
                    })
                  : null,
                g.map(l => {
                  let { setting: r, label: o } = l;
                  return (0, a.jsx)(
                    s.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(r),
                      label: o,
                      subtext:
                        r === d.UserNotificationSettings.NULL
                          ? (function (e, t) {
                              let n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (e) {
                                case d.UserNotificationSettings.ALL_MESSAGES:
                                  return t.type ===
                                    d.ChannelTypes.GUILD_VOICE && n
                                    ? c.default.Messages
                                        .FORM_LABEL_ALL_VOICE_ACTIVITY
                                    : c.default.Messages
                                        .FORM_LABEL_ALL_MESSAGES;
                                case d.UserNotificationSettings.ONLY_MENTIONS:
                                  return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                case d.UserNotificationSettings.NO_MESSAGES:
                                  return c.default.Messages.FORM_LABEL_NOTHING;
                                case d.UserNotificationSettings.NULL:
                                default:
                                  return;
                              }
                            })(h, e, S)
                          : void 0,
                      action: () => {
                        var e;
                        return (
                          (e = r),
                          void (
                            null != t &&
                            i.default.updateChannelOverrideSettings(
                              t,
                              n,
                              { message_notifications: e },
                              u.NotificationLabel.notifications(e)
                            )
                          )
                        );
                      },
                      checked: r === p,
                    },
                    r
                  );
                }),
              ],
            });
      }
      function E(e) {
        var t, n;
        let i = h(e),
          u = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.resolvedMessageNotifications(e),
            [e]
          ),
          E = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id]
          ),
          m =
            null == E
              ? d.UserNotificationSettings.NULL
              : E.message_notifications,
          p = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
          S =
            m === d.UserNotificationSettings.NULL && e.isGuildStageVoice()
              ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
              : null === (n = f(e, p)) || void 0 === n
                ? void 0
                : null ===
                      (t = n.find(e => {
                        let { setting: t } = e;
                        return t === u;
                      })) || void 0 === t
                  ? void 0
                  : t.label;
        return null != i
          ? (0, a.jsx)(s.MenuItem, {
              id: "channel-notifications",
              label: c.default.Messages.NOTIFICATION_SETTINGS,
              subtext: S,
              children: i,
            })
          : null;
      }
    },
    646240: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        i = n("755624"),
        r = n("263024"),
        o = n("782340");
      function u(e, t) {
        let n = (0, l.useStateFromStores)([i.default], () =>
          i.default.hasJoined(e.id)
        );
        return n
          ? (0, a.jsx)(s.MenuItem, {
              id: "leave-thread",
              label: e.isForumPost()
                ? o.default.Messages.LEAVE_FORUM_POST
                : o.default.Messages.LEAVE_THREAD,
              action: () => r.default.leaveThread(e, t),
            })
          : (0, a.jsx)(s.MenuItem, {
              id: "join-thread",
              label: e.isForumPost()
                ? o.default.Messages.JOIN_FORUM_POST
                : o.default.Messages.JOIN_THREAD,
              action: () => r.default.joinThread(e, t),
            });
      }
    },
    255228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        s = n.n(l),
        i = n("446674"),
        r = n("77078"),
        o = n("319165"),
        u = n("755624"),
        d = n("263024"),
        c = n("531674"),
        f = n("782340");
      function h(e) {
        let [t, n, l] = (0, i.useStateFromStoresArray)([u.default], () => [
            u.default.isMuted(e.id),
            u.default.getMuteConfig(e.id),
            u.default.hasJoined(e.id),
          ]),
          h = (0, o.useMutedUntilText)(n);
        function E(t) {
          d.default.setNotificationSettings(e, { muted: t });
        }
        return l
          ? t
            ? (0, a.jsx)(r.MenuItem, {
                id: "unmute-channel",
                label: e.isForumPost()
                  ? f.default.Messages.UNMUTE_FORUM_POST
                  : f.default.Messages.UNMUTE_THREAD,
                subtext: h,
                action: () => E(!1),
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "mute-channel",
                label: e.isForumPost()
                  ? f.default.Messages.MUTE_FORUM_POST
                  : f.default.Messages.MUTE_THREAD,
                action: () => E(!0),
                children: (0, c.getMuteTimes)().map(t => {
                  let { value: n, label: l } = t;
                  return (0, a.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(n),
                      label: l,
                      action: () =>
                        (function (t) {
                          let n =
                            t > 0 ? s().add(t, "second").toISOString() : null;
                          d.default.setNotificationSettings(e, {
                            muted: !0,
                            mute_config: {
                              selected_time_window: t,
                              end_time: n,
                            },
                          });
                        })(n),
                    },
                    n
                  );
                }),
              })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-disabled",
              label: e.isForumPost()
                ? f.default.Messages.MUTE_FORUM_POST
                : f.default.Messages.MUTE_THREAD,
              disabled: !0,
            });
      }
    },
    76813: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("550410"),
        o = n("778588"),
        u = n("42887"),
        d = n("522049"),
        c = n("664336"),
        f = n("56947"),
        h = n("386045"),
        E = n("18346"),
        m = n("728658"),
        p = n("389535"),
        S = n("80028"),
        g = n("782340");
      function N(e) {
        let { canShowReminder: t = !1, className: N } = e,
          _ = (0, E.default)(u.default),
          { showClipsHeaderEntrypoint: T } = f.ClipsExperiment.useExperiment(
            { location: "ClipsButton" },
            { autoTrackExposure: !1 }
          ),
          {
            hasClips: I,
            hasNewClips: C,
            lastClipsSession: A,
            remindersEnabled: M,
            hasAnyClipAnimations: x,
          } = (0, s.useStateFromStoresObject)([h.default], () => ({
            hasClips: h.default.hasClips(),
            hasNewClips: h.default.getNewClipIds().length > 0,
            lastClipsSession: h.default.getLastClipsSession(),
            remindersEnabled: h.default.getSettings().remindersEnabled,
            hasAnyClipAnimations: h.default.hasAnyClipAnimations(),
          })),
          R = null != A && A.newClipIds.length > 0,
          v = (0, m.useClipsButtonStore)(e => e.clipsButtonRef),
          L = (0, m.useClipsButtonStore)(e => e.setClipsButtonRef),
          O = (0, s.useStateFromStores)([o.default], () =>
            o.default.hasLayers()
          ),
          { preventIdle: b, allowIdle: y } = (0, r.usePreventIdle)("animation");
        function j() {
          (0, i.openModalLazy)(
            async () => {
              let { default: e } = await n
                .el("167573")
                .then(n.bind(n, "167573"));
              return t => (0, a.jsx)(e, { ...t });
            },
            { modalKey: S.CLIPS_GALLERY_MODAL_KEY }
          );
        }
        return (l.useEffect(() => (x ? b() : y(), () => y()), [x, b, y]),
        T && _ && I)
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                null != v &&
                  t &&
                  M &&
                  R &&
                  !(0, i.hasAnyModalOpen)() &&
                  !O &&
                  (0, a.jsx)(p.default, {
                    clipIconRef: v,
                    lastClipsSession: A,
                    onOpenClipsGallery: j,
                  }),
                (0, a.jsx)("div", {
                  ref: L,
                  children: (0, a.jsx)(c.Icon, {
                    className: N,
                    icon: d.default,
                    showBadge: C,
                    tooltip: g.default.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: j,
                  }),
                }),
              ],
            })
          : null;
      }
    },
    728658: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useClipsButtonStore: function () {
            return l;
          },
        });
      var a = n("308503");
      let l = (0, a.default)(e => ({
        clipsButtonRef: null,
        setClipsButtonRef: t => e({ clipsButtonRef: t }),
      }));
    },
    389535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("803725"),
        i = n("714319"),
        r = n("782340"),
        o = n("688112");
      function u(e) {
        let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: u } = e;
        return (0, a.jsxs)(l.TooltipLayer, {
          tooltipClassName: o.reminderTooltip,
          tooltipContentClassName: o.tooltipContent,
          targetElementRef: { current: n },
          position: "bottom",
          color: l.TooltipColors.PRIMARY,
          children: [
            (0, a.jsx)(i.default, {}),
            (0, a.jsx)(l.Heading, {
              variant: "heading-md/extrabold",
              children: r.default.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
                count: u.newClipIds.length,
              }),
            }),
            (0, a.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                (0, a.jsx)(l.Button, {
                  color: l.Button.Colors.TRANSPARENT,
                  onClick: s.clearClipsSession,
                  children: r.default.Messages.DISMISS,
                }),
                (0, a.jsx)(l.Button, {
                  color: l.Button.Colors.BRAND,
                  onClick: t,
                  children: r.default.Messages.CLIPS_REVIEW_NOW,
                }),
              ],
            }),
          ],
        });
      }
    },
    714319: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("446674"),
        r = n("386045"),
        o = n("187004");
      function u() {
        let e = (0, i.useStateFromStoresArray)([r.default], () => {
          var e;
          let t =
            null === (e = r.default.getLastClipsSession()) || void 0 === e
              ? void 0
              : e.newClipIds;
          return null == t
            ? []
            : r.default
                .getClips()
                .slice(0, 4)
                .filter(e => t.includes(e.id));
        });
        return (0, a.jsx)("div", {
          className: s(o.thumbnailStack, {
            [o["height-1"]]: 1 === e.length,
            [o["height-2"]]: 2 === e.length,
            [o["height-3"]]: 3 === e.length,
            [o["height-max"]]: e.length >= 4,
          }),
          children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
              null != e
                ? (0, a.jsx)(
                    "img",
                    { alt: "", className: o.thumbnail, src: e.thumbnail },
                    e.id
                  )
                : (0, a.jsx)("div", {}, "placeholder-".concat(t))
            )
            .reverse(),
        });
      }
    },
    336696: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var a = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2021-12_inferno_spam_redaction",
        label: "Inferno Spam Redaction",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Allow guild channel messages from spammers to be collapsed",
            config: { enabled: !0 },
          },
        ],
      });
    },
    954732: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144"),
        s = n("449008"),
        i = n("49111");
      let r = [],
        o = {},
        u = null,
        d = 0;
      function c(e) {
        let t = null;
        try {
          t = JSON.parse(e.launch_parameters);
        } catch {
          return null;
        }
        if (e.platform_type === i.PlatformTypes.XBOX) {
          let n = null == t ? void 0 : t.titleId,
            a = null == t ? void 0 : t.inviteToken;
          return null == n || null == a
            ? null
            : {
                ...e,
                parsed_launch_parameters: { titleId: n, inviteToken: a },
              };
        }
        return null;
      }
      class f extends a.default.Store {
        getInvites() {
          return r;
        }
        getInviteStatuses() {
          return o;
        }
        isInviteGameInstalled(e) {
          var t;
          return null === (t = o[e.invite_id]) || void 0 === t
            ? void 0
            : t.installed;
        }
        isInviteJoinable(e) {
          var t;
          return null === (t = o[e.invite_id]) || void 0 === t
            ? void 0
            : t.joinable;
        }
        getLastUnseenInvite() {
          return u;
        }
        getUnseenInviteCount() {
          return d;
        }
      }
      f.displayName = "GameInviteStore";
      var h = new f(l.default, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
          let { gameInvites: t } = e;
          r = t.map(c).filter(s.isNotNullish);
        },
        GAME_INVITE_CREATE: function (e) {
          let { gameInvite: t } = e,
            n = c(t);
          null != n && ((r = [n, ...r]), (u = t), (d += 1));
        },
        GAME_INVITE_DELETE: function (e) {
          let { inviteId: t } = e;
          r = r.filter(e => e.invite_id !== t);
        },
        GAME_INVITE_DELETE_MANY: function (e) {
          let { inviteIds: t } = e;
          r = r.filter(e => !t.includes(e.invite_id));
        },
        GAME_INVITE_UPDATE_STATUS: function (e) {
          (o = { ...o })[e.inviteId] = {
            installed: e.installed,
            joinable: e.joinable,
          };
        },
        GAME_INVITE_CLEAR_UNSEEN: function (e) {
          (u = null), (d = 0);
        },
      });
    },
    22082: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-11_xbox_game_invites",
        label: "Xbox Game Invites Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Xbox Game Invites UI Enabled",
            config: { enabled: !0 },
          },
        ],
      });
      var s = l;
    },
    362189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateInviteStatus: function () {
            return o;
          },
          launchInviteGame: function () {
            return u;
          },
          acceptInvite: function () {
            return d;
          },
          clearUnseenInvites: function () {
            return c;
          },
          deleteInvite: function () {
            return f;
          },
          deleteAllInvites: function () {
            return h;
          },
        }),
        n("70102");
      var a = n("872717"),
        l = n("913144"),
        s = n("760850"),
        i = n("773336"),
        r = n("49111");
      async function o(e) {
        if (e.platform_type === r.PlatformTypes.XBOX) {
          let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
          if (!(0, i.isWindows)() || null == t || null == n) return;
          let a = await E(t, !1),
            s = await p(n);
          l.default.dispatch({
            type: "GAME_INVITE_UPDATE_STATUS",
            inviteId: e.invite_id,
            installed: a,
            joinable: s,
          });
        } else throw Error("Unsupported invite platform " + e.platform_type);
      }
      async function u(e) {
        if (e.platform_type === r.PlatformTypes.XBOX) {
          let t = e.parsed_launch_parameters.titleId;
          return !!(0, i.isWindows)() && null != t && (await m(t));
        }
        throw Error("Unsupported invite platform " + e.platform_type);
      }
      async function d(e) {
        if (e.platform_type === r.PlatformTypes.XBOX) {
          let t = e.parsed_launch_parameters.inviteToken;
          return !!(0, i.isWindows)() && null != t && (await S(t));
        }
        throw Error("Unsupported invite platform " + e.platform_type);
      }
      function c() {
        l.default.dispatch({ type: "GAME_INVITE_CLEAR_UNSEEN" });
      }
      async function f(e) {
        await a.default.delete({ url: r.Endpoints.GAME_INVITE(e.invite_id) });
      }
      async function h() {
        await a.default.delete({ url: r.Endpoints.GAME_INVITES });
      }
      async function E(e, t) {
        if (!(0, i.isWindows)()) return !1;
        let n = await (0, s.default)();
        return new Promise((a, l) => {
          if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
            l(Error("Game utils module not loaded"));
            return;
          }
          n.xboxIsApplicationInstalled(e, t, e => {
            a(e);
          });
        });
      }
      async function m(e) {
        if (!(0, i.isWindows)()) return !1;
        let t = await (0, s.default)();
        return new Promise((n, a) => {
          if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
            a(Error("Game utils module not loaded"));
            return;
          }
          t.xboxLaunchGame(e, e => {
            n(e);
          });
        });
      }
      async function p(e) {
        if (!(0, i.isWindows)()) return !1;
        let t = await (0, s.default)();
        return new Promise((n, a) => {
          if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
            a(Error("Game utils module not loaded"));
            return;
          }
          t.xboxIsInviteTokenValid(e, e => {
            n(e);
          });
        });
      }
      async function S(e) {
        if (!(0, i.isWindows)()) return !1;
        let t = await (0, s.default)();
        return new Promise((n, a) => {
          if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
            a(Error("Game utils module not loaded"));
            return;
          }
          t.xboxAcceptGameInvite(e, e => {
            n(e);
          });
        });
      }
    },
    513472: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        s = n.n(l),
        i = n("446674"),
        r = n("77078"),
        o = n("519705"),
        u = n("531674"),
        d = n("319165"),
        c = n("282109"),
        f = n("34676"),
        h = n("782340");
      function E(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: l, muteConfig: E } = (0, i.useStateFromStoresObject)(
            [c.default],
            () => ({
              muted: null != n ? c.default.isMuted(n) : void 0,
              muteConfig: null != n ? c.default.getMuteConfig(n) : void 0,
            }),
            [n]
          ),
          m = (0, d.useMutedUntilText)(E);
        return null == n
          ? null
          : l
            ? (0, a.jsx)(r.MenuItem, {
                id: "unmute-guild",
                label: h.default.Messages.UNMUTE_SERVER,
                subtext: m,
                action: () =>
                  o.default.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.NotificationLabels.Unmuted
                  ),
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "mute-guild",
                label: h.default.Messages.MUTE_SERVER,
                action: () =>
                  o.default.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.NotificationLabels.Muted
                  ),
                children: (0, u.getMuteTimes)().map(e => {
                  let { value: l, label: i } = e;
                  return (0, a.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(l),
                      label: i,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let a =
                            e > 0 ? s().add(e, "second").toISOString() : null;
                          o.default.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: a,
                              },
                            },
                            f.NotificationLabels.Muted,
                            t
                          );
                        })(l),
                    },
                    l
                  );
                }),
              });
      }
    },
    957825: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        i = n("531674"),
        r = n("619436"),
        o = n("625399"),
        u = n("513472"),
        d = n("47495"),
        c = n("233069"),
        f = n("305961");
      function h(e) {
        let {
            channel: t,
            closePopout: n,
            onSelect: h,
            navId: E,
            label: m,
            location: p,
            includeGuildMute: S,
          } = e,
          g = (0, r.useChannelNotificationRadioItems)(t),
          N = (0, o.useChannelNotificationSettingsItemInner)(t),
          _ = (0, l.useStateFromStores)([f.default], () =>
            f.default.getGuild(t.guild_id)
          ),
          T = (0, u.default)(_),
          I =
            (0, d.useShouldUseNewNotificationSystem)(
              "ChannelNotificationSettingsPopoutMenu"
            ) && c.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(t.type);
        return (0, a.jsxs)(s.Menu, {
          navId: E,
          onClose: n,
          "aria-label": m,
          onSelect: h,
          children: [
            (0, a.jsx)(s.MenuGroup, { children: (0, i.default)(t, p) }),
            S ? (0, a.jsx)(s.MenuGroup, { children: T }) : null,
            I ? N : (0, a.jsx)(s.MenuGroup, { children: g }),
          ],
        });
      }
    },
    539938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          handleDoubleClick: function () {
            return C;
          },
          default: function () {
            return R;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("394846"),
        r = n("446674"),
        o = n("812204"),
        u = n("685665"),
        d = n("76813"),
        c = n("311197"),
        f = n("92790"),
        h = n("697218"),
        E = n("664336"),
        m = n("773336"),
        p = n("50885"),
        S = n("836056"),
        g = n("922953"),
        N = n("879035"),
        _ = n("49111"),
        T = n("724210"),
        I = n("461585");
      async function C() {
        if ((0, m.isMac)() && m.isPlatformEmbedded) {
          var e, t, n;
          let a =
            null !==
              (n = await (null ===
                (e = (t = window.DiscordNative.remoteApp)
                  .getDefaultDoubleClickAction) || void 0 === e
                ? void 0
                : e.call(t))) && void 0 !== n
              ? n
              : "Maximize";
          "Minimize" === a
            ? p.default.minimize()
            : "Maximize" === a && p.default.maximize();
        }
      }
      function A(e) {
        let {
            children: t,
            className: n,
            channelId: l,
            guildId: s,
            innerClassname: o,
            transparent: u = !1,
            toolbar: m,
            mobileToolbar: p,
            "aria-label": _,
            "aria-labelledby": T,
            scrollable: A,
            role: M,
            hideSearch: x,
            showDivider: R,
          } = e,
          v = (0, r.useStateFromStores)([h.default], () =>
            h.default.getCurrentUser()
          ),
          L =
            (null == v ? void 0 : v.isStaff()) ||
            (null == v ? void 0 : v.isStaffPersonal()) ||
            !1;
        return (0, a.jsx)(E.default, {
          className: n,
          innerClassName: o,
          toolbar: (function () {
            if (null == m) return null;
            let e = null != l && !x;
            return i.isMobile
              ? p
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    m,
                    e
                      ? (0, a.jsx)(
                          f.default,
                          { className: I.search },
                          null != s ? s : l
                        )
                      : null,
                    R && (0, a.jsx)(E.default.Divider, {}),
                    (0, a.jsx)(N.default, {}),
                    (0, a.jsx)(d.default, { canShowReminder: !0 }),
                    (0, a.jsx)(c.default, {}),
                    L ? (0, a.jsx)(g.default, {}) : (0, a.jsx)(S.default, {}),
                  ],
                });
          })(),
          transparent: u,
          onDoubleClick: C,
          "aria-label": _,
          "aria-labelledby": T,
          role: M,
          scrollable: A,
          children: t,
        });
      }
      function M(e) {
        let {
          children: t,
          className: n,
          "aria-label": l,
          "aria-labelledby": s,
          role: i,
        } = e;
        return (0, a.jsx)(E.default, {
          className: n,
          onDoubleClick: C,
          "aria-label": l,
          "aria-labelledby": s,
          role: i,
          children: t,
        });
      }
      function x(e) {
        let { isAuthenticated: t = !0, ...n } = e,
          { AnalyticsLocationProvider: l } = (0, u.default)(
            o.default.HEADER_BAR
          ),
          i = s(n.className, {
            [I.forumOrHome]:
              (null != n.channelType &&
                _.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType)) ||
              n.channelId === T.StaticChannelRoute.GUILD_HOME,
          });
        return (0, a.jsx)(l, {
          children: t
            ? (0, a.jsx)(A, { ...n, className: i })
            : (0, a.jsx)(M, { ...n, className: i }),
        });
      }
      (x.Title = E.default.Title),
        (x.Icon = E.default.Icon),
        (x.Divider = E.default.Divider),
        (x.Caret = E.default.Caret);
      var R = x;
    },
    836056: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("669491"),
        i = n("77078"),
        r = n("915639"),
        o = n("697218"),
        u = n("834179"),
        d = n("664336"),
        c = n("599110"),
        f = n("701909"),
        h = n("158998"),
        E = n("49111"),
        m = n("782340");
      let p = new Set(["ko", "ja"]);
      function S() {
        let e = (0, l.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          t = (0, l.useStateFromStores)([r.default], () => r.default.locale),
          n = (0, h.isNewUser)(e);
        return (0, a.jsx)(i.Anchor, {
          href: f.SUPPORT_LOCATION,
          target: "_blank",
          tabIndex: -1,
          children: (0, a.jsx)(d.Icon, {
            color: n
              ? s.default.unsafe_rawColors.GREEN_360.css
              : "currentColor",
            onClick: () =>
              c.default.track(E.AnalyticEvents.HELP_CLICKED, {
                highlighted: n,
              }),
            icon: u.default,
            tooltipPosition: p.has(t) ? "left" : void 0,
            tooltip: m.default.Messages.HELP,
          }),
        });
      }
    },
    922953: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("545158"),
        o = n("370492"),
        u = n("368694"),
        d = n("471654"),
        c = n("496657"),
        f = n("758710"),
        h = n("664336"),
        E = n("701909"),
        m = n("782340");
      function p() {
        let e = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.isDeveloper
          ),
          [t, p] = l.useState(!1),
          [S, g] = l.useState(0),
          N = e => {
            clearTimeout(S),
              g(
                setTimeout(() => {
                  p(e);
                }, 100)
              );
          };
        return (0, a.jsx)("div", {
          onMouseEnter: () => N(!0),
          onMouseLeave: () => N(!1),
          children: (0, a.jsx)(i.Popout, {
            shouldShow: t,
            animation: i.Popout.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => p(!0),
            onRequestClose: () => p(!1),
            renderPopout: () =>
              (function (e) {
                let { onClose: t, isDiscordDeveloper: l } = e;
                return (0, a.jsx)(i.Menu, {
                  onSelect: () => {},
                  navId: "staff-help-popout",
                  variant: "fixed",
                  onClose: t,
                  "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: (0, a.jsxs)(i.MenuGroup, {
                    children: [
                      (0, a.jsx)(i.MenuItem, {
                        id: "staff-help-bug-reporter",
                        label: m.default.Messages.BUG_REPORT_TITLE,
                        icon: d.default,
                        action: () =>
                          (0, i.openModalLazy)(async () => {
                            let { default: e } = await n
                              .el("323518")
                              .then(n.bind(n, "323518"));
                            return t => (0, a.jsx)(e, { ...t });
                          }),
                      }),
                      l &&
                        (0, a.jsx)(i.MenuItem, {
                          id: "staff-devtools",
                          label: "Toggle DevTools",
                          icon: c.default,
                          action: () => (0, o.toggleDisplayDevTools)(),
                        }),
                      (0, a.jsx)(i.MenuItem, {
                        id: "staff-help-center",
                        label: "Go to Help Center",
                        icon: f.default,
                        action: () => (0, r.default)(E.SUPPORT_LOCATION),
                      }),
                    ],
                  }),
                });
              })({ onClose: () => p(!1), isDiscordDeveloper: e }),
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, a.jsx)(h.Icon, {
                ...e,
                icon: d.default,
                "aria-label": m.default.Messages.HELP,
                selected: n,
              });
            },
          }),
        });
      }
    },
    879035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("404118"),
        o = n("649486"),
        u = n("236717"),
        d = n("945956"),
        c = n("195812"),
        f = n("733350"),
        h = n("664336"),
        E = n("868308"),
        m = n("782340"),
        p = n("461585");
      class S extends l.PureComponent {
        static getDerivedStateFromProps(e, t) {
          return e.mode !== t.memoizedMode
            ? { memoizedMode: e.mode, clicked: !1 }
            : null;
        }
        handleDownloadApps() {
          (0, i.openModal)(e =>
            (0, a.jsx)(o.default, { source: "Links", ...e })
          );
        }
        render() {
          switch (this.props.mode) {
            case "UPDATE_AVAILABLE":
              return (0, a.jsx)(h.Icon, {
                hideOnClick: !1,
                tooltip: m.default.Messages.UPDATE_AVAILABLE,
                foreground: p.downloadArrow,
                background: p.cloud,
                icon: f.default,
              });
            case "UPDATE_MANUALLY":
            case "UPDATE_DOWNLOADED":
              return (0, a.jsx)(h.Icon, {
                tooltip: m.default.Messages.UPDATE_DOWNLOADED,
                foreground: p.updateIconForeground,
                onClick: this.handleInstallDownload,
                icon: c.default,
              });
            default:
              return null;
          }
        }
        constructor(...e) {
          super(...e),
            (this.state = { memoizedMode: this.props.mode, clicked: !1 }),
            (this.handleInstallDownload = () => {
              d.default.isConnected()
                ? r.default.show({
                    title: m.default.Messages.UPDATE_DURING_CALL_TITLE,
                    body: m.default.Messages.UPDATE_DURING_CALL_BODY,
                    onConfirm: this.doUpdate,
                    cancelText: m.default.Messages.CANCEL,
                    confirmText: m.default.Messages.UPDATE_DURING_CALL_CONTINUE,
                  })
                : this.doUpdate();
            }),
            (this.doUpdate = () => {
              !this.state.clicked &&
                (this.setState({ clicked: !0 }), (0, E.quitAndInstall)());
            });
        }
      }
      var g = s.default.connectStores([u.default], () => ({
        mode: u.default.getState(),
      }))(S);
    },
    960808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRemindersLoader: function () {
            return u;
          },
        }),
        n("222007");
      var a = n("884691"),
        l = n("446674"),
        s = n("819689"),
        i = n("42203"),
        r = n("377253"),
        o = n("931318");
      function u(e) {
        let t = (0, l.useStateFromStoresArray)([i.default, r.default], () =>
            e
              .filter(e => null != i.default.getChannel(e.channelId))
              .map(e => r.default.getMessage(e.channelId, e.messageId))
              .filter(e => null != e)
          ),
          n = e.filter(
            e => null == r.default.getMessage(e.channelId, e.messageId)
          ),
          [u, d] = a.useState(0 === n.length);
        return (
          a.useEffect(() => {
            (0, o.fetchAndUpdateSavedMessages)();
          }, []),
          a.useEffect(() => {
            !u &&
              (n.forEach(e => {
                try {
                  s.default.fetchMessages({
                    channelId: e.channelId,
                    limit: 1,
                    jump: { messageId: e.messageId, flash: !1, offset: 1 },
                  });
                } catch {}
              }),
              d(!0));
          }, [n, u]),
          t
        );
      }
    },
    45835: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getSavedMessageAndChannel: function () {
            return c;
          },
        });
      var a = n("298386"),
        l = n("233069"),
        s = n("719926"),
        i = n("766274"),
        r = n("42203"),
        o = n("377253"),
        u = n("697218"),
        d = n("49111");
      function c(e) {
        var t, n, c;
        let f = o.default.getMessage(e.channelId, e.messageId),
          h = u.default.getUser(e.authorId),
          E = r.default.getChannel(e.channelId),
          m =
            null != h
              ? h
              : new i.default({ id: e.authorId, username: e.authorSummary }),
          p = new s.default({
            id: e.messageId,
            channel_id: e.channelId,
            author: m,
            content: e.messageSummary,
          }),
          S =
            null == e.guildId
              ? new l.DMChannelRecord({
                  id: e.channelId,
                  type: a.ChannelTypes.DM,
                  name:
                    null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                  guild_id: d.EMPTY_STRING_SNOWFLAKE_ID,
                  recipients: [
                    null !== (n = e.authorId) && void 0 !== n
                      ? n
                      : d.EMPTY_STRING_SNOWFLAKE_ID,
                  ],
                })
              : new l.GuildTextualChannelRecord({
                  id: e.channelId,
                  type:
                    null == e.guildId
                      ? a.ChannelTypes.DM
                      : a.ChannelTypes.GUILD_TEXT,
                  name:
                    null !== (c = e.channelSummary) && void 0 !== c ? c : "",
                  guild_id: e.guildId,
                });
        return { channel: null != E ? E : S, message: null != f ? f : p };
      }
    },
    459776: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isNewGroupItem: function () {
            return d;
          },
          default: function () {
            return c;
          },
        });
      var a = n("888400"),
        l = n("718517"),
        s = n("299039"),
        i = n("500858"),
        r = n("913491"),
        o = n("49111");
      let u = 7 * l.default.Millis.MINUTE;
      function d(e, t, n) {
        return (
          null == t ||
          (t.type === o.ChannelStreamTypes.MESSAGE &&
            t.content.id === t.content.channel_id) ||
          (t.type !== o.ChannelStreamTypes.MESSAGE &&
            t.type !== o.ChannelStreamTypes.THREAD_STARTER_MESSAGE) ||
          c(e, t.content, n)
        );
      }
      function c(e, t, n) {
        if (n.hasFlag(o.MessageFlags.HAS_THREAD) || n.isCommandType())
          return !0;
        if (n.type > o.MessageTypes.DEFAULT)
          return !(0, r.default)(t) || n.type === o.MessageTypes.REPLY || !1;
        return (
          !!(
            (0, r.default)(t) ||
            t.author.id !== n.author.id ||
            t.hasFlag(o.MessageFlags.EPHEMERAL) !==
              n.hasFlag(o.MessageFlags.EPHEMERAL) ||
            (null != n.webhookId && t.author.username !== n.author.username) ||
            ((null == e ? void 0 : e.isForumPost()) &&
              t.id === s.default.castChannelIdAsMessageId(e.id)) ||
            !(0, a.isWithinInterval)(t.timestamp, n.timestamp, u) ||
            (n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) &&
              !t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS)) ||
            (t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) &&
              !n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) &&
              (n.mentions.length > 0 ||
                n.mentionRoles.length > 0 ||
                n.mentionEveryone)) ||
            (0, i.default)(n)
          ) || !1
        );
      }
    },
    603531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n("702976");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        o = n("963119"),
        u = n("45476"),
        d = n("634807"),
        c = n("467475"),
        f = n("985883"),
        h = n("256572"),
        E = n("845579"),
        m = n("42203"),
        p = n("27618"),
        S = n("945330"),
        g = n("780571"),
        N = n("304198"),
        _ = n("568734"),
        T = n("299039"),
        I = n("654017"),
        C = n("913491"),
        A = n("574073"),
        M = n("359132"),
        x = n("723931"),
        R = n("39331"),
        v = n("68480"),
        L = n("596368"),
        O = n("227439"),
        b = n("862451"),
        y = n("611792"),
        j = n("554372"),
        F = n("49111"),
        D = n("782340"),
        U = n("864604"),
        k = n("5762"),
        P = l.memo(function e(t) {
          var n;
          let l;
          let {
              channel: s,
              message: S,
              compact: N = !1,
              className: U,
              onContextMenu: P,
              onClick: G,
              disableInteraction: B = !1,
              hasThread: H,
              treatSpam: V,
            } = t,
            Y = F.MessageTypesWithLazyLoadedReferences.has(S.type)
              ? S.messageReference
              : void 0,
            K = (0, r.useStateFromStores)([h.default], () =>
              h.default.getMessageByReference(Y)
            ),
            z = (0, r.useStateFromStores)([m.default], () =>
              S.type === F.MessageTypes.THREAD_STARTER_MESSAGE &&
              K.state === h.ReferencedMessageState.LOADED
                ? m.default.getChannel(K.message.channel_id)
                : null
            ),
            Q = E.InlineAttachmentMedia.useSetting(),
            W = E.InlineEmbedMedia.useSetting(),
            X = E.RenderEmbeds.useSetting(),
            q = E.GifAutoPlay.useSetting(),
            Z = (0, d.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (n = S.editedTimestamp) && void 0 !== n
                ? n
                : S.timestamp
              ).valueOf()
            ),
            J = (0, c.default)(null == s ? void 0 : s.id),
            { disableReactionCreates: $ } = (0, M.default)(s),
            { content: ee, hasSpoilerEmbeds: et } = (0, R.default)(S, {
              hideSimpleEmbedContent: W && X,
              allowList: Z,
              allowHeading: Z,
              allowLinks: !0,
              previewLinkTarget: !0,
            }),
            en = (0, A.default)(S),
            ea = (0, r.useStateFromStores)(
              [m.default],
              () =>
                S.hasFlag(F.MessageFlags.HAS_THREAD) &&
                m.default.getChannel(T.default.castMessageIdAsChannelId(S.id))
            ),
            el =
              S.type === F.MessageTypes.THREAD_STARTER_MESSAGE &&
              K.state === h.ReferencedMessageState.LOADED &&
              null != z,
            es = !el && void 0 === l,
            ei = (0, v.default)({ message: S, channel: s, enabled: es }),
            er = (0, o.useShouldRedactExplicitContent)(s.id, S.author.id),
            eo = (0, u.useShouldRenderReportFalsePositiveButton)(
              S.id,
              "inbox_message"
            ),
            eu = (0, f.default)(S);
          return el
            ? (0, a.jsx)(e, {
                ...t,
                message: K.message,
                channel: z,
                hasThread: !1,
              })
            : (p.default.isBlocked(S.author.id)
                  ? (l = D.default.Messages.BLOCKED_MESSAGE_COUNT)
                  : (0, I.isSpam)(S) &&
                    V &&
                    (l = D.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT),
                void 0 !== l)
              ? (0, a.jsx)(w, {
                  className: U,
                  compact: N,
                  count: 1,
                  collapsedReason: l,
                })
              : (0, a.jsx)(g.default, {
                  compact: N,
                  className: i(U, {
                    [k.ephemeral]: (0, _.hasFlag)(
                      S.flags,
                      F.MessageFlags.EPHEMERAL
                    ),
                    [k.disableInteraction]: B,
                    [k.groupStart]: t.isGroupStart,
                  }),
                  childrenRepliedMessage: (0, j.default)(S, s, Y, K, N),
                  childrenHeader: (0, O.default)({
                    ...t,
                    author: en,
                    guildId: s.guild_id,
                  }),
                  childrenAccessories: (0, a.jsx)(x.MessageAccessories, {
                    channel: s,
                    message: S,
                    hasSpoilerEmbeds: et,
                    compact: N,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: $,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: H,
                    renderComponentAccessory: !1,
                    inlineAttachmentMedia: Q,
                    inlineEmbedMedia: W,
                    renderEmbeds: X,
                    gifAutoPlay: q,
                    poll: eu,
                    showListsAndHeaders: Z,
                    showMaskedLinks: Z,
                    shouldHideMediaOptions: J,
                    shouldRedactExplicitContent: er,
                    shouldRenderCtaButton: eo,
                  }),
                  childrenExecutedCommand: (0, y.default)(S, s, N),
                  childrenMessageContent: (0, L.default)(t, ee),
                  childrenSystemMessage: (0, b.default)(t),
                  onContextMenu: P,
                  onClick: G,
                  hasThread:
                    !1 !== H &&
                    null != ea &&
                    S.hasFlag(F.MessageFlags.HAS_THREAD),
                  hasReply: S.type === F.MessageTypes.REPLY,
                  isSystemMessage: (0, C.default)(S),
                  messageRef: ei,
                });
        });
      function w(e) {
        let { className: t, count: n, compact: l, collapsedReason: s } = e;
        return (0, a.jsx)(g.default, {
          className: t,
          compact: l,
          role: "group",
          childrenMessageContent: (0, a.jsx)(N.default, {
            compact: l,
            className: U.blockedSystemMessage,
            iconNode: (0, a.jsx)(S.default, { className: U.blockedIcon }),
            children: (0, a.jsx)("div", {
              className: U.blockedMessageText,
              children: s.format({ count: n }),
            }),
          }),
        });
      }
    },
    739034: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var a = n("884691");
      let l = !1,
        s = new Set();
      function i(e) {
        e !== l && ((l = e), s.forEach(e => e(l)));
      }
      function r() {
        let [e, t] = a.useState(l);
        return (
          a.useEffect(() => {
            let e = e => {
              t(e);
            };
            return (
              s.add(e),
              () => {
                s.delete(e);
              }
            );
          }, []),
          e
        );
      }
      window.addEventListener("keydown", e => {
        i(e.shiftKey);
      }),
        window.addEventListener("keyup", e => {
          i(e.shiftKey);
        }),
        window.addEventListener("mousemove", e => {
          i(e.shiftKey);
        }),
        window.addEventListener("blur", () => {
          i(!1);
        });
    },
    777204: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PROFILE_BACKGROUND: function () {
            return a;
          },
          FRIEND_BACKGROUND: function () {
            return l;
          },
          MESSAGE_BACKGROUND: function () {
            return s;
          },
        });
      let a = "#83DDC5",
        l = "#F47FFF",
        s = "#FFDE4D";
    },
    352273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setNotificationCenterActive: function () {
            return f;
          },
          resetNotificationCenter: function () {
            return h;
          },
          fetchNotificationCenterItems: function () {
            return E;
          },
          markNotificationCenterItemAcked: function () {
            return m;
          },
          deleteNotificationCenterItem: function () {
            return S;
          },
        });
      var a = n("759843"),
        l = n("872717"),
        s = n("627929"),
        i = n("913144"),
        r = n("845579"),
        o = n("840707"),
        u = n("136511"),
        d = n("342176"),
        c = n("49111");
      function f(e) {
        i.default.dispatch({
          type: "NOTIFICATION_CENTER_SET_ACTIVE",
          active: e,
        });
      }
      function h() {
        i.default.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
      }
      async function E(e, t) {
        if (u.default.loading) return;
        await i.default.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
        let n = Math.ceil(u.default.items.length / e.limit);
        try {
          let l = await o.default.get({
            url: c.Endpoints.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
              event: a.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
              properties: e => {
                var t;
                let a = (
                  (null === (t = e.body) || void 0 === t ? void 0 : t.items) ||
                  []
                ).map(e => e.type);
                return (0, s.exact)({
                  page: n,
                  items: a,
                  item_count: a.length,
                });
              },
            },
            query: { ...e },
          });
          null == t || t(),
            await i.default.dispatch({
              type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
              items: l.body.items,
              cursor: l.body.cursor,
              hasMore: l.body.has_more,
            });
        } catch (e) {
          null == t || t(),
            await i.default.dispatch({
              type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE",
            });
        }
      }
      function m(e) {
        null != e.local_id
          ? (function (e) {
              i.default.dispatch({
                type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
                localIds: e,
              });
            })([e.local_id])
          : (0, d.isMentionItem)(e)
            ? (function (e) {
                i.default.dispatch({
                  type: "NOTIFICATION_CENTER_ITEMS_ACK",
                  optimistic: !0,
                  ids: [e],
                });
              })(e.id)
            : p(e.id);
      }
      async function p(e) {
        try {
          i.default.dispatch({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            optimistic: !0,
            ids: [e],
          }),
            await l.default.post({
              url: c.Endpoints.NOTIF_CENTER_ITEMS_ACK(e),
            });
        } catch (t) {
          i.default.dispatch({
            type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
            ids: [e],
          });
        }
      }
      async function S(e) {
        let t = r.NotificationCenterAckedBeforeId.getSetting();
        try {
          i.default.dispatch({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
          }),
            await o.default.delete({
              url: c.Endpoints.NOTIF_CENTER_ITEMS(e.id),
              body: {
                item_type: (0, d.isMentionItem)(e) ? "mention" : "regular",
              },
              trackedActionData: {
                event: a.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                properties: {
                  notification_center_id: e.id,
                  acked: (0, d.isRemoteAcked)(e, t),
                  item_type: e.type,
                },
              },
            });
        } catch (t) {
          throw (
            (i.default.dispatch({
              type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
              item: e,
            }),
            t)
          );
        }
      }
    },
    204116: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144");
      n("21121");
      var s = n("138217"),
        i = n("718517"),
        r = n("299039"),
        o = n("360191");
      let u = 90 * i.default.Millis.DAY,
        d = {
          tab: null,
          localItemAcks: {},
          hasNewMentions: !1,
          isDataStale: !1,
          isRefreshing: !1,
        };
      class c extends a.default.PersistedStore {
        initialize(e) {
          if ((this.waitFor(s.default), null != e)) {
            var t;
            ((d = e).localItemAcks = (function (e) {
              let t = {};
              for (let [n, a] of Object.entries(e))
                Date.now() - a < u && (t[n] = a);
              return t;
            })(null !== (t = d.localItemAcks) && void 0 !== t ? t : {})),
              (d.isDataStale = !0);
          }
        }
        getState() {
          return d;
        }
        getTab() {
          var e;
          return null !== (e = d.tab) && void 0 !== e
            ? e
            : o.NotificationCenterTabs.ForYou;
        }
        isLocalItemAcked(e) {
          return (
            null != e.local_id &&
            (null != d.localItemAcks[e.local_id] || r.default.age(e.id) > u)
          );
        }
        hasNewMentions() {
          return d.hasNewMentions;
        }
        isDataStale() {
          return d.isDataStale;
        }
        isRefreshing() {
          return d.isRefreshing;
        }
        shouldReload() {
          return d.hasNewMentions || d.isDataStale || d.isRefreshing;
        }
      }
      (c.displayName = "NotificationCenterStore"),
        (c.persistKey = "NotificationCenterStore");
      function f() {
        (d.hasNewMentions = !1), (d.isDataStale = !1), (d.isRefreshing = !1);
      }
      var h = new c(l.default, {
        MESSAGE_CREATE: function (e) {
          let { message: t } = e;
        },
        NOTIFICATION_CENTER_SET_TAB: function (e) {
          d = { ...d, tab: e.tab };
        },
        NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
          let { localIds: t } = e;
          t.forEach(e => {
            d = {
              ...d,
              localItemAcks: { ...d.localItemAcks, [e]: Date.now() },
            };
          });
        },
        NOTIFICATION_CENTER_REFRESH: function () {
          d.isRefreshing = !0;
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: f,
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: f,
      });
    },
    183030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useNotificationCenterItemAcked: function () {
            return i;
          },
        });
      var a = n("446674"),
        l = n("204116"),
        s = n("342176");
      let i = (e, t) => {
        let n = (0, a.useStateFromStores)([l.default], () =>
          l.default.isLocalItemAcked(e)
        );
        return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t));
      };
    },
    396539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useDesktopNotificationCenterItemsLoader: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("884691"),
        l = n("446674"),
        s = n("267363"),
        i = n("756166"),
        r = n("138217"),
        o = n("352273"),
        u = n("136511"),
        d = n("204116"),
        c = n("133335");
      let f = e => {
          let {
              isFocused: t,
              navigatedAway: n,
              isDesktop: f,
              withMentions: h = !1,
              initialPageSize: E,
            } = e,
            m = (0, l.useStateFromStores)([d.default], () =>
              d.default.shouldReload()
            ),
            p = a.useRef(!1),
            [S, g] = a.useState(!1),
            {
              initialized: N,
              loading: _,
              items: T,
              hasMore: I,
              cursor: C,
              errored: A,
            } = (0, l.useStateFromStoresObject)([u.default], () => ({
              initialized: u.default.initialized,
              loading: u.default.loading,
              items: u.default.items,
              hasMore: u.default.hasMore,
              cursor: u.default.cursor,
              errored: u.default.errored,
            })),
            { roleFilter: M, everyoneFilter: x } = (0,
            l.useStateFromStoresObject)([r.default], () => ({
              everyoneFilter: r.default.everyoneFilter,
              roleFilter: r.default.roleFilter,
            }));
          a.useEffect(
            () => (
              (0, o.setNotificationCenterActive)(!0),
              () => (0, o.setNotificationCenterActive)(!1)
            ),
            []
          ),
            a.useEffect(() => {
              N &&
                t &&
                (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER);
            }, [t, N]);
          let R = (0, i.default)();
          a.useEffect(
            () => () => {
              f
                ? !R() &&
                  (A || T.length > 100) &&
                  (0, o.resetNotificationCenter)()
                : n && T.length > 100 && (0, o.resetNotificationCenter)();
            },
            [n, T, f, R, A]
          ),
            a.useEffect(() => {
              let e = m && t;
              (!N || e) &&
                (0, o.fetchNotificationCenterItems)({
                  limit: null != E ? E : h ? 8 : 20,
                  with_mentions: h,
                  roles_filter: M,
                  everyone_filter: x,
                });
            }, [N, m, t, h, M, x, E]);
          let v = a.useCallback(
            async e => {
              !p.current &&
                N &&
                I &&
                null != C &&
                (e || !A) &&
                ((p.current = !0),
                g(!0),
                await (0, o.fetchNotificationCenterItems)(
                  {
                    after: C,
                    with_mentions: h,
                    roles_filter: M,
                    everyone_filter: x,
                    limit: h ? 8 : 20,
                  },
                  () => {
                    p.current = !1;
                  }
                ),
                g(!1));
            },
            [N, I, C, A, h, M, x]
          );
          return {
            initialized: N,
            loading: _,
            items: T,
            hasMore: I,
            loadMore: v,
            loadingMore: S,
            setReadNotifItemToAcked: e => {
              !e.acked && (e.acked = !0);
            },
            errored: A,
          };
        },
        h = () => {
          let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: a,
            loadMore: l,
          } = f({ isFocused: !0, isDesktop: !0 });
          return {
            initialized: e,
            loading: t,
            items: n.filter(e => "notification-center-item" === e.kind),
            hasMore: a,
            loadMore: l,
          };
        };
    },
    839743: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ForYouEmptyState: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("782340"),
        s = n("370127"),
        i = n("794027");
      let r = () =>
        (0, a.jsxs)("div", {
          className: s.container,
          children: [
            (0, a.jsx)("img", { className: s.image, alt: "", src: i }),
            (0, a.jsx)("div", {
              className: s.title,
              children: l.default.Messages.FOR_YOU_EMPTY_TITLE,
            }),
            (0, a.jsx)("div", {
              className: s.body,
              children: l.default.Messages.FOR_YOU_EMPTY_BODY,
            }),
          ],
        });
    },
    108367: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FOR_YOU_ICONS: function () {
            return C;
          },
          getIcon: function () {
            return M;
          },
          getIconByName: function () {
            return x;
          },
          getMask: function () {
            return R;
          },
          getBackground: function () {
            return v;
          },
        });
      var a,
        l,
        s,
        i,
        r = n("669491"),
        o = n("360191"),
        u = n("777204"),
        d = n("505406"),
        c = n("92440"),
        f = n("608108"),
        h = n("804621"),
        E = n("578299"),
        m = n("522420"),
        p = n("371031"),
        S = n("674517"),
        g = n("989306"),
        N = n("695449"),
        _ = n("816428"),
        T = n("710672");
      ((a = s || (s = {})).CHECKED = "CHECKED"),
        (a.FRIENDS = "FRIENDS"),
        (a.SHARE_SCREEN = "SHARE_SCREEN"),
        (a.NEW_MESSAGE = "NEW_MESSAGE");
      let I = { CHECKED: f, FRIENDS: E, SHARE_SCREEN: _, NEW_MESSAGE: g };
      ((l = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES"),
        (l.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER"),
        (l.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT"),
        (l.TOP_MESSAGES = "TOP_MESSAGES"),
        (l.NOTIFICATION_CENTER = "NOTIFICATION_CENTER"),
        (l.UPDATE_PROFILE = "UPDATE_PROFILE"),
        (l.FIND_FRIENDS = "FIND_FRIENDS"),
        (l.ADD_FRIEND = "ADD_FRIEND"),
        (l.FIRST_MESSAGE = "FIRST_MESSAGE");
      let C = {
          MISSED_MESSAGES: S,
          FRIEND_REQUEST_REMINDER: m,
          SCHEDULED_GUILD_EVENT: h,
          TOP_MESSAGES: p,
          NOTIFICATION_CENTER: c,
          UPDATE_PROFILE: T,
          FIND_FRIENDS: d,
          ADD_FRIEND: d,
          FIRST_MESSAGE: N,
        },
        A = e => {
          switch (e.item_enum) {
            case o.ItemEnum.ADD_FRIEND:
              return "ADD_FRIEND";
            case o.ItemEnum.FIND_FRIENDS:
              return "FIND_FRIENDS";
            case o.ItemEnum.FIRST_MESSAGE:
              return "FIRST_MESSAGE";
            case o.ItemEnum.UPDATE_PROFILE:
              return "UPDATE_PROFILE";
            default:
              return "NOTIFICATION_CENTER";
          }
        },
        M = e => {
          switch (e.type) {
            case "lifecycle_item":
              return A(e);
            case "missed_messages":
              return "MISSED_MESSAGES";
            case "friend_request_reminder":
              return "FRIEND_REQUEST_REMINDER";
            case "scheduled_guild_event_started":
              return "SCHEDULED_GUILD_EVENT";
            case "top_messages":
              return "TOP_MESSAGES";
            default:
              return "NOTIFICATION_CENTER";
          }
        },
        x = e => {
          if ("icHighlight" === e) return "TOP_MESSAGES";
          return "NOTIFICATION_CENTER";
        },
        R = e => {
          switch (e) {
            case o.NotificationCenterItems.GO_LIVE_PUSH:
              return {
                icon: I.SHARE_SCREEN,
                color: r.default.colors.BACKGROUND_ACCENT,
              };
            case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
              return {
                icon: I.CHECKED,
                color: r.default.colors.STATUS_POSITIVE_BACKGROUND,
              };
            case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
            case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
              return {
                icon: I.FRIENDS,
                color: r.default.colors.BACKGROUND_ACCENT,
              };
            case o.NotificationCenterItems.DM_FRIEND_NUDGE:
              return {
                icon: I.NEW_MESSAGE,
                color: r.default.colors.BACKGROUND_ACCENT,
              };
            case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
            case o.NotificationCenterLocalItems
              .INCOMING_FRIEND_REQUESTS_ACCEPTED:
              return {
                icon: I.FRIENDS,
                color: r.default.colors.BACKGROUND_ACCENT,
              };
            default:
              return null;
          }
        },
        v = e => {
          switch (e.item_enum) {
            case o.ItemEnum.UPDATE_PROFILE:
              return u.PROFILE_BACKGROUND;
            case o.ItemEnum.ADD_FRIEND:
            case o.ItemEnum.FIND_FRIENDS:
              return u.FRIEND_BACKGROUND;
            case o.ItemEnum.FIRST_MESSAGE:
              return u.MESSAGE_BACKGROUND;
            default:
              return r.default.unsafe_rawColors.BRAND_500.css;
          }
        };
    },
    899779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ForYouItemImage: function () {
            return d;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("766274"),
        i = n("587974"),
        r = n("108367"),
        o = n("637336");
      let u = e => {
          let { mask: t } = e;
          return null == t
            ? null
            : (0, a.jsx)("div", {
                className: o.maskBackground,
                style: { backgroundColor: t.color.css },
                children: (0, a.jsx)("img", {
                  className: o.maskIcon,
                  alt: "",
                  src: t.icon,
                }),
              });
        },
        d = l.memo(function (e) {
          let { item: t } = e,
            n = null,
            l = !1;
          if (null != t.icon_name)
            n = (0, a.jsx)("img", {
              alt: "",
              src: r.FOR_YOU_ICONS[(0, r.getIconByName)(t.icon_name)],
            });
          else if (null != t.other_user) {
            let e =
              t.other_user instanceof s.default
                ? t.other_user
                : new s.default(t.other_user);
            (n = (0, a.jsx)("img", {
              alt: "",
              className: o.image,
              src: e.getAvatarURL(void 0, 40),
            })),
              (l = !0);
          } else
            n =
              null != t.icon_url
                ? (0, a.jsx)("img", {
                    alt: "",
                    className: o.image,
                    src: t.icon_url,
                  })
                : (0, a.jsx)("img", {
                    alt: "",
                    src: r.FOR_YOU_ICONS[(0, r.getIcon)(t)],
                  });
          let d = (0, r.getMask)(t.type);
          return (0, a.jsxs)(i.default, {
            mask:
              null == d
                ? i.MaskIDs.AVATAR_DEFAULT
                : i.MaskIDs.AVATAR_STATUS_ROUND_16,
            width: 40,
            height: 40,
            rightOverhang: 3,
            bottomOverhang: 3,
            className: o.mask,
            children: [
              (0, a.jsx)("div", {
                className: o.container,
                style: l
                  ? void 0
                  : { backgroundColor: (0, r.getBackground)(t) },
                children: n,
              }),
              (0, a.jsx)(u, { mask: d }),
            ],
          });
        });
    },
    322964: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ForYouItems: function () {
            return y;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("308289"),
        r = n("537325"),
        o = n("367376"),
        u = n("401642"),
        d = n("845579"),
        c = n("766274"),
        f = n("697218"),
        h = n("599110"),
        E = n("299039"),
        m = n("253981"),
        p = n("352273"),
        S = n("360191"),
        g = n("342176"),
        N = n("183030"),
        _ = n("899779"),
        T = n("778597"),
        I = n("960082"),
        C = n("49111"),
        A = n("782340"),
        M = n("230730"),
        x = n("786948"),
        R = n("780810");
      function v(e) {
        var t, n, l;
        let { item: r } = e,
          u = null === (t = r.message) || void 0 === t ? void 0 : t.content;
        if (null == u) return (0, a.jsx)("div", { children: " " });
        let d =
            null !==
              (l = f.default.getUser(
                null === (n = r.other_user) || void 0 === n ? void 0 : n.id
              )) && void 0 !== l
              ? l
              : new c.default(r.other_user),
          h = o.default.parse(u);
        return (0, a.jsxs)("div", {
          className: M.messagePreviewContainer,
          children: [
            (0, a.jsx)(i.default, { user: d, size: s.AvatarSizes.SIZE_24 }),
            (0, a.jsx)(s.Text, {
              className: M.messagePreviewText,
              variant: "text-sm/normal",
              lineClamp: 2,
              children: h,
            }),
          ],
        });
      }
      function L(e) {
        let {
          item: { callout: t },
        } = e;
        if (null == t) return null;
        let n = o.default.parse(t);
        return (0, a.jsx)("div", {
          className: M.calloutContainer,
          children: (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            lineClamp: 2,
            children: n,
          }),
        });
      }
      function O(e) {
        let { item: t } = e,
          n = R,
          l = A.default.Messages.NOTIFICATION_CENTER_TODO;
        return (
          t.completed &&
            ((n = x), (l = A.default.Messages.NOTIFICATION_CENTER_DONE)),
          (0, a.jsxs)("div", {
            className: M.lifecycleContainer,
            children: [
              (0, a.jsx)("img", { className: M.checkbox, alt: "", src: n }),
              (0, a.jsx)(s.Text, {
                className: M.lifecycleText,
                variant: "text-xs/bold",
                color: "header-secondary",
                children: l,
              }),
            ],
          })
        );
      }
      let b = l.memo(function (e) {
          var t;
          let { item: i, ackedBeforeId: d } = e,
            c = (0, N.useNotificationCenterItemAcked)(i, d),
            f = l.useCallback(async () => {
              if (
                (!c && (0, p.markNotificationCenterItemAcked)(i),
                null != i.item_enum && i.item_enum === S.ItemEnum.FIND_FRIENDS)
              ) {
                (0, s.openModalLazy)(async () => {
                  let { default: e } = await n
                    .el("927960")
                    .then(n.bind(n, "927960"));
                  return t =>
                    (0, a.jsx)(e, { source: "Notification Center", ...t });
                });
                return;
              }
              if (null != i.deeplink) {
                let e = m.default.safeParseWithQuery(i.deeplink);
                if (null == e) return;
                let t = e.hostname,
                  n = e.path;
                if (null == t || null == n) return;
                if (m.default.isDiscordHostname(t)) {
                  let e = n.match("^/users/(\\d+)");
                  null != e && 2 === e.length
                    ? (0, u.openUserProfileModal)({
                        userId: e[1],
                        analyticsLocation: {
                          section: C.AnalyticsSections.NOTIFICATION_CENTER,
                        },
                      })
                    : await (0, r.default)(n);
                }
                h.default.track(C.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                  action_type: S.NotificationCenterActionTypes.CLICKED,
                  notification_center_id: i.id,
                  item_type: i.type,
                  acked: c,
                });
              }
            }, [i, c]),
            A = null;
          i.type === S.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS &&
            null != i.other_user &&
            (A = (0, a.jsx)(T.default, { userId: i.other_user.id }));
          let x = null != i.local_id;
          return (0, a.jsxs)("div", {
            className: M.row,
            children: [
              (0, a.jsxs)(s.ClickableContainer, {
                className: M.rowContent,
                focusProps: { offset: 4 },
                "aria-label": i.body,
                onClick: f,
                children: [
                  c ? null : (0, a.jsx)("div", { className: M.unread }),
                  (0, a.jsx)(_.ForYouItemImage, { item: i }),
                  (0, a.jsxs)("div", {
                    className: M.body,
                    children: [
                      "lifecycle_item" === i.type &&
                        null != i.item_enum &&
                        (0, a.jsx)(O, { item: i }),
                      (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: c ? "text-muted" : "text-normal",
                        children: o.default.parse(i.body),
                      }),
                      (null === (t = i.message) || void 0 === t
                        ? void 0
                        : t.content) != null
                        ? (0, a.jsx)(v, { item: i })
                        : null,
                      null != i.callout ? (0, a.jsx)(L, { item: i }) : null,
                      (0, a.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: c ? "text-muted" : "header-secondary",
                        children: (0, g.getRelativeTimestamp)(
                          E.default.extractTimestamp(i.id)
                        ),
                      }),
                      A,
                    ],
                  }),
                ],
              }),
              x ? null : (0, a.jsx)(I.MoreButton, { item: i }),
            ],
          });
        }),
        y = l.memo(function (e) {
          let { items: t } = e,
            n = d.NotificationCenterAckedBeforeId.useSetting();
          return (0, a.jsx)(a.Fragment, {
            children: t.map(e =>
              (0, a.jsx)(b, { item: e, ackedBeforeId: n }, e.id)
            ),
          });
        });
    },
    778597: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("736964"),
        r = n("782340"),
        o = n("230730");
      function u(e) {
        let { userId: t } = e,
          n = l.useCallback(
            e => {
              e.stopPropagation(), i.default.cancelFriendRequest(t);
            },
            [t]
          ),
          u = l.useCallback(
            e => {
              e.stopPropagation(), i.default.addRelationship({ userId: t });
            },
            [t]
          );
        return (0, a.jsxs)("div", {
          className: o.friendRequestContainer,
          children: [
            (0, a.jsx)(s.Button, {
              className: o.acceptButton,
              look: s.Button.Looks.FILLED,
              color: s.Button.Colors.GREEN,
              size: s.Button.Sizes.NONE,
              onClick: u,
              children: (0, a.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "always-white",
                children: r.default.Messages.FRIEND_REQUEST_ACCEPT,
              }),
            }),
            (0, a.jsx)(s.Button, {
              className: o.ignoreButton,
              look: s.Button.Looks.FILLED,
              color: s.Button.Colors.PRIMARY,
              size: s.Button.Sizes.NONE,
              onClick: n,
              children: (0, a.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "always-white",
                children: r.default.Messages.FRIEND_REQUEST_IGNORE,
              }),
            }),
          ],
        });
      }
    },
    960082: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MoreButton: function () {
            return f;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("211248"),
        r = n("433487"),
        o = n("228220"),
        u = n("352273"),
        d = n("782340");
      let c = e => {
          let { item: t, closePopout: n } = e;
          return (0, a.jsx)(s.Menu, {
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
            children: (0, a.jsx)(s.MenuItem, {
              id: "delete",
              label: d.default.Messages.DELETE,
              icon: o.default,
              action: async () => {
                await (0, u.deleteNotificationCenterItem)(t);
              },
            }),
          });
        },
        f = l.memo(function (e) {
          let { item: t } = e;
          return (0, a.jsx)(s.Popout, {
            renderPopout: e => (0, a.jsx)(c, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: s.Popout.Animation.NONE,
            children: e => {
              let { onClick: t } = e;
              return (0, a.jsx)(i.default, {
                tooltip: d.default.Messages.MORE,
                color: i.CircleIconButtonColors.TERTIARY,
                icon: (0, a.jsx)(r.default, { height: 16, width: 16 }),
                onClick: e => {
                  e.stopPropagation(), t(e);
                },
                "aria-haspopup": "menu",
              });
            },
          });
        });
    },
    673699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("759843"),
        i = n("974667"),
        r = n("77078"),
        o = n("510889"),
        u = n("428958"),
        d = n("839743"),
        c = n("322964"),
        f = n("531121");
      function h(e) {
        let { initialized: t, items: n, loading: h, loadMore: E } = e,
          m = l.useRef(null),
          p = (0, o.default)("for-you", m);
        (0, u.default)(
          {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
          },
          { disableTrack: !t },
          [t]
        );
        let S = () => {
          var e;
          let t =
            null === (e = m.current) || void 0 === e
              ? void 0
              : e.getScrollerState();
          if (null == t) return;
          let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
          n < 1500 && E();
        };
        return t
          ? 0 === n.length
            ? (0, a.jsx)(d.ForYouEmptyState, {})
            : (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(i.ListNavigatorProvider, {
                  navigator: p,
                  children: (0, a.jsx)(i.ListNavigatorContainer, {
                    children: e => {
                      let { ref: t, ...l } = e;
                      return (0, a.jsxs)(r.AdvancedScroller, {
                        className: f.container,
                        ref: e => {
                          var n;
                          (m.current = e),
                            (t.current =
                              null !==
                                (n =
                                  null == e ? void 0 : e.getScrollerNode()) &&
                              void 0 !== n
                                ? n
                                : null);
                        },
                        ...l,
                        onScroll: S,
                        children: [
                          (0, a.jsx)(c.ForYouItems, { items: n }),
                          h
                            ? (0, a.jsx)(r.Spinner, { className: f.spinner })
                            : null,
                        ],
                      });
                    },
                  }),
                }),
              })
          : (0, a.jsx)(r.Spinner, { className: f.loadingPlaceholder });
      }
    },
    138217: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        }),
        n("843762"),
        n("424973");
      var a = n("917351"),
        l = n.n(a),
        s = n("446674"),
        i = n("95410"),
        r = n("398183"),
        o = n("913144"),
        u = n("692038"),
        d = n("406297"),
        c = n("913491"),
        f = n("719926"),
        h = n("271938"),
        E = n("42203"),
        m = n("377253"),
        p = n("660478"),
        S = n("27618"),
        g = n("162771"),
        N = n("282109"),
        _ = n("697218"),
        T = n("49111");
      let I = "recentMentionFilterSettings",
        C = [],
        A = {},
        M = !1,
        x = !0,
        R = i.default.get(I, {
          guildFilter: T.RecentMentionsFilters.ALL_SERVERS,
          everyoneFilter: !0,
          roleFilter: !0,
        }),
        v = !1,
        L = 0,
        O = !1,
        b = !1;
      function y(e) {
        if (e instanceof f.default) return e;
        let t = m.default.getMessage(e.channel_id, e.id);
        return null != t ? t : (0, u.createMessageRecord)(e);
      }
      function j(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if ((0, c.default)(e)) return null;
        null == n && (n = e.channel_id);
        let a = E.default.getChannel(n);
        if (
          null == a ||
          a.type === T.ChannelTypes.DM ||
          (R.guildFilter === T.RecentMentionsFilters.THIS_SERVER &&
            a.getGuildId() !== g.default.getGuildId())
        )
          return null;
        let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
          s = h.default.getId();
        if ((null != l && S.default.isBlocked(l)) || l === s) return null;
        e = y(e);
        let i = !R.everyoneFilter,
          r = !R.roleFilter;
        return (0, d.default)({
          message: e,
          userId: s,
          suppressEveryone: i,
          suppressRoles: r,
        })
          ? (b &&
              p.default.ackMessageId(a.id) !== e.id &&
              (0, d.default)({
                message: e,
                userId: s,
                suppressEveryone: N.default.isSuppressEveryoneEnabled(
                  a.getGuildId()
                ),
                suppressRoles: N.default.isSuppressRolesEnabled(a.getGuildId()),
              }) &&
              (b = !1),
            e)
          : null;
      }
      function F(e) {
        if (null == A[e]) return !1;
        delete A[e],
          (C = l.filter(C, t => {
            let { id: n } = t;
            return n !== e;
          }));
      }
      function D(e) {
        let { id: t } = e;
        return F(t);
      }
      function U(e) {
        let t = { ...R };
        (R = l.defaults(
          l.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]),
          R
        )),
          i.default.set(I, R);
        let n = (e, n) => t[e] !== R[e] && R[e] === n,
          a =
            n("guildFilter", T.RecentMentionsFilters.THIS_SERVER) ||
            n("everyoneFilter", !1) ||
            n("roleFilter", !1);
        A = {};
        let s = [];
        a &&
          C.forEach(e => {
            let t = j(e);
            null != t && (s.push(t), (A[t.id] = !0));
          }),
          0 === (C = s).length && (v = !1);
      }
      function k() {
        (C = []), (A = {}), (v = !1), (b = !1);
      }
      function P() {
        C = C.filter(e => !S.default.isBlocked(e.author.id));
      }
      function w(e) {
        let { channel: t } = e;
        C = l.filter(C, e => e.channel_id !== t.id || (delete A[e.id], !1));
      }
      class G extends s.default.Store {
        initialize() {
          this.waitFor(_.default, E.default, m.default, p.default);
        }
        isOpen() {
          return O;
        }
        get hasLoadedEver() {
          return v;
        }
        get lastLoaded() {
          return L;
        }
        getMentions() {
          return v || C.length > 0 ? C : null;
        }
        hasMention(e) {
          return A[e];
        }
        get loading() {
          return M;
        }
        get hasMore() {
          return x;
        }
        get guildFilter() {
          return R.guildFilter;
        }
        get everyoneFilter() {
          return R.everyoneFilter;
        }
        get roleFilter() {
          return R.roleFilter;
        }
        get mentionsAreStale() {
          return b;
        }
      }
      G.displayName = "RecentMentionsStore";
      var B = new G(o.default, {
        LOAD_RECENT_MENTIONS: function (e) {
          let { guildId: t } = e;
          (M = !0),
            null == t &&
              R.guildFilter === T.RecentMentionsFilters.THIS_SERVER &&
              U({ guildFilter: T.RecentMentionsFilters.ALL_SERVERS });
        },
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { hasMoreAfter: t, messages: n, isAfter: a } = e,
            s = l.map(n, y);
          a ? (C = C.concat(s)) : ((C = s), (A = {})),
            l.forEach(s, e => {
              A[e.id] = !0;
            }),
            (M = !1),
            (x = t),
            (L = (0, r.now)()),
            (v = !0);
        },
        LOAD_RECENT_MENTIONS_FAILURE: function () {
          M = !1;
        },
        SET_RECENT_MENTIONS_FILTER: U,
        CLEAR_MENTIONS: function (e) {
          k();
        },
        TRUNCATE_MENTIONS: function (e) {
          let { size: t } = e;
          for (let e = t; e < C.length; ++e) delete A[C[e].id];
          let n = C.length;
          n > (C = C.slice(0, t)).length && (x = !0);
        },
        CHANNEL_SELECT: function () {
          if (R.guildFilter !== T.RecentMentionsFilters.THIS_SERVER) return !1;
          v = !1;
        },
        CONNECTION_OPEN: k,
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          C = l.filter(C, e => {
            let n = E.default.getChannel(e.channel_id);
            return (
              (null != n && n.getGuildId() !== t.id) || (delete A[e.id], !1)
            );
          });
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: n } = e,
            a = _.default.getCurrentUser();
          if (
            null == a ||
            !(0, d.isRawMessageMentioned)({
              rawMessage: n,
              userId: a.id,
              suppressRoles: !1,
              suppressEveryone: !1,
            })
          )
            return !1;
          let l = j(n, t);
          if (null == l) return !1;
          (C = C.slice()).unshift(l), (A[l.id] = !0);
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.id;
          if (null == A[String(t)]) return !1;
          let n = l.findIndex(C, e => {
            let { id: n } = e;
            return n === t;
          });
          C = C.slice();
          let a = C[n];
          null != a && (C[n] = (0, u.updateMessageRecord)(a, e.message));
        },
        MESSAGE_DELETE: D,
        RECENT_MENTION_DELETE: D,
        MESSAGE_DELETE_BULK: function (e) {
          let { ids: t } = e;
          l.forEach(t, F);
        },
        CHANNEL_DELETE: w,
        THREAD_DELETE: w,
        RELATIONSHIP_ADD: P,
        RELATIONSHIP_REMOVE: P,
        MENTION_MODAL_OPEN: function () {
          O = !0;
        },
        MENTION_MODAL_CLOSE: function () {
          O = !1;
        },
        SET_RECENT_MENTIONS_STALE: function (e) {
          b = !0;
        },
      });
    },
    440612: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FloatingActionButton: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("171385");
      let i = e => {
        let { text: t, icon: n, onClick: i } = e;
        return (0, a.jsxs)(l.Button, {
          className: s.button,
          innerClassName: s.buttonInner,
          onClick: i,
          children: [
            (0, a.jsx)(n, {}),
            (0, a.jsx)(l.Text, {
              variant: "text-md/semibold",
              color: "none",
              children: t,
            }),
          ],
        });
      };
    },
    981024: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("151426"),
        r = n("136511"),
        o = n("360191"),
        u = n("342176"),
        d = n("396539"),
        c = n("673699"),
        f = n("845579"),
        h = n("211248"),
        E = n("11539"),
        m = n("599110"),
        p = n("299039"),
        S = n("64318"),
        g = n("49111"),
        N = n("782340"),
        _ = n("479128");
      function T(e) {
        let { onClick: t } = e;
        return (0, a.jsx)(h.default, {
          tooltip: N.default.Messages.MARK_ALL_AS_READ,
          color: h.CircleIconButtonColors.SECONDARY,
          icon: (0, a.jsx)(E.default, {}),
          onClick: t,
        });
      }
      function I(e) {
        let { setTab: t, badgeState: n, closePopout: h } = e,
          {
            initialized: E,
            items: N,
            loading: I,
            loadMore: C,
          } = (0, d.useDesktopNotificationCenterItemsLoader)(),
          A = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.localItems
          ),
          M = l.useMemo(
            () => [
              ...[...N, ...A].sort(
                (e, t) => -1 * p.default.compare(e.id, t.id)
              ),
            ],
            [N, A]
          ),
          x = N.length > 0 ? N[0] : null,
          R = f.NotificationCenterAckedBeforeId.useSetting(),
          v = l.useMemo(() => {
            let e = null != x && 0 >= p.default.compare(x.id, R);
            if (e) return !1;
            for (let e of M) {
              if (0 >= p.default.compare(e.id, R)) break;
              if (!(0, u.isRemoteAcked)(e, R)) return !0;
            }
            return !1;
          }, [x, R, M]);
        return (0, a.jsxs)("div", {
          className: _.container,
          children: [
            (0, a.jsx)(S.default, {
              tab: i.InboxTab.FOR_YOU,
              setTab: t,
              badgeState: n,
              closePopout: h,
              children: v
                ? (0, a.jsx)(T, {
                    onClick: () => {
                      null != x &&
                        (f.NotificationCenterAckedBeforeId.updateSetting(x.id),
                        m.default.track(
                          g.AnalyticEvents.NOTIFICATION_CENTER_ACTION,
                          {
                            action_type:
                              o.NotificationCenterActionTypes.MARK_ALL_READ,
                          }
                        ));
                    },
                  })
                : null,
            }),
            (0, a.jsx)(c.default, {
              initialized: E,
              items: M,
              loading: I,
              loadMore: C,
            }),
          ],
        });
      }
    },
    124031: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        i = n("630086"),
        r = n("20606"),
        o = n("360191"),
        u = n("393414"),
        d = n("27618"),
        c = n("564875"),
        f = n("956089"),
        h = n("599110"),
        E = n("49111"),
        m = n("782340"),
        p = n("659860");
      function S(e) {
        let { closePopout: t } = e,
          n = (0, l.useStateFromStores)([d.default], () =>
            d.default.getPendingCount()
          );
        return (0, a.jsx)(s.TooltipContainer, {
          text: m.default.Messages.VIEW_FRIEND_REQUESTS,
          children: (0, a.jsxs)(s.Clickable, {
            className: p.friendRequestsButton,
            onClick: () => {
              h.default.track(E.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                action_type:
                  o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK,
              }),
                (0, u.transitionTo)(E.Routes.FRIENDS),
                i.default.setSection(E.FriendsSections.PENDING),
                t();
            },
            children: [
              (0, a.jsx)(c.default, {}),
              (0, a.jsx)(f.NumberBadge, {
                count: n,
                color: r.default.BACKGROUND_ACCENT,
              }),
            ],
          }),
        });
      }
    },
    530686: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("782340"),
        u = n("797190");
      function d(e) {
        let { className: t, onJump: n } = e,
          [s, d] = l.useState(!1);
        return (0, a.jsx)(r.Clickable, {
          className: i(u.jumpButton, t),
          onClick: e => {
            d(!0), n(e);
          },
          children: s
            ? (0, a.jsx)(r.Spinner, { type: r.Spinner.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: u.text,
                children: o.default.Messages.JUMP,
              }),
        });
      }
    },
    150938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("913796"),
        r = n("211248"),
        o = n("11539"),
        u = n("599110"),
        d = n("440612"),
        c = n("49111"),
        f = n("782340");
      function h(e) {
        let { type: t, onClick: n } = e,
          [s, h] = l.useState(!1),
          m = (0, i.useInDesktopNotificationCenterExperiment)(),
          p = () => {
            n(),
              u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
              });
          },
          S = e => {
            e.shiftKey ? p() : h(!0);
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            s ? (0, a.jsx)(E, { confirm: p, cancel: () => h(!1) }) : null,
            "bottom-floating" === t
              ? (0, a.jsx)(d.FloatingActionButton, {
                  text: f.default.Messages.MARK_ALL_AS_READ,
                  icon: o.default,
                  onClick: S,
                })
              : (0, a.jsx)(r.default, {
                  tooltip: m
                    ? f.default.Messages.MARK_ALL_AS_READ
                    : f.default.Messages.UNREADS_MARK_READ,
                  color: r.CircleIconButtonColors.SECONDARY,
                  icon: (0, a.jsx)(o.default, {}),
                  onClick: S,
                }),
          ],
        });
      }
      function E(e) {
        let { cancel: t, confirm: n } = e;
        return (0, a.jsx)(s.DeclarativeConfirmModal, {
          dismissable: !0,
          header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
          confirmText: f.default.Messages.MARK_AS_READ,
          cancelText: f.default.Messages.CANCEL,
          confirmButtonColor: s.Button.Colors.BRAND,
          onCancel: t,
          onConfirm: n,
          children: (0, a.jsx)(s.Text, {
            color: "text-normal",
            variant: "text-sm/normal",
            children:
              f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION,
          }),
        });
      }
    },
    519540: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        o = n.n(r),
        u = n("866227"),
        d = n.n(u),
        c = n("446674"),
        f = n("151426"),
        h = n("77078"),
        E = n("272030"),
        m = n("819689"),
        p = n("843962"),
        S = n("679653"),
        g = n("931318"),
        N = n("520899"),
        _ = n("988864"),
        T = n("960808"),
        I = n("45835"),
        C = n("699473"),
        A = n("393414"),
        M = n("845579"),
        x = n("42203"),
        R = n("305961"),
        v = n("377253"),
        L = n("476263"),
        O = n("93393"),
        b = n("11539"),
        y = n("672571"),
        j = n("805614"),
        F = n("64318"),
        D = n("49111"),
        U = n("782340"),
        k = n("923624"),
        P = n("126343");
      let w = { offset: { left: 4, right: -12 } };
      function G(e) {
        let { setTab: t, closePopout: n } = e,
          s = (0, c.useStateFromStores)([N.default], () =>
            N.default.getMessageReminders()
          );
        l.useEffect(
          () => () => {
            (0, g.cleanupMessageReminders)();
          },
          []
        );
        let [i, r] = l.useState(!1),
          o = l.useMemo(
            () => s.filter(e => null == e.dueAt || e.dueAt < new Date()),
            [s]
          ),
          u = i ? s : o,
          d = u.filter(e => !(0, _.savedMessageHasMetadata)(e));
        return (
          (0, T.useMessageRemindersLoader)(d),
          (0, a.jsxs)("div", {
            className: k.container,
            children: [
              (0, a.jsx)(F.default, {
                tab: f.InboxTab.TODOS,
                setTab: t,
                closePopout: n,
              }),
              (0, a.jsxs)("div", {
                className: k.headerText,
                children: [
                  (0, a.jsx)(h.Heading, {
                    variant: "heading-lg/bold",
                    children: i
                      ? U.default.Messages.MESSAGE_REMINDERS_HEADER_ALL
                      : U.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE,
                  }),
                  (0, a.jsx)(h.Anchor, {
                    onClick: () => r(!i),
                    children: (0, a.jsx)(h.Text, {
                      variant: "text-sm/normal",
                      color: "text-link",
                      children: i
                        ? U.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format(
                            { count: o.length }
                          )
                        : U.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format(
                            { count: s.length }
                          ),
                    }),
                  }),
                ],
              }),
              0 === u.length ? (0, a.jsx)(H, {}) : null,
              (0, a.jsx)(h.AdvancedScrollerThin, {
                children: u.map(e =>
                  (function (e) {
                    return [
                      (0, a.jsx)(B, { messageId: e.messageId }, e.messageId),
                    ];
                  })(e)
                ),
              }),
            ],
          })
        );
      }
      function B(e) {
        let t,
          { messageId: l } = e,
          s = (0, c.useStateFromStores)([N.default], () =>
            N.default.getMessageReminders().find(e => e.messageId === l)
          );
        o(
          null != s,
          "should not be rendering a to-do message without a to-do message"
        );
        let r = s.complete,
          u = (0, c.useStateFromStores)([v.default], () =>
            v.default.getMessage(s.channelId, s.messageId)
          ),
          { message: f, channel: _ } = (0, I.getSavedMessageAndChannel)(s),
          T = x.default.getChannel(_.id),
          b = (0, S.default)(T, !0),
          j = null != b ? b : _.name,
          F = (0, c.useStateFromStores)([R.default], () =>
            R.default.getGuild(null == _ ? void 0 : _.guild_id)
          ),
          G = null != _ ? (0, p.getChannelIconURL)(_) : null,
          B = null;
        return (
          null != s.dueAt &&
            (s.dueAt > new Date()
              ? ((t = "text-muted"),
                (B = U.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                  duration: d
                    .duration(s.dueAt.getTime() - Date.now(), "millisecond")
                    .humanize(),
                })))
              : ((t = "text-danger"),
                (B = U.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                  duration: d
                    .duration(Date.now() - s.dueAt.getTime(), "millisecond")
                    .humanize(),
                })))),
          (0, a.jsxs)("div", {
            className: P.container,
            children: [
              (0, a.jsxs)("div", {
                className: k.messageHeader,
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("div", {
                        className: k.messageInfo,
                        children: [
                          null != F
                            ? (0, a.jsx)(L.default, {
                                className: k.guildIcon,
                                guild: F,
                                size: L.default.Sizes.SMALL,
                                active: !0,
                              })
                            : (0, a.jsx)(h.Avatar, {
                                "aria-hidden": !0,
                                src: null != G ? G : n("518533"),
                                size: h.AvatarSizes.SIZE_32,
                              }),
                          (0, a.jsx)(h.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            selectable: !0,
                            children: j,
                          }),
                        ],
                      }),
                      null != s.notes && s.notes.length > 0
                        ? (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: k.notes,
                            selectable: !0,
                            children: [
                              (0, a.jsx)(y.default, { width: 12, height: 12 }),
                              s.notes,
                            ],
                          })
                        : null,
                      null != B
                        ? (0, a.jsx)(h.Text, {
                            variant: "text-sm/medium",
                            color: t,
                            style: { marginTop: 4 },
                            children: B,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: k.reminderActions,
                    children: [
                      (0, a.jsx)(h.TooltipContainer, {
                        text: U.default.Messages.MESSAGE_REMINDERS_SNOOZE,
                        children: (0, a.jsx)(h.Clickable, {
                          onClick: e =>
                            (0, E.openContextMenuLazy)(e, async () => {
                              let { default: e } = await n
                                .el("763582")
                                .then(n.bind(n, "763582"));
                              return t => (0, a.jsx)(e, { ...t, message: f });
                            }),
                          className: k.clock,
                          children: (0, a.jsx)(O.default, {}),
                        }),
                      }),
                      (0, a.jsx)(h.Checkbox, {
                        type: h.Checkbox.Types.INVERTED,
                        value: r,
                        onChange: (e, t) => {
                          (0, g.toggleMessageReminders)(s.messageId, t);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: i(P.messageContainer, k.unloadedMessage, {
                  [k.disabledMessage]: r,
                }),
                children: [
                  (0, a.jsx)(
                    C.default,
                    {
                      message: f,
                      channel: _,
                      className: P.message,
                      compact: M.MessageDisplayCompact.getSetting(),
                      animateAvatar: !1,
                      focusProps: w,
                      trackAnnouncementViews: !0,
                    },
                    f.id
                  ),
                  (0, a.jsxs)("div", {
                    className: k.actions,
                    children: [
                      null == u
                        ? (0, a.jsx)(h.Button, {
                            onClick: () => {
                              m.default.fetchMessages({
                                channelId: s.channelId,
                                limit: 1,
                                jump: {
                                  messageId: s.messageId,
                                  flash: !1,
                                  offset: 1,
                                },
                              });
                            },
                            size: h.Button.Sizes.MIN,
                            color: h.Button.Colors.TRANSPARENT,
                            className: k.loadButton,
                            children: (0, a.jsx)(h.Text, {
                              variant: "text-xs/normal",
                              children: "Load",
                            }),
                          })
                        : null,
                      (0, a.jsx)(h.Button, {
                        onClick: () => {
                          (0, A.transitionTo)(
                            D.Routes.CHANNEL(
                              null == _ ? void 0 : _.getGuildId(),
                              s.channelId,
                              s.messageId
                            )
                          );
                        },
                        size: h.Button.Sizes.MIN,
                        color: h.Button.Colors.TRANSPARENT,
                        className: k.loadButton,
                        children: (0, a.jsx)(h.Text, {
                          variant: "text-xs/normal",
                          children: U.default.Messages.JUMP,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function H() {
        let e = (0, c.useStateFromStores)(
          [N.default],
          () => N.default.getMessageReminders().length > 0
        );
        return e
          ? null
          : (0, a.jsx)(j.default, {
              Icon: b.default,
              header: U.default.Messages.MESSAGE_REMINDERS_EMPTY,
              tip: U.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP,
            });
      }
    },
    333491: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("458960"),
        o = n("65597"),
        u = n("206230"),
        d = n("979268"),
        c = n("520899"),
        f = n("567356");
      class h extends l.PureComponent {
        componentDidUpdate(e) {
          e.count < this.props.count &&
            !this.props.reducedMotion &&
            r.default
              .sequence([
                r.default.timing(this.animationScale, {
                  toValue: 1.8,
                  duration: 300,
                }),
                r.default.timing(this.animationScale, {
                  toValue: 1,
                  duration: 200,
                }),
              ])
              .start();
        }
        render() {
          let { count: e, className: t } = this.props;
          return 0 === e
            ? null
            : (0, a.jsx)(r.default.div, {
                className: i(f.badge, t),
                style: { transform: [{ scale: this.animationScale }] },
                children: e,
              });
        }
        constructor(...e) {
          super(...e), (this.animationScale = new r.default.Value(1));
        }
      }
      function E(e) {
        let { className: t } = e,
          { showReminders: n } = d.default.useExperiment(
            { location: "f79435_1" },
            { autoTrackExposure: !1 }
          ),
          l = (0, o.default)(
            [c.default],
            () => (n ? c.default.getOverdueMessageReminderCount() : 0),
            [n]
          ),
          s = (0, o.default)([u.default], () => u.default.useReducedMotion);
        return n
          ? (0, a.jsx)(h, { count: l, className: t, reducedMotion: s })
          : null;
      }
    },
    815978: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("957825"),
        i = n("547772"),
        r = n("211248"),
        o = n("660279"),
        u = n("49111"),
        d = n("782340");
      function c(e) {
        let { channel: t } = e;
        return (0, a.jsx)(l.Popout, {
          align: "right",
          animation: l.Popout.Animation.NONE,
          position: "bottom",
          renderPopout: e =>
            t.isThread()
              ? (0, a.jsx)(i.default, {
                  ...e,
                  channel: t,
                  navId: "recents-thread-notifications",
                  label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                })
              : (0, a.jsx)(s.default, {
                  ...e,
                  channel: t,
                  navId: "recents-notifications",
                  label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                  location: { section: u.AnalyticsSections.INBOX },
                  includeGuildMute: !0,
                }),
          children: e => {
            let { onClick: t } = e;
            return (0, a.jsx)(r.default, {
              tooltip: d.default.Messages.NOTIFICATION_SETTINGS,
              color: r.CircleIconButtonColors.TERTIARY,
              icon: (0, a.jsx)(o.default, { width: 16, height: 16 }),
              onClick: t,
            });
          },
        });
      }
    },
    80649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("151426"),
        r = n("789207"),
        o = n("590514"),
        u = n("84339"),
        d = n("519841"),
        c = n("787336"),
        f = n("699473"),
        h = n("845579"),
        E = n("42203"),
        m = n("247013"),
        p = n("18494"),
        S = n("211248"),
        g = n("116320"),
        N = n("945330"),
        _ = n("138217"),
        T = n("530686"),
        I = n("998530"),
        C = n("814744"),
        A = n("805614"),
        M = n("64318"),
        x = n("49111"),
        R = n("782340"),
        v = n("126343");
      let L = { offset: { left: 4, right: -12 } };
      function O(e, t, n) {
        let a = t ? _.default.guildFilter : null,
          l = t ? _.default.roleFilter : null,
          s = t ? _.default.everyoneFilter : null,
          i = null;
        null != e &&
          null != a &&
          (i =
            a === x.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()),
          r.default.fetchRecentMentions(n, x.MAX_MENTIONS_PER_FETCH, i, l, s);
      }
      function b(e) {
        let { setTab: t, onJump: n, badgeState: f, closePopout: h } = e,
          m = (0, s.useStateFromStores)([E.default, p.default], () =>
            E.default.getChannel(p.default.getChannelId())
          ),
          {
            messages: S,
            hasMore: g,
            loading: N,
            guildFilter: T,
            roleFilter: C,
            everyoneFilter: A,
          } = (0, s.useStateFromStoresObject)([_.default], () => ({
            messages: _.default.getMentions(),
            hasMore: _.default.hasMore,
            loading: _.default.loading,
            guildFilter: _.default.guildFilter,
            roleFilter: _.default.roleFilter,
            everyoneFilter: _.default.everyoneFilter,
          })),
          L = (0, u.default)(T),
          b = (0, u.default)(C),
          y = (0, u.default)(A);
        l.useEffect(() => {
          if (!_.default.hasLoadedEver) {
            O(m, !0);
            return;
          }
          ((null != L && T !== L) ||
            (null != b && C !== b) ||
            (null != y && A !== y)) &&
            O(m, !0);
        }, [L, T, b, C, y, A, m, !0]);
        l.useEffect(() => {
          d.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "mentions",
          }).enabled &&
            (null == S ? void 0 : S.some(c.messageHasExpiredAttachmentUrl)) &&
            (r.default.clearMentions(), O(m, !0));
        }, []),
          l.useEffect(
            () => () => {
              r.default.truncateMentions(x.MAX_MENTIONS_PER_FETCH);
            },
            []
          );
        let F = l.useCallback(
          () =>
            (0, a.jsx)(M.default, {
              tab: i.InboxTab.MENTIONS,
              setTab: t,
              badgeState: f,
              closePopout: h,
              children: (0, a.jsx)(I.default, {}),
            }),
          [!0, t, f, h]
        );
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(o.default, {
            className: v.recentMentionsPopout,
            scrollerClassName: v.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
              r.default.deleteRecentMention(e.id);
            },
            channel: m,
            messages: S,
            loading: N,
            hasMore: g,
            analyticsName: "Recent Mentions",
            loadMore: function () {
              let e = null != S && S.length > 0 ? S[S.length - 1].id : null;
              O(m, !0, e);
            },
            canCloseAllMessages: !0,
            renderHeader: F,
            renderEmptyState: D,
            renderMessage: j,
            "aria-label": R.default.Messages.RECENT_MENTIONS,
            listName: "recents",
          }),
        });
      }
      function y(e, t) {
        return [(0, a.jsx)(F, { message: e, gotoMessage: t }, e.id)];
      }
      function j(e, t) {
        return [
          (0, a.jsx)(F, { message: e, gotoMessage: t, dismissible: !0 }, e.id),
        ];
      }
      function F(e) {
        let { message: t, gotoMessage: n, dismissible: l } = e;
        if (null == t) return null;
        let s = E.default.getChannel(t.channel_id);
        if (null == s) return null;
        let i = m.default.didAgree(s.getGuildId()),
          o = !!s.isNSFW() && !i;
        return (0, a.jsxs)("div", {
          className: v.container,
          children: [
            (0, a.jsx)(C.default, {
              channel: s,
              gotoChannel: n,
              children:
                null != l
                  ? (0, a.jsx)(S.default, {
                      className: v.closeButton,
                      tooltip: R.default.Messages.CLOSE,
                      color: S.CircleIconButtonColors.TERTIARY,
                      icon: (0, a.jsx)(N.default, { width: 16, height: 16 }),
                      onClick: () => r.default.deleteRecentMention(t.id),
                    })
                  : null,
            }),
            (0, a.jsxs)("div", {
              className: v.messageContainer,
              children: [
                (0, a.jsx)(T.default, { className: v.jumpButton, onJump: n }),
                (0, a.jsx)(
                  f.default,
                  {
                    message: t,
                    channel: s,
                    className: v.message,
                    hideAccessories: o,
                    compact: h.MessageDisplayCompact.getSetting(),
                    animateAvatar: !1,
                    focusProps: L,
                    trackAnnouncementViews: !0,
                  },
                  t.id
                ),
              ],
            }),
          ],
        });
      }
      function D(e) {
        return (0, a.jsx)(A.default, {
          Icon: g.default,
          header: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
          tip: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP,
        });
      }
    },
    998530: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        i = n("789207"),
        r = n("42203"),
        o = n("18494"),
        u = n("211248"),
        d = n("118530"),
        c = n("138217");
      n("440612");
      var f = n("49111"),
        h = n("782340");
      function E(e) {
        let { closePopout: t, onSelect: n } = e,
          u = (0, l.useStateFromStores)([r.default, o.default], () =>
            r.default.getChannel(o.default.getChannelId())
          ),
          {
            everyoneFilter: d,
            roleFilter: E,
            guildFilter: m,
          } = (0, l.useStateFromStoresObject)([c.default], () => {
            let {
              everyoneFilter: e,
              roleFilter: t,
              guildFilter: n,
            } = c.default;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
          });
        return (0, a.jsxs)(s.Menu, {
          navId: "mentions-filter",
          "aria-label": h.default.Messages.FILTER,
          onClose: t,
          onSelect: n,
          children: [
            (0, a.jsx)(s.MenuCheckboxItem, {
              id: "Everyone",
              label: h.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
              action: function () {
                i.default.setGuildFilter({ everyoneFilter: !d });
              },
              checked: d,
            }),
            (0, a.jsx)(s.MenuCheckboxItem, {
              id: "Roles",
              label: h.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
              action: function () {
                i.default.setGuildFilter({ roleFilter: !E });
              },
              checked: E,
            }),
            null == u || u.isPrivate()
              ? null
              : (0, a.jsx)(s.MenuCheckboxItem, {
                  id: "All Servers",
                  label: h.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                  action: function () {
                    i.default.setGuildFilter({
                      guildFilter:
                        m === f.RecentMentionsFilters.THIS_SERVER
                          ? f.RecentMentionsFilters.ALL_SERVERS
                          : f.RecentMentionsFilters.THIS_SERVER,
                    });
                  },
                  checked: m === f.RecentMentionsFilters.ALL_SERVERS,
                }),
          ],
        });
      }
      function m() {
        return (0, a.jsx)(s.Popout, {
          align: "right",
          animation: s.Popout.Animation.NONE,
          position: "bottom",
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, a.jsx)(E, { closePopout: t });
          },
          children: e => {
            let { onClick: t } = e;
            return (0, a.jsx)(u.default, {
              tooltip: h.default.Messages.FILTER,
              color: u.CircleIconButtonColors.SECONDARY,
              icon: (0, a.jsx)(d.default, {}),
              onClick: t,
            });
          },
        });
      }
    },
    311197: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("954732"),
        r = n("22082"),
        o = n("913796"),
        u = n("660478"),
        d = n("697218"),
        c = n("826267"),
        f = n("664336"),
        h = n("333491"),
        E = n("263362"),
        m = n("470965"),
        p = n("133335"),
        S = n("782340"),
        g = n("173350");
      function N(e) {
        let { onOpen: t, onClose: n, className: N } = e,
          _ = (0, o.useInDesktopNotificationCenterExperiment)(),
          T = (0, s.useStateFromStores)([d.default], () =>
            d.default.getCurrentUser()
          ),
          I = l.useRef(null),
          C = (0, s.useStateFromStores)(
            [u.default],
            () =>
              !!_ &&
              (null == T ? void 0 : T.id) != null &&
              u.default.getMentionCount(
                T.id,
                p.ReadStateTypes.NOTIFICATION_CENTER
              ) > 0
          ),
          { enabled: A } = r.default.useExperiment(
            { location: "RecentsButton" },
            { autoTrackExposure: !1 }
          ),
          M = (0, s.useStateFromStores)(
            [i.default],
            () => A && i.default.getUnseenInviteCount() > 0
          );
        return (0, a.jsx)(E.RecentsPopout, {
          onOpen: t,
          onClose: n,
          badgeState: { badgeForYou: C },
          popoutPosition: "bottom",
          popoutAlign: "right",
          children: (e, t, n) =>
            (0, a.jsxs)("div", {
              ref: I,
              className: g.recentsIcon,
              children: [
                A &&
                  (0, a.jsx)(m.default, {
                    inboxIconRef: I,
                    recentsPopoutShown: t,
                  }),
                (0, a.jsx)(f.Icon, {
                  ...n,
                  className: N,
                  onClick: e,
                  icon: c.default,
                  "aria-label": S.default.Messages.INBOX,
                  tooltip: t ? null : S.default.Messages.INBOX,
                  selected: t,
                  showBadge: C || M,
                  children: (0, a.jsx)(h.default, { className: g.todoBadge }),
                }),
              ],
            }),
        });
      }
    },
    814744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("974667"),
        r = n("446674"),
        o = n("77078"),
        u = n("943722"),
        d = n("843962"),
        c = n("679653"),
        f = n("419830"),
        h = n("373469"),
        E = n("42203"),
        m = n("305961"),
        p = n("824563"),
        S = n("697218"),
        g = n("220677"),
        N = n("476263"),
        _ = n("476765"),
        T = n("782340"),
        I = n("461135");
      let C = { top: 8, bottom: 8, left: -4, right: -4 };
      function A(e) {
        let {
            channel: t,
            children: n,
            gotoChannel: l,
            mentionCount: s,
            channelState: r,
            toggleCollapsed: u,
          } = e,
          d = (0, i.useListItem)(
            "recents-header-".concat(t.id, "-").concat((0, _.useUID)())
          );
        return (0, a.jsx)(o.FocusRing, {
          offset: C,
          children: (0, a.jsxs)("div", {
            className: I.channelHeader,
            ...d,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
              null != u &&
                null != r &&
                (("ArrowRight" === e.key && r.collapsed) ||
                  ("ArrowLeft" === e.key && !r.collapsed)) &&
                (null == u || u(r));
            },
            children: [
              (0, a.jsx)(M, { channel: t, gotoChannel: l }),
              (0, a.jsx)(v, { channel: t, gotoChannel: l, mentionCount: s }),
              n,
            ],
          }),
        });
      }
      function M(e) {
        let { channel: t, gotoChannel: n } = e;
        return t.isPrivate()
          ? (0, a.jsx)(x, { channel: t, gotoChannel: n })
          : (0, a.jsx)(R, { channel: t, gotoChannel: n });
      }
      function x(e) {
        let { channel: t, gotoChannel: n } = e,
          l = (0, r.useStateFromStores)([S.default], () =>
            t.isDM() ? S.default.getUser(t.getRecipientId()) : null
          ),
          s =
            null == l
              ? (0, d.getChannelIconURL)(t)
              : l.getAvatarURL(void 0, 40);
        return (0, a.jsx)(o.Clickable, {
          onClick: n,
          tabIndex: -1,
          children: (0, a.jsx)("img", {
            className: I.dmIcon,
            src: s,
            alt: "",
            "aria-hidden": !0,
          }),
        });
      }
      function R(e) {
        let { channel: t, gotoChannel: n } = e,
          l = (0, r.useStateFromStores)([m.default], () =>
            m.default.getGuild(t.guild_id)
          );
        return null == l
          ? null
          : (0, a.jsx)(N.default, {
              "aria-hidden": !0,
              className: I.guildIcon,
              guild: l,
              size: N.default.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
            });
      }
      function v(e) {
        let { channel: t, gotoChannel: n, mentionCount: l } = e,
          i = (0, r.useStateFromStores)([m.default], () =>
            m.default.getGuild(t.guild_id)
          ),
          u = (0, r.useStateFromStores)([E.default], () =>
            E.default.getChannel(t.parent_id)
          ),
          d = (0, f.getChannelIconComponent)(t, i),
          h = (0, c.default)(t, !1),
          p =
            null == u
              ? null == i
                ? void 0
                : i.name
              : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name),
          S = t.isMultiUserDM()
            ? T.default.Messages.MEMBERS_HEADER.format({
                members: t.recipients.length + 1,
              })
            : t.isPrivate()
              ? (0, a.jsx)(L, { channel: t })
              : (0, a.jsx)(o.Clickable, {
                  className: s(I.subtext, I.guildName),
                  onClick: n,
                  children: p,
                });
        return (0, a.jsxs)("div", {
          className: I.channelNameSection,
          children: [
            (0, a.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              className: I.channelNameHeader,
              children: (0, a.jsxs)(o.Clickable, {
                className: I.channelName,
                onClick: n,
                children: [
                  t.isThread() || t.isGroupDM() || null == d
                    ? null
                    : (0, a.jsx)(d, {
                        className: t.isForumLikeChannel()
                          ? I.forumIcon
                          : void 0,
                        width: 18,
                        height: 18,
                      }),
                  (0, a.jsx)("span", {
                    className: I.channelNameSpan,
                    children: h,
                  }),
                  null != l && l > 0
                    ? (0, a.jsx)(g.default, { value: l, className: I.badge })
                    : null,
                ],
              }),
            }),
            (0, a.jsx)(o.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              className: I.subtextContainer,
              children: S,
            }),
          ],
        });
      }
      function L(e) {
        let { channel: t } = e,
          {
            user: n,
            activities: l,
            applicationStream: s,
          } = (0, r.useStateFromStoresObject)(
            [S.default, p.default, h.default],
            () => {
              let e = S.default.getUser(t.getRecipientId());
              return {
                user: e,
                activities: null != e ? p.default.getActivities(e.id) : null,
                applicationStream:
                  null != e ? h.default.getAnyStreamForUser(e.id) : null,
              };
            }
          );
        return null == l
          ? null
          : (0, a.jsx)(u.default, {
              className: I.activityStatus,
              emojiClassName: I.activityEmoji,
              activities: l,
              applicationStream: s,
              hideTooltip: !0,
              user: n,
            });
      }
    },
    805614: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("543289"),
        i = n("782340"),
        r = n("387299");
      function o(e) {
        let { Icon: t, header: n, tip: o, disableStars: u } = e;
        return (0, a.jsxs)("div", {
          className: r.container,
          children: [
            (0, a.jsxs)("div", {
              className: r.iconContainer,
              children: [
                (0, a.jsx)(t, { className: r.icon, width: 36, height: 36 }),
                u ? null : (0, a.jsx)(s.default, { className: r.stars }),
              ],
            }),
            (0, a.jsx)(l.Heading, {
              className: r.header,
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, a.jsxs)(l.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: [
                u
                  ? null
                  : (0, a.jsxs)(l.Text, {
                      tag: "span",
                      className: r.protip,
                      variant: "text-xs/bold",
                      color: "text-positive",
                      children: [
                        i.default.Messages.FORM_LABEL_ROLES_PRO_TIP,
                        ":",
                        " ",
                      ],
                    }),
                o,
              ],
            }),
          ],
        });
      }
    },
    64318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("65597"),
        r = n("151426"),
        o = n("77078"),
        u = n("590514"),
        d = n("20606"),
        c = n("954732"),
        f = n("22082"),
        h = n("979268"),
        E = n("520899"),
        m = n("913796"),
        p = n("826267"),
        S = n("956089"),
        g = n("124031"),
        N = n("782340"),
        _ = n("364336");
      function T(e) {
        let t = (0, m.useInDesktopNotificationCenterExperiment)();
        return t ? (0, a.jsx)(I, { ...e }) : (0, a.jsx)(C, { ...e });
      }
      function I(e) {
        let {
            tab: t,
            setTab: n,
            children: l,
            badgeState: m,
            closePopout: T,
          } = e,
          { showReminders: I } = h.default.useExperiment(
            { location: "RecentsHeader" },
            { autoTrackExposure: !1 }
          ),
          { enabled: C } = f.default.useExperiment({
            location: "RecentsHeader",
          }),
          A = (0, i.default)([c.default], () =>
            c.default.getUnseenInviteCount()
          ),
          M = (0, i.default)([E.default], () =>
            E.default.getMessageReminders()
          ),
          x = M.length;
        return (0, a.jsxs)(u.Header, {
          className: s(_.header, _.expanded),
          children: [
            (0, a.jsxs)("div", {
              className: s(_.expandedInboxHeader),
              children: [
                (0, a.jsx)(p.default, { className: _.inboxIcon }),
                (0, a.jsx)(o.Text, {
                  className: _.inboxTitle,
                  variant: "text-lg/semibold",
                  children: N.default.Messages.INBOX,
                }),
                (0, a.jsx)(g.default, { closePopout: T }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: s(_.expandedTabSection),
              children: [
                (0, a.jsxs)(o.TabBar, {
                  selectedItem: t,
                  type: "top-pill",
                  onItemSelect: n,
                  children: [
                    (0, a.jsxs)(o.TabBar.Item, {
                      id: r.InboxTab.FOR_YOU,
                      "aria-label": N.default.Messages.FOR_YOU,
                      className: s(_.tab, _.expanded, {
                        [_.active]: t === r.InboxTab.FOR_YOU,
                      }),
                      children: [
                        N.default.Messages.FOR_YOU,
                        (null == m ? void 0 : m.badgeForYou)
                          ? (0, a.jsx)(S.CircleBadge, {
                              color: d.default.STATUS_DANGER,
                              className: s(_.iconBadge),
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsx)(o.TabBar.Item, {
                      id: r.InboxTab.UNREADS,
                      className: s(_.tab, _.expanded, {
                        [_.active]: t === r.InboxTab.UNREADS,
                      }),
                      children: N.default.Messages.UNREADS_TAB_LABEL,
                    }),
                    (0, a.jsx)(o.TabBar.Item, {
                      "aria-label": N.default.Messages.MENTIONS,
                      id: r.InboxTab.MENTIONS,
                      className: s(_.tab, _.expanded, {
                        [_.active]: t === r.InboxTab.MENTIONS,
                      }),
                      children: N.default.Messages.MENTIONS,
                    }),
                    C
                      ? (0, a.jsxs)(o.TabBar.Item, {
                          "aria-label": "game_invites",
                          id: r.InboxTab.GAME_INVITES,
                          className: s(_.tab, _.expanded, {
                            [_.active]: t === r.InboxTab.GAME_INVITES,
                          }),
                          children: [
                            N.default.Messages.GAME_INVITES,
                            A > 0
                              ? (0, a.jsx)(S.CircleBadge, {
                                  color: d.default.STATUS_DANGER,
                                  className: s(_.iconBadge),
                                })
                              : null,
                          ],
                        })
                      : null,
                    I
                      ? (0, a.jsxs)(o.TabBar.Item, {
                          "aria-label": "todos",
                          id: r.InboxTab.TODOS,
                          className: s(_.tab, _.expanded, {
                            [_.active]: t === r.InboxTab.TODOS,
                          }),
                          children: [
                            N.default.Messages.MESSAGE_REMINDERS_HEADER,
                            x > 0
                              ? (0, a.jsx)(S.CircleBadge, {
                                  color: d.default.STATUS_DANGER,
                                  className: s(_.iconBadge),
                                })
                              : null,
                          ],
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)("div", { className: _.controls, children: l }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        let { tab: t, setTab: n, children: l } = e,
          { showReminders: i } = h.default.useExperiment(
            { location: "489e3f_2" },
            { autoTrackExposure: !1 }
          ),
          d = (0, m.useInDesktopNotificationCenterExperiment)(),
          { enabled: c } = f.default.useExperiment({
            location: "RecentsHeader",
          });
        return (0, a.jsxs)(u.Header, {
          className: _.header,
          children: [
            (0, a.jsxs)(o.TabBar, {
              selectedItem: t,
              type: "top-pill",
              onItemSelect: n,
              className: _.tabBar,
              children: [
                d
                  ? (0, a.jsx)(o.TabBar.Item, {
                      id: r.InboxTab.FOR_YOU,
                      className: s(_.tab, {
                        [_.active]: t === r.InboxTab.FOR_YOU,
                      }),
                      children: N.default.Messages.FOR_YOU,
                    })
                  : null,
                (0, a.jsx)(o.TabBar.Item, {
                  id: r.InboxTab.MENTIONS,
                  className: s(_.tab, {
                    [_.active]: t === r.InboxTab.MENTIONS,
                  }),
                  children: N.default.Messages.MENTIONS,
                }),
                (0, a.jsx)(o.TabBar.Item, {
                  id: r.InboxTab.UNREADS,
                  className: s(_.tab, { [_.active]: t === r.InboxTab.UNREADS }),
                  children: N.default.Messages.UNREADS_TAB_LABEL,
                }),
                c
                  ? (0, a.jsx)(o.TabBar.Item, {
                      id: r.InboxTab.GAME_INVITES,
                      className: s(_.tab, {
                        [_.active]: t === r.InboxTab.GAME_INVITES,
                      }),
                      children: N.default.Messages.GAME_INVITES,
                    })
                  : null,
                i
                  ? (0, a.jsx)(o.TabBar.Item, {
                      id: r.InboxTab.TODOS,
                      className: s(_.tab, {
                        [_.active]: t === r.InboxTab.TODOS,
                      }),
                      children: N.default.Messages.MESSAGE_REMINDERS_HEADER,
                    })
                  : null,
              ],
            }),
            (0, a.jsx)("div", { className: _.controls, children: l }),
          ],
        });
      }
    },
    263362: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RecentsPopout: function () {
            return I;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("397613"),
        i = n("446674"),
        r = n("151426"),
        o = n("77078"),
        u = n("22082"),
        d = n("979268"),
        c = n("913796"),
        f = n("872173"),
        h = n("374363"),
        E = n("659500"),
        m = n("981024"),
        p = n("519540"),
        S = n("80649"),
        g = n("385730"),
        N = n("788072"),
        _ = n("49111"),
        T = n("782340");
      function I(e) {
        let {
            onOpen: t,
            onClose: n,
            children: I,
            badgeState: C,
            popoutPosition: A,
            popoutAlign: M,
          } = e,
          [x, R] = l.useState(!1),
          [v, L] = (function () {
            let e = (0, i.useStateFromStores)([h.default], () => {
                var e, t;
                return null !==
                  (t =
                    null === (e = h.default.settings.inbox) || void 0 === e
                      ? void 0
                      : e.currentTab) && void 0 !== t
                  ? t
                  : r.InboxTab.UNREADS;
              }),
              t = l.useCallback(e => {
                f.PreloadedUserSettingsActionCreators.updateAsync(
                  "inbox",
                  t => {
                    if (t.currentTab === e) return !1;
                    t.currentTab = e;
                  },
                  f.UserSettingsDelay.FREQUENT_USER_ACTION
                );
              }, []);
            return [e, t];
          })(),
          { showTutorial: O, setSeenTutorial: b } = (function (e) {
            let t = (0, i.useStateFromStores)([h.default], () => {
                var e, t;
                return (
                  null !==
                    (t =
                      null === (e = h.default.settings.inbox) || void 0 === e
                        ? void 0
                        : e.viewedTutorial) &&
                  void 0 !== t &&
                  t
                );
              }),
              n = l.useCallback(() => {
                f.PreloadedUserSettingsActionCreators.updateAsync(
                  "inbox",
                  e => {
                    e.viewedTutorial = !0;
                  },
                  f.UserSettingsDelay.INFREQUENT_USER_ACTION
                );
              }, []),
              a = !t && e === r.InboxTab.UNREADS;
            return { showTutorial: a, setSeenTutorial: n };
          })(v),
          y = l.useCallback(() => {
            R(!1), x && (null == n || n());
          }, [n, x]),
          j = l.useCallback(() => {
            R(!x), x ? null == n || n() : null == t || t();
          }, [n, t, x]),
          F = l.useCallback(() => {
            j(), L(r.InboxTab.UNREADS);
          }, [L, j]);
        l.useEffect(
          () => (
            E.ComponentDispatch.subscribe(
              _.ComponentActions.TOGGLE_INBOX_UNREADS_TAB,
              F
            ),
            () =>
              void E.ComponentDispatch.unsubscribe(
                _.ComponentActions.TOGGLE_INBOX_UNREADS_TAB,
                F
              )
          ),
          [F]
        );
        let { showReminders: D } = d.default.useExperiment(
            { location: "RecentsPopout" },
            { autoTrackExposure: !1 }
          ),
          U = (0, c.useInDesktopNotificationCenterExperiment)(),
          { enabled: k } = u.default.useExperiment({
            location: "RecentsPopout",
          });
        l.useEffect(() => {
          !D && v === r.InboxTab.TODOS && L(r.InboxTab.MENTIONS);
        });
        let P = l.useCallback(
          e => {
            !e.shiftKey && y();
          },
          [y]
        );
        return (0, a.jsx)(o.Popout, {
          animation: o.Popout.Animation.NONE,
          position: A,
          align: M,
          autoInvert: !1,
          shouldShow: x,
          onRequestClose: y,
          renderPopout: function () {
            return (0, a.jsx)(o.Dialog, {
              "aria-label": T.default.Messages.INBOX,
              children:
                v === r.InboxTab.FOR_YOU && U
                  ? (0, a.jsx)(m.default, {
                      setTab: L,
                      badgeState: C,
                      closePopout: y,
                    })
                  : v === r.InboxTab.MENTIONS
                    ? (0, a.jsx)(S.default, {
                        setTab: L,
                        onJump: P,
                        badgeState: C,
                        closePopout: y,
                      })
                    : k && v === r.InboxTab.GAME_INVITES
                      ? (0, a.jsx)(N.default, {
                          setTab: L,
                          badgeState: C,
                          closePopout: y,
                        })
                      : D && v === r.InboxTab.TODOS
                        ? (0, a.jsx)(p.default, {
                            setTab: L,
                            onJump: P,
                            closePopout: y,
                          })
                        : (0, a.jsx)(s.ErrorBoundary, {
                            fallback: (0, a.jsx)(g.UnreadsCrashed, {
                              setTab: L,
                              closePopout: y,
                              badgeState: C,
                            }),
                            children: (0, a.jsx)(g.default, {
                              setTab: L,
                              onJump: P,
                              showTutorial: O,
                              setSeenTutorial: b,
                              closePopout: y,
                              badgeState: C,
                            }),
                          }),
            });
          },
          ignoreModalClicks: !0,
          children: (e, t) => {
            let { isShown: n } = t;
            return I(j, n, e);
          },
        });
      }
    },
    660407: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("907002"),
        o = n("446674"),
        u = n("77078"),
        d = n("913144"),
        c = n("267363"),
        f = n("716241"),
        h = n("739034"),
        E = n("393414"),
        m = n("42203"),
        p = n("211248"),
        S = n("461380"),
        g = n("36694"),
        N = n("11539"),
        _ = n("815978"),
        T = n("814744"),
        I = n("879165"),
        C = n("609023"),
        A = n("49111"),
        M = n("782340"),
        x = n("859831");
      let R = l.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
          s = l.useRef(null),
          [[i, o], u] = l.useState([0, 0]),
          d = t.deleted && i > 0;
        if (t.deleted && 0 === i && null != s.current) {
          let e = s.current.offsetHeight,
            t = s.current.offsetTop,
            n = s.current.parentElement.scrollTop,
            a = n > t ? e - (n - t) : e;
          u([e, e - a]);
        }
        let { opacity: c, size: f } = (0, r.useSpring)({
            config: { clamp: !0, friction: 18, tension: 200 },
            opacity: d ? 0 : 1,
            size: d ? 0 : 1,
            onRest: () => {
              n(t.channelId);
            },
          }),
          h = {
            opacity: c,
            height: f.to(e =>
              d
                ? (function (e, t, n) {
                    return t + (e - t) * n;
                  })(i, o, e)
                : "auto"
            ),
          };
        return (0, a.jsx)(r.animated.div, {
          ref: s,
          style: h,
          children: (0, a.jsx)(L, { ...e }),
        });
      });
      var v = R;
      let L = l.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: i } = e,
          r = (0, o.useStateFromStores)([m.default], () =>
            m.default.getChannel(t.channelId)
          );
        if (
          (l.useEffect(() => {
            null != r &&
              t.isFullyLoaded &&
              !t.hasError &&
              !t.collapsed &&
              "messages" === t.type &&
              0 === t.messages.length &&
              d.default.wait(() => {
                (0, c.ack)(t.channelId, !0), s(t.channelId);
              });
          }),
          null == r || !t.hasLoadedAnything)
        )
          return null;
        let h = (e, a) => {
          (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
            channel_id: t.channelId,
            guild_id: t.guildId,
          });
          let l = null != a ? a : t.oldestUnreadMessageId;
          (0, E.transitionTo)(
            A.Routes.CHANNEL(
              t.guildId,
              t.channelId,
              "forum" === t.type ? null : l
            )
          ),
            n(e);
        };
        return (0, a.jsx)("div", {
          className: x.channel,
          children: (0, a.jsx)(u.HeadingLevel, {
            component: (0, a.jsxs)(T.default, {
              channel: r,
              gotoChannel: h,
              mentionCount: t.mentionCount,
              toggleCollapsed: i,
              channelState: t,
              children: [
                (0, a.jsx)(_.default, { channel: r }),
                (0, a.jsx)(O, { ...e }),
                "nsfw" === t.type ? null : (0, a.jsx)(b, { ...e }),
              ],
            }),
            children: t.collapsed
              ? null
              : "messages" === t.type
                ? (0, a.jsx)(C.default, {
                    channel: t,
                    channelRecord: r,
                    gotoChannel: h,
                  })
                : "forum" === t.type
                  ? (0, a.jsx)(I.default, {
                      channel: t,
                      channelRecord: r,
                      deleteChannel: s,
                    })
                  : null,
          }),
        });
      });
      function O(e) {
        let {
            channel: t,
            markChannelRead: n,
            markGuildRead: l,
            getNumUnreadChannels: s,
          } = e,
          i = (0, h.default)(),
          r = i && null != t.guildId;
        return (0, a.jsx)(p.default, {
          className: x.markReadButton,
          tooltip: r
            ? M.default.Messages.MARK_GUILD_AS_READ
            : M.default.Messages.MARK_AS_READ,
          color: p.CircleIconButtonColors.TERTIARY,
          icon: r
            ? (0, a.jsx)(N.default, { width: 16, height: 16 })
            : (0, a.jsx)(g.default, { width: 16, height: 16 }),
          onClick: function () {
            r && null != t.guildId ? l(t.guildId) : n(t),
              (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                marked_all_channels_as_read: !1,
                num_unread_channels_remaining: s() - 1,
              });
          },
        });
      }
      function b(e) {
        let { channel: t, toggle: n, getNumUnreadChannels: l } = e;
        function s() {
          n(t),
            (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
              channel_id: t.channelId,
              guild_id: t.guildId,
              num_unread_channels_remaining: l(),
              is_now_collapsed: !t.collapsed,
            });
        }
        return (0, a.jsx)(u.Tooltip, {
          text: M.default.Messages.COLLAPSE,
          children: e =>
            (0, a.jsx)(u.Clickable, {
              ...e,
              className: i(x.collapseButton, { [x.collapsed]: t.collapsed }),
              onClick: s,
              children: (0, a.jsx)(S.default, { width: 16, height: 16 }),
            }),
        });
      }
    },
    879165: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        o = n("913144"),
        u = n("267363"),
        d = n("152637"),
        c = n("578198"),
        f = n("689275"),
        h = n("967241"),
        E = n("42203"),
        m = n("449008"),
        p = n("299039"),
        S = n("648564"),
        g = n("278301");
      function N(e) {
        let { channel: t, channelRecord: n, deleteChannel: s } = e,
          N = (0, r.useStateFromStoresArray)(
            [f.default, E.default],
            () =>
              i(f.default.getThreadsForParent(n.guild_id, n.id))
                .values()
                .filter(e => {
                  let { id: n } = e;
                  return p.default.compare(n, t.oldestReadMessageId) > 0;
                })
                .map(e => {
                  let { id: t } = e;
                  return E.default.getChannel(t);
                })
                .filter(m.isNotNullish)
                .sort((e, t) => p.default.compare(e.id, t.id))
                .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
          ),
          _ = l.useCallback((e, t) => {
            (0, h.openThreadSidebarForViewing)(
              e,
              t,
              S.OpenThreadAnalyticsLocations.INBOX
            );
          }, []);
        return (
          l.useEffect(() => {
            null != n &&
              t.isFullyLoaded &&
              !t.hasError &&
              !t.collapsed &&
              0 === N.length &&
              o.default.wait(() => {
                (0, u.ack)(t.channelId, !0), s(t.channelId);
              });
          }),
          (0, a.jsx)("div", {
            className: g.container,
            children: N.map(e =>
              (0, a.jsx)(
                c.ForumPostComposerStoreProvider,
                {
                  createStore: () => (0, c.createForumPostComposerStore)(n),
                  children: (0, a.jsx)(d.default, {
                    className: g.forumPost,
                    threadId: e.id,
                    goToThread: _,
                  }),
                },
                e.id
              )
            ),
          })
        );
      }
    },
    609023: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        s = n("866227"),
        i = n.n(s),
        r = n("974667"),
        o = n("446674"),
        u = n("77078"),
        d = n("336696"),
        c = n("383667"),
        f = n("459776"),
        h = n("654017"),
        E = n("603531"),
        m = n("845579"),
        p = n("271938"),
        S = n("957255"),
        g = n("697218"),
        N = n("898260"),
        _ = n("888400"),
        T = n("530686"),
        I = n("970268"),
        C = n("49111"),
        A = n("782340"),
        M = n("625182");
      let x = { left: 4, right: -12 };
      function R(e) {
        var t;
        let {
            channel: n,
            message: s,
            compact: i,
            isGroupStart: o,
            treatSpam: d,
            gotoChannel: c,
          } = e,
          f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""),
          h = l.useCallback(
            e => {
              if ("ArrowLeft" === e.key) {
                var t;
                null ===
                  (t = document.querySelector(
                    '[data-recents-channel="'.concat(n.id, '"]')
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [n.id]
          );
        return (0, a.jsx)(u.FocusRing, {
          offset: x,
          children: (0, a.jsxs)(
            "div",
            {
              className: M.messageContainer,
              onKeyDown: h,
              ...f,
              children: [
                (0, a.jsx)(T.default, {
                  className: M.jumpButton,
                  onJump: e => c(e, s.id),
                }),
                (0, a.jsx)(E.default, {
                  id: s.id,
                  message: s,
                  channel: n,
                  className: M.message,
                  compact: i,
                  animateAvatar: !1,
                  isGroupStart: o,
                  onKeyDown: h,
                  treatSpam: d,
                }),
              ],
            },
            s.id
          ),
        });
      }
      function v(e) {
        var t, n;
        let { channel: l, channelRecord: s, gotoChannel: r } = e,
          { enabled: E } = d.default.useExperiment(
            { location: "20e3b0_1" },
            { autoTrackExposure: !1 }
          ),
          T = m.MessageDisplayCompact.useSetting(),
          x = (0, o.useStateFromStores)([S.default], () =>
            S.default.can(C.Permissions.CREATE_INSTANT_INVITE, s)
          ),
          v = (0, h.isSpamSupported)(s),
          L = !1,
          O =
            0 === l.messages.length ||
            i(l.messages[0].timestamp).isSame(i(), "day"),
          b =
            null !==
              (n =
                null === (t = g.default.getUser(p.default.getId())) ||
                void 0 === t
                  ? void 0
                  : t.hasFlag(C.UserFlags.SPAMMER)) &&
            void 0 !== n &&
            n,
          y = [];
        if (!l.collapsed) {
          let e = null,
            t = null,
            n = l.messages.slice(0, I.MAX_SHOWN_MESSAGES);
          n.forEach(n => {
            if (!(0, c.default)(n, x)) {
              if (!O && (null == e || !e.isSame(n.timestamp, "day"))) {
                let t = (0, _.dateFormat)(n.timestamp, "LL");
                y.push(
                  (0, a.jsx)(
                    N.default,
                    { className: M.divider, children: t },
                    t
                  )
                ),
                  (e = i(n.timestamp));
              }
              let l = null == t || (0, f.default)(s, t, n);
              (t = n),
                (L = L || (0, h.isSpam)(n)),
                y.push(
                  (0, a.jsx)(
                    R,
                    {
                      channel: s,
                      message: n,
                      compact: T,
                      isGroupStart: l,
                      treatSpam: !b && E && (0, h.isSpam)(n) && v,
                      gotoChannel: r,
                    },
                    n.id
                  )
                );
            }
          }),
            l.messages.length >= I.MAX_SHOWN_MESSAGES &&
              y.push(
                (0, a.jsxs)(
                  u.Button,
                  {
                    color: u.Button.Colors.LINK,
                    look: u.Button.Looks.LINK,
                    onClick: e => r(e, n[n.length - 1].id),
                    children: [A.default.Messages.UNREADS_VIEW_CHANNEL, " ›"],
                  },
                  "view-all"
                )
              ),
            0 === y.length && (y = [(0, a.jsx)(u.Spinner, {}, "spinner")]);
        }
        return (
          L && v && d.default.trackExposure({ location: "20e3b0_2" }),
          (0, a.jsx)("div", { className: M.messages, children: y })
        );
      }
    },
    474282: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("881410"),
        n("424973");
      var a = n("37983");
      n("884691");
      var l = n("917351"),
        s = n.n(l),
        i = n("898260"),
        r = n("660407"),
        o = n("970268"),
        u = n("782340"),
        d = n("492822");
      function c(e, t, n) {
        let {
            markChannelRead: l,
            markGuildRead: c,
            deleteChannel: f,
            toggle: h,
            getNumUnreadChannels: E,
          } = t,
          m = null;
        return s.flatMap(e, e => {
          let t = e.sortOrder !== m;
          m = e.sortOrder;
          let s = [];
          return (
            t &&
              (e.hasLoadedAnything &&
              e.sortOrder === o.SortOrder.ReallyOldChannel
                ? s.push(
                    (0, a.jsx)(
                      i.default,
                      {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children:
                          u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER,
                      },
                      "old-divider"
                    )
                  )
                : e.hasLoadedAnything &&
                  e.sortOrder === o.SortOrder.NoNotifications &&
                  s.push(
                    (0, a.jsx)(
                      i.default,
                      {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children:
                          u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER,
                      },
                      "disabled-divider"
                    )
                  )),
            s.push(
              (0, a.jsx)(
                r.default,
                {
                  channel: e,
                  markChannelRead: l,
                  markGuildRead: c,
                  toggle: h,
                  deleteChannel: f,
                  onJump: n,
                  getNumUnreadChannels: E,
                },
                e.channelId
              )
            ),
            s
          );
        });
      }
    },
    385730: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
          UnreadsCrashed: function () {
            return L;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("597755"),
        o = n.n(r),
        u = n("974667"),
        d = n("446674"),
        c = n("151426"),
        f = n("77078"),
        h = n("913144"),
        E = n("206230"),
        m = n("510889"),
        p = n("826267"),
        S = n("599110"),
        g = n("659500"),
        N = n("150938"),
        _ = n("805614"),
        T = n("64318"),
        I = n("474282"),
        C = n("970268"),
        A = n("49111"),
        M = n("782340"),
        x = n("84392");
      function R(e) {
        let {
            setTab: t,
            onJump: n,
            showTutorial: s,
            setSeenTutorial: r,
            closePopout: R,
            badgeState: L,
          } = e,
          O = l.useRef(null),
          [b, y] = (0, C.default)(O),
          { loadState: j, channels: F } = b,
          { maybeLoadMore: D, markAllRead: U } = y;
        (function (e, t, n) {
          l.useLayoutEffect(() => {
            var a;
            let { scrollToChannelIndex: l } = t;
            n.clearScrollToChannelIndex();
            let { current: s } = e;
            if (null == s || null == l) return;
            let i =
              null === (a = s.getScrollerNode()) || void 0 === a
                ? void 0
                : a.children;
            if (null == i) return;
            let r = i[l];
            if (null == r) return;
            let { scrollTop: o, scrollHeight: u } = s.getScrollerState();
            (r.offsetTop < o || r.offsetTop > o + u) &&
              s.scrollTo({ to: r.offsetTop });
          });
        })(O, b, y),
          (function (e, t) {
            l.useEffect(() => {
              let n = () => {
                let n = e.channels.find(e => !e.collapsed);
                null != n && t.markChannelRead(n);
              };
              return (
                g.ComponentDispatch.subscribe(
                  A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ,
                  n
                ),
                () => {
                  g.ComponentDispatch.unsubscribe(
                    A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ,
                    n
                  );
                }
              );
            }, [t, e.channels]);
          })(b, y),
          l.useEffect(() => {
            S.default.track(A.AnalyticEvents.OPEN_POPOUT, { type: "Inbox" });
          }, []),
          l.useEffect(
            () => (
              h.default.subscribe("CONNECTION_OPEN", R),
              () => {
                h.default.unsubscribe("CONNECTION_OPEN", R);
              }
            ),
            [R]
          );
        let k = (0, d.useStateFromStores)(
            [E.default],
            () => E.default.messageGroupSpacing
          ),
          P = (0, m.default)("unreads", O);
        if (0 === F.length) {
          var w;
          return (0, a.jsxs)("div", {
            className: x.container,
            children: [
              (0, a.jsx)(T.default, {
                tab: c.InboxTab.UNREADS,
                setTab: t,
                badgeState: L,
                closePopout: R,
              }),
              (0, a.jsx)(_.default, {
                Icon: p.default,
                header: M.default.Messages.UNREADS_EMPTY_STATE_HEADER,
                tip:
                  (null === (w = o.os) || void 0 === w ? void 0 : w.family) ===
                  "OS X"
                    ? M.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC
                    : M.default.Messages.UNREADS_EMPTY_STATE_TIP,
              }),
            ],
          });
        }
        return (0, a.jsxs)("div", {
          className: i(x.container, "group-spacing-".concat(k)),
          "aria-label": M.default.Messages.UNREADS_TAB_LABEL,
          children: [
            (0, a.jsx)(T.default, {
              tab: c.InboxTab.UNREADS,
              setTab: t,
              badgeState: L,
              closePopout: R,
              children: (0, a.jsx)(N.default, {
                type: "top-header",
                onClick: U,
              }),
            }),
            (0, a.jsx)(u.ListNavigatorProvider, {
              navigator: P,
              children: (0, a.jsx)(u.ListNavigatorContainer, {
                children: e => {
                  let { ref: t, ...l } = e;
                  return (0, a.jsxs)(f.AdvancedScrollerThin, {
                    ref: e => {
                      var n;
                      (O.current = e),
                        (t.current =
                          null !==
                            (n = null == e ? void 0 : e.getScrollerNode()) &&
                          void 0 !== n
                            ? n
                            : null);
                    },
                    ...l,
                    onScroll: j === C.LoadState.Done ? void 0 : D,
                    className: x.scroller,
                    children: [
                      s ? (0, a.jsx)(v, { setSeenTutorial: r }) : null,
                      (0, I.default)(F, y, n),
                      j === C.LoadState.Done
                        ? null
                        : (0, a.jsx)(f.Spinner, { className: x.spinner }),
                    ],
                  });
                },
              }),
            }),
          ],
        });
      }
      function v(e) {
        let { setSeenTutorial: t } = e;
        return (0, a.jsxs)("div", {
          className: x.tutorial,
          children: [
            (0, a.jsx)("div", {
              className: x.tutorialIcon,
              children: (0, a.jsx)(p.default, { width: 24, height: 24 }),
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(f.Heading, {
                  className: x.tutorialHeader,
                  variant: "heading-md/semibold",
                  children: M.default.Messages.UNREADS_TUTORIAL_HEADER,
                }),
                (0, a.jsx)(f.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: M.default.Messages.UNREADS_TUTORIAL_BODY,
                }),
                (0, a.jsx)(f.Button, {
                  className: x.tutorialButton,
                  onClick: t,
                  size: f.Button.Sizes.SMALL,
                  children: M.default.Messages.TUTORIAL_CLOSE,
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { setTab: t, badgeState: n, closePopout: l } = e;
        return (0, a.jsxs)("div", {
          className: x.container,
          children: [
            (0, a.jsx)(T.default, {
              tab: c.InboxTab.UNREADS,
              setTab: t,
              badgeState: n,
              closePopout: l,
            }),
            (0, a.jsx)(_.default, {
              Icon: p.default,
              disableStars: !0,
              header: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
              tip: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE,
            }),
          ],
        });
      }
    },
    970268: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SortOrder: function () {
            return a;
          },
          LoadState: function () {
            return l;
          },
          MAX_SHOWN_MESSAGES: function () {
            return B;
          },
          default: function () {
            return W;
          },
        }),
        n("424973"),
        n("222007");
      var a,
        l,
        s,
        i,
        r = n("884691"),
        o = n("44170"),
        u = n("627445"),
        d = n.n(u),
        c = n("917351"),
        f = n.n(c),
        h = n("913144"),
        E = n("819689"),
        m = n("267363"),
        p = n("206230"),
        S = n("379881"),
        g = n("542827"),
        N = n("615387"),
        _ = n("401690"),
        T = n("689275"),
        I = n("755624"),
        C = n("414833"),
        A = n("872173"),
        M = n("374363"),
        x = n("233069"),
        R = n("42203"),
        v = n("923959"),
        L = n("247013"),
        O = n("305961"),
        b = n("377253"),
        y = n("957255"),
        j = n("660478"),
        F = n("677099"),
        D = n("282109"),
        U = n("718517"),
        k = n("449008"),
        P = n("299039"),
        w = n("49111"),
        G = n("648564");
      ((s = a || (a = {}))[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.Mentioned = 2)] = "Mentioned"),
        (s[(s.AllMessagesNotifications = 3)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 4)] = "GuildChannel"),
        (s[(s.OldChannel = 5)] = "OldChannel"),
        (s[(s.NoNotifications = 6)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 7)] = "ReallyOldChannel"),
        ((i = l || (l = {})).Loading = "loading"),
        (i.Loaded = "loaded"),
        (i.Done = "done");
      let B = 25;
      class H extends o.EventEmitter {
        loadMore() {
          let { loadState: e, channels: t } = this.state;
          if ("loaded" !== e) return;
          let n = !1,
            a = t.map(e => {
              if (e.isFullyLoaded || e.deleted || n) return e;
              if (e.collapsed)
                return e.hasLoadedAnything
                  ? e
                  : { ...e, hasLoadedAnything: !0 };
              return (e = this.populateInitialStateFromStore(e)).isFullyLoaded
                ? e
                : (d(
                    "nsfw" !== e.type,
                    "this channel should already be loaded"
                  ),
                  "messages" === e.type &&
                    this.loadChannelMessages(e) &&
                    (n = !0),
                  e);
            });
          (!n || a.some((e, n) => e !== t[n])) &&
            this.setState({
              channels: a,
              loadState: n ? this.state.loadState : "done",
            });
        }
        populateInitialStateFromStore(e) {
          if ("messages" === e.type) return V(e, !1);
          if ("nsfw" === e.type)
            return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
          if ("forum" === e.type) {
            let t = T.default.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: t };
          } else (0, k.assertNever)(e);
        }
        clearScrollToChannelIndex() {
          this.setState({ scrollToChannelIndex: null });
        }
        loadChannelMessages(e) {
          E.default.clearChannel(e.channelId);
          let t = E.default.fetchMessages({
            channelId: e.channelId,
            limit: w.MAX_MESSAGES_PER_CHANNEL,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
          });
          return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
              t => {
                this.setState({
                  loadState: "loaded",
                  channels: this.updateChannel(e.channelId, e => {
                    d("messages" === e.type, "channel cannot change type");
                    let n = V(e, !0);
                    return (
                      (0 === n.messages.length ||
                        n.messages.length === e.messages.length) &&
                        (n = {
                          ...n,
                          hasLoadedAnything: !0,
                          isFullyLoaded: !0,
                          hasError: !t,
                        }),
                      n
                    );
                  }),
                });
              },
              () => {
                this.setState({
                  loadState: "loaded",
                  channels: this.updateChannel(e.channelId, e => {
                    var t;
                    d("messages" === e.type, "channel cannot change type");
                    let n = V(e, !0);
                    return {
                      ...n,
                      isFullyLoaded: !0,
                      hasError: !0,
                      hasLoadedAnything: !0,
                      newestUnreadMessageId:
                        null === (t = e.messages[e.messages.length - 1]) ||
                        void 0 === t
                          ? void 0
                          : t.id,
                    };
                  }),
                });
              }
            ),
            !0)
          );
        }
        updateChannel(e, t) {
          return this.state.channels.map(n => (n.channelId === e ? t(n) : n));
        }
        setState(e) {
          for (let t in e)
            if (e[t] !== this.state[t]) {
              (this.state = { ...this.state, ...e }),
                this.emit("change", this.state);
              return;
            }
        }
        constructor(e, t) {
          super(),
            (this.state = e),
            (this.scrollerRef = t),
            (this.maybeLoadMore = () => {
              var e;
              let t =
                null === (e = this.scrollerRef.current) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
              if (null == t) return;
              let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
              n < 2e3 && this.loadMore();
            }),
            (this.reloadMessages = () => {
              this.setState({
                channels: this.state.channels.map(e =>
                  "messages" === e.type && e.hasLoadedAnything
                    ? V(e, !1, !0)
                    : e
                ),
              });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = e => {
              let { channelId: t, newestUnreadMessageId: n } = e;
              if (
                (h.default.wait(() =>
                  m.ack(t, !0, void 0, n, {
                    section: w.AnalyticsSections.INBOX,
                  })
                ),
                1 === this.state.channels.length)
              ) {
                this.deleteChannel(t);
                return;
              }
              this.setState({
                channels: this.updateChannel(t, e => ({ ...e, deleted: !0 })),
              }),
                p.default.useReducedMotion && this.deleteChannel(t),
                this.maybeLoadMore();
            }),
            (this.markGuildRead = e => {
              h.default.wait(() =>
                (0, g.default)([e], w.AnalyticsSections.INBOX)
              ),
                this.setState({
                  channels: this.state.channels.filter(t => t.guildId !== e),
                }),
                this.maybeLoadMore();
            }),
            (this.deleteChannel = e => {
              this.setState({
                scrollToChannelIndex: f.findIndex(
                  this.state.channels,
                  t => t.channelId === e
                ),
                channels: this.state.channels.filter(t => t.channelId !== e),
              }),
                this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
              m.bulkAck(
                this.state.channels.map(e => ({
                  channelId: e.channelId,
                  messageId: e.newestUnreadMessageId,
                }))
              ),
                this.setState({ channels: [] });
            }),
            (this.toggle = e => {
              let { channelId: t, guildId: n } = e,
                {
                  channels: a,
                  collapsedChannels: l,
                  loadState: s,
                } = this.state,
                i = f.findIndex(a, e => e.channelId === t),
                r = a[i],
                o = !r.collapsed;
              (l[t] = o),
                (0, A.updateUserChannelSettings)(
                  n,
                  t,
                  e => {
                    e.collapsedInInbox = o;
                  },
                  A.UserSettingsDelay.FREQUENT_USER_ACTION
                ),
                this.setState({
                  scrollToChannelIndex: i,
                  collapsedChannels: l,
                  loadState:
                    "done" !== s || o || r.isFullyLoaded ? s : "loaded",
                  channels: this.updateChannel(t, e => ({
                    ...e,
                    collapsed: o,
                  })),
                }),
                r.collapsed
                  ? !r.isFullyLoaded && this.loadMore()
                  : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
              let e = this.state.channels.filter(
                e =>
                  !D.default.isGuildOrCategoryOrChannelMuted(
                    e.guildId,
                    e.channelId
                  )
              );
              e.length !== this.state.channels.length &&
                this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
              let e = this.state.channels.filter(
                e => !I.default.isMuted(e.channelId)
              );
              e.length !== this.state.channels.length &&
                this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
              let e = this.state.channels.map(e => {
                if ("forum" !== e.type) return e;
                {
                  let t = T.default.hasLoaded(e.guildId);
                  return { ...e, isFullyLoaded: t, hasLoadedAnything: t };
                }
              });
              this.setState({ channels: e });
            });
        }
      }
      function V(e, t) {
        var n;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = b.default.getMessages(e.channelId),
          s = l
            .toArray()
            .filter(
              t =>
                P.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                0 >= P.default.compare(t.id, e.newestUnreadMessageId)
            ),
          i =
            s.length === e.messages.length &&
            s.every((t, n) => e.messages[n] === t);
        if (i && a) return e;
        let r =
            null != l.getAfter(e.oldestReadMessageId) ||
            (null === (n = s[0]) || void 0 === n ? void 0 : n.id) ===
              e.oldestUnreadMessageId,
          o = s[s.length - 1],
          u =
            P.default.compare(
              null == o ? void 0 : o.id,
              e.newestUnreadMessageId
            ) >= 0 || s.length >= B;
        return {
          ...e,
          messages: s,
          hasLoadedAnything: e.hasLoadedAnything || r || t,
          hasLoadedFirst: e.hasLoadedFirst || r || t,
          isFullyLoaded: e.isFullyLoaded || (r && u) || (t && !l.hasMoreAfter),
        };
      }
      function Y() {
        let e = (function () {
            var e, t;
            let n = {},
              a =
                null !==
                  (t =
                    null === (e = M.default.settings.guilds) || void 0 === e
                      ? void 0
                      : e.guilds) && void 0 !== t
                  ? t
                  : {};
            for (let e in a)
              for (let t in a[e].channels) {
                let l = R.default.getChannel(t);
                (!(t in n) || (null == l ? void 0 : l.guild_id) === e) &&
                  (n[t] = a[e].channels[t].collapsedInInbox);
              }
            return n;
          })(),
          t = (function (e) {
            let t = [];
            R.default
              .getSortedPrivateChannels()
              .forEach(n => K(e, t, null, n.id));
            let n = F.default.getFlattenedGuildIds();
            return (
              n.forEach(n => {
                if (null == n) return;
                let a = v.default.getSelectableChannelIds(n),
                  l = _.default.getActiveJoinedUnreadThreadsForGuild(n);
                a.forEach(a => {
                  var s;
                  K(e, t, n, a);
                  let i = null !== (s = l[a]) && void 0 !== s ? s : {};
                  for (let a in i) K(e, t, n, a);
                });
              }),
              f.sortBy(t, e => e.sortOrder)
            );
          })(e),
          n = f.uniq(t.map(e => e.guildId)).filter(k.isNotNullish);
        return (
          h.default.dispatch({ type: "INBOX_OPEN", guildIds: n }),
          {
            collapsedChannels: e,
            loadState: "loaded",
            channels: t,
            scrollToChannelIndex: null,
          }
        );
      }
      function K(e, t, n, a) {
        if (null == a) return;
        let l = R.default.getChannel(a);
        if (null == l) return;
        let s = x.THREAD_CHANNEL_TYPES.has(l.type);
        if (!s && D.default.isGuildOrCategoryOrChannelMuted(n, l.id)) return;
        if (l.isPrivate()) {
          if (0 === j.default.getMentionCount(a)) return;
        } else if (
          !(0, N.getHasImportantUnread)(l) &&
          0 === j.default.getMentionCount(a)
        )
          return;
        if (
          !l.isPrivate() &&
          !y.default.can(w.Permissions.READ_MESSAGE_HISTORY, l)
        )
          return;
        let i = j.default.ackMessageId(a);
        if (null == i) {
          let e = O.default.getGuild(l.guild_id);
          if (null == e || null == e.joinedAt) return;
          i = P.default.fromTimestamp(e.joinedAt.getTime());
        }
        let r = j.default.getOldestUnreadMessageId(a),
          o = j.default.lastMessageId(a),
          u = j.default.getMentionCount(a),
          d = u > 0 || l.isPrivate();
        if (null == o || P.default.compare(i, o) >= 0) return;
        let c = {
          guildId: n,
          channelId: a,
          oldestReadMessageId: i,
          oldestUnreadMessageId: r,
          newestUnreadMessageId: o,
          collapsed: !0 === e[a],
          hasLoadedAnything: !1,
          hasLoadedFirst: !1,
          isFullyLoaded: !1,
          hasError: !1,
          hasMentionsOrUnreads: d,
          mentionCount: u,
          sortOrder: (function (e, t, n) {
            let a = R.default.getChannel(t);
            if (S.default.isFavorite(t)) return 0;
            if (a.isPrivate()) return 1;
            if (j.default.getMentionCount(t) > 0) return 2;
            if (null != n) {
              let e = P.default.extractTimestamp(n);
              if (Date.now() - e > Q) return 7;
              if (Date.now() - e > z) return 5;
            }
            if (a.isThread()) {
              let e = (0, C.computeThreadNotificationSetting)(a);
              return e === G.ThreadMemberFlags.ALL_MESSAGES
                ? 3
                : e === G.ThreadMemberFlags.NO_MESSAGES
                  ? 6
                  : 4;
            }
            {
              let n = D.default.getChannelMessageNotifications(e, t),
                a =
                  n === w.UserNotificationSettings.NULL
                    ? D.default.getMessageNotifications(e)
                    : n;
              return a === w.UserNotificationSettings.ALL_MESSAGES
                ? 3
                : a === w.UserNotificationSettings.NO_MESSAGES
                  ? 6
                  : 4;
            }
          })(n, a, o),
        };
        l.isNSFW() && !L.default.didAgree(l.guild_id)
          ? t.push({ ...c, type: "nsfw" })
          : l.isForumLikeChannel()
            ? t.push({ ...c, type: "forum" })
            : t.push({ ...c, type: "messages", messages: [] });
      }
      let z = 2 * U.default.Millis.DAY,
        Q = 10 * U.default.Millis.DAY;
      function W(e) {
        let [t, n] = r.useState(() => new H(Y(), e)),
          [a, l] = r.useState(!1),
          s = r.useRef(Date.now()),
          [i, o] = r.useState(() => Y());
        return (
          r.useEffect(() => {
            let e = e => o(e);
            return (
              t.on("change", e),
              o(t.state),
              () => {
                t.off("change", e);
              }
            );
          }, [t]),
          r.useEffect(() => {
            if (null == i || i.channels.length > 0 || a) return;
            let t = Date.now(),
              r = Y();
            0 === r.channels.length ||
            t - s.current < 10 * U.default.Millis.SECOND
              ? l(!0)
              : ((s.current = Date.now()), n(new H(r, e)));
          }, [i, a, e]),
          r.useLayoutEffect(t.maybeLoadMore, [
            null == i ? void 0 : i.channels,
            null == i ? void 0 : i.loadState,
          ]),
          r.useEffect(
            () => (
              b.default.addChangeListener(t.reloadMessages),
              () => b.default.removeChangeListener(t.reloadMessages)
            ),
            [t.reloadMessages]
          ),
          r.useEffect(
            () => (
              D.default.addChangeListener(t.handleUserGuildSettingsStoreChange),
              () =>
                D.default.removeChangeListener(
                  t.handleUserGuildSettingsStoreChange
                )
            ),
            [t]
          ),
          r.useEffect(
            () => (
              I.default.addChangeListener(t.handleJoinedThreadsStoreChange),
              () =>
                I.default.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t]
          ),
          r.useEffect(
            () => (
              T.default.addChangeListener(t.handleActiveThreadsStoreChange),
              () =>
                T.default.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t]
          ),
          [i, t]
        );
      }
    },
    833150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("866227"),
        i = n.n(s),
        r = n("446674"),
        o = n("47693"),
        u = n("77078"),
        d = n("252744"),
        c = n("545158"),
        f = n("954732"),
        h = n("362189"),
        E = n("697218"),
        m = n("211248"),
        p = n("266926"),
        S = n("888400"),
        g = n("782340"),
        N = n("134866");
      function _(e) {
        let { invite: t, expired: n } = e,
          s = (0, r.useStateFromStores)([E.default], () => {
            var e, n;
            return null !==
              (n =
                null === (e = E.default.getUser(t.inviter_id)) || void 0 === e
                  ? void 0
                  : e.username) && void 0 !== n
              ? n
              : "";
          }),
          c = (0, S.dateFormat)(i(t.created_at), "LT"),
          f = l.useRef(null),
          p = (0, d.default)(f);
        return (
          l.useEffect(() => {
            !n && (0, h.updateInviteStatus)(t);
          }, [t, n]),
          (0, a.jsxs)("div", {
            className: N.container,
            ref: f,
            children: [
              (0, a.jsxs)("div", {
                className: N.primaryRow,
                children: [
                  (0, a.jsx)("img", {
                    className: N.inviteImage,
                    src: t.application_asset,
                    alt: "Game Invite",
                  }),
                  (0, a.jsx)(u.Text, {
                    className: N.title,
                    variant: "text-md/semibold",
                    color: "interactive-active",
                    children:
                      g.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format(
                        { username: s }
                      ),
                  }),
                  (0, a.jsxs)("div", {
                    className: N.buttonContainer,
                    children: [
                      (0, a.jsx)(T, {
                        expired: n,
                        invite: t,
                        isHoveringInvite: p,
                      }),
                      (0, a.jsx)(m.default, {
                        className: N.deleteButton,
                        tooltip: g.default.Messages.DELETE,
                        color: m.CircleIconButtonColors.SECONDARY,
                        icon: (0, a.jsx)(o.TrashIcon, {
                          width: 16,
                          height: 16,
                        }),
                        onClick: () => {
                          (0, h.deleteInvite)(t);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", { className: N.divider }),
              (0, a.jsxs)("div", {
                className: N.secondaryRow,
                children: [
                  (0, a.jsxs)(u.Text, {
                    variant: "text-xs/medium",
                    className: N.subtitle,
                    color: "text-muted",
                    children: [t.application_name, " \xb7 ", c],
                  }),
                  n &&
                    (0, a.jsx)("div", {
                      className: N.metaContainer,
                      children: (0, a.jsx)(u.Text, {
                        variant: "text-xxs/semibold",
                        className: N.metaText,
                        color: "text-muted",
                        children: g.default.Messages.GAME_INVITES_EXPIRED,
                      }),
                    }),
                ],
              }),
            ],
          })
        );
      }
      function T(e) {
        let { expired: t, invite: n, isHoveringInvite: s } = e,
          i = (0, r.useStateFromStores)([f.default], () =>
            f.default.isInviteGameInstalled(n)
          ),
          o = (0, r.useStateFromStores)([f.default], () =>
            f.default.isInviteJoinable(n)
          ),
          [d, E] = l.useState(!1),
          m = l.useCallback(async () => {
            E(!0);
            try {
              await (0, h.launchInviteGame)(n);
            } catch {}
            E(!1);
          }, [n]),
          S = l.useCallback(async () => {
            E(!0);
            try {
              await (0, h.acceptInvite)(n);
            } catch {}
            E(!1);
          }, [n]);
        if (t)
          return i && s
            ? (0, a.jsx)(u.Button, {
                className: N.primaryButton,
                color: u.ButtonColors.TRANSPARENT,
                disabled: d,
                size: u.ButtonSizes.SMALL,
                onClick: m,
                children: g.default.Messages.GAME_INVITES_LAUNCH_GAME,
              })
            : null;
        return i && o
          ? (0, a.jsx)(u.Button, {
              className: N.primaryButton,
              color: u.ButtonColors.GREEN,
              disabled: d,
              size: u.ButtonSizes.SMALL,
              onClick: S,
              children: g.default.Messages.GAME_INVITES_JOIN_GAME,
            })
          : null != n.fallback_url
            ? (0, a.jsx)(u.Button, {
                className: N.primaryButton,
                disabled: d,
                size: u.ButtonSizes.SMALL,
                color: u.ButtonColors.TRANSPARENT,
                onClick: () => (0, c.default)(n.fallback_url),
                children: g.default.Messages.GAME_INVITES_INSTALL_GAME,
              })
            : (0, a.jsx)(u.Tooltip, {
                text: g.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format(
                  { gameTitle: n.application_name }
                ),
                children: e =>
                  (0, a.jsx)(u.Button, {
                    ...e,
                    className: N.primaryButton,
                    disabled: !0,
                    size: u.ButtonSizes.SMALL,
                    color: u.ButtonColors.TRANSPARENT,
                    onClick: () => (0, c.default)(n.fallback_url),
                    children: (0, a.jsxs)("div", {
                      className: N.launchToJoinContainer,
                      children: [
                        (0, a.jsx)(u.Text, {
                          variant: "text-xxs/medium",
                          className: N.launchToJoinText,
                          color: "text-muted",
                          children:
                            g.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN,
                        }),
                        (0, a.jsx)(p.default, {
                          color: u.tokens.colors.TEXT_MUTED.css,
                          width: 12,
                          height: 12,
                        }),
                      ],
                    }),
                  }),
              });
      }
    },
    788072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        o = n("151426"),
        u = n("823527"),
        d = n("47693"),
        c = n("77078"),
        f = n("954732"),
        h = n("362189"),
        E = n("211248"),
        m = n("805614"),
        p = n("64318"),
        S = n("833150"),
        g = n("782340"),
        N = n("129519");
      function _(e) {
        let { setTab: t, badgeState: s, closePopout: _ } = e,
          I = (0, r.useStateFromStoresArray)([f.default], () =>
            f.default.getInvites()
          ),
          C = (0, r.useStateFromStores)([f.default], () =>
            f.default.getInviteStatuses()
          ),
          [A, M] = l.useMemo(
            () =>
              i.partition(I, e => {
                var t;
                if (
                  (null === (t = C[e.invite_id]) || void 0 === t
                    ? void 0
                    : t.joinable) === !1
                )
                  return !1;
                let n = (Date.now() - new Date(e.created_at).getTime()) / 1e3;
                return n < e.ttl;
              }),
            [I, C]
          );
        return (l.useEffect(() => {
          (0, h.clearUnseenInvites)();
        }),
        0 === I.length)
          ? (0, a.jsxs)("div", {
              className: N.container,
              children: [
                (0, a.jsx)(p.default, {
                  tab: o.InboxTab.GAME_INVITES,
                  setTab: t,
                  badgeState: s,
                  closePopout: _,
                }),
                (0, a.jsx)("div", {
                  className: N.emptyStateContainer,
                  children: (0, a.jsx)(m.default, {
                    Icon: u.GameControllerIcon,
                    header: g.default.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
                    tip: g.default.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE,
                  }),
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className: N.container,
              children: [
                (0, a.jsx)(p.default, {
                  tab: o.InboxTab.GAME_INVITES,
                  setTab: t,
                  badgeState: s,
                  closePopout: _,
                  children: (0, a.jsx)(E.default, {
                    className: N.deleteButton,
                    tooltip: g.default.Messages.GAME_INVITES_DELETE_ALL,
                    color: E.CircleIconButtonColors.SECONDARY,
                    icon: (0, a.jsx)(d.TrashIcon, { width: 16, height: 16 }),
                    onClick: function () {
                      (0, c.openModalLazy)(async () => {
                        let { default: e } = await n
                          .el("715668")
                          .then(n.bind(n, "715668"));
                        return t =>
                          (0, a.jsx)(e, {
                            ...t,
                            onDelete: async () => {
                              await t.onClose();
                            },
                          });
                      });
                    },
                  }),
                }),
                (0, a.jsx)(c.AdvancedScrollerThin, {
                  children: (0, a.jsxs)("div", {
                    className: N.invitesContainer,
                    children: [
                      A.length > 0 &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(T, {
                              title:
                                g.default.Messages.GAME_INVITES_RECENT_HEADER,
                            }),
                            (0, a.jsx)(a.Fragment, {
                              children: A.map(e =>
                                (0, a.jsx)(
                                  S.default,
                                  { invite: e, expired: !1 },
                                  e.invite_id
                                )
                              ),
                            }),
                          ],
                        }),
                      M.length > 0 &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(T, {
                              title:
                                g.default.Messages.GAME_INVITES_EXPIRED_HEADER,
                            }),
                            (0, a.jsx)(a.Fragment, {
                              children: M.map(e =>
                                (0, a.jsx)(
                                  S.default,
                                  { invite: e, expired: !0 },
                                  e.invite_id
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            });
      }
      function T(e) {
        let { title: t } = e;
        return (0, a.jsxs)("div", {
          className: N.headerContainer,
          children: [
            (0, a.jsx)(c.Text, {
              className: N.headerTitle,
              variant: "text-xs/semibold",
              color: "interactive-normal",
              children: t,
            }),
            (0, a.jsx)("div", { className: N.headerDivider }),
          ],
        });
      }
    },
    470965: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("65597"),
        i = n("862337"),
        r = n("77078"),
        o = n("954732"),
        u = n("362189"),
        d = n("697218"),
        c = n("782340"),
        f = n("974214");
      function h(e) {
        let { inboxIconRef: t, recentsPopoutShown: n } = e,
          [h, E] = l.useState(!1),
          m = (0, s.default)([o.default], () =>
            o.default.getLastUnseenInvite()
          ),
          p = (0, s.default)([d.default], () =>
            null != m ? d.default.getUser(m.inviter_id) : null
          );
        return (l.useEffect(() => {
          n && E(!1);
        }, [n]),
        l.useEffect(() => {
          if (null == m) {
            E(!1);
            return;
          }
          (0, u.updateInviteStatus)(m), E(!0);
          let e = new i.Timeout();
          return (
            e.start(5e3, () => {
              E(!1);
            }),
            () => {
              e.stop();
            }
          );
        }, [m]),
        h && null != m && null != p)
          ? (0, a.jsxs)(r.TooltipLayer, {
              tooltipClassName: f.tooltip,
              tooltipContentClassName: f.tooltipContent,
              targetElementRef: t,
              position: "bottom",
              color: r.TooltipColors.BLACK,
              children: [
                (0, a.jsxs)("div", {
                  className: f.iconContainer,
                  children: [
                    (0, a.jsx)("img", {
                      className: f.inviteImage,
                      src: m.application_asset,
                      alt: "Game Invite",
                    }),
                    (0, a.jsx)("div", {
                      className: f.offsetAvatarContainer,
                      children: (0, a.jsx)(r.Avatar, {
                        "aria-label": "Inviter",
                        className: f.inviterImage,
                        src: p.getAvatarURL(null, 24),
                        size: r.AvatarSizes.SIZE_24,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: f.titleContainer,
                  children: [
                    (0, a.jsx)(r.Text, {
                      className: f.title,
                      variant: "text-xs/semibold",
                      children:
                        c.default.Messages.GAME_INVITES_INVITE_FROM.format({
                          username: p.username,
                        }),
                    }),
                    (0, a.jsx)(r.Text, {
                      className: f.subtitle,
                      variant: "text-xxs/medium",
                      children: m.application_name,
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    200745: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isFavoriteSearchEnabled: function () {
            return l;
          },
        });
      var a = n("697218");
      function l() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = a.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.isStaff()) &&
          void 0 !== t &&
          t
        );
      }
    },
    92790: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("781738");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("98159"),
        o = n("369470"),
        u = n.n(o),
        d = n("446674"),
        c = n("77078"),
        f = n("378438"),
        h = n("137223"),
        E = n("76385"),
        m = n("955513"),
        p = n("180748"),
        S = n("206230"),
        g = n("716241"),
        N = n("42203"),
        _ = n("923959"),
        T = n("744983"),
        I = n("18494"),
        C = n("476765"),
        A = n("659500"),
        M = n("202752"),
        x = n("751520"),
        R = n("313483"),
        v = n("200745"),
        L = n("653291"),
        O = n("49111"),
        b = n("782340"),
        y = n("79193");
      n("590976");
      let j = (0, C.uid)(),
        F = u(f.search, 500);
      class D extends l.PureComponent {
        componentDidMount() {
          var e, t;
          A.ComponentDispatch.subscribe(
            O.ComponentActions.PERFORM_SEARCH,
            this.search
          ),
            A.ComponentDispatch.subscribe(
              O.ComponentActions.SET_SEARCH_QUERY,
              this.handleSetSearchQuery
            ),
            A.ComponentDispatch.subscribe(
              O.ComponentActions.FOCUS_SEARCH,
              this.handleFocusSearch
            ),
            null === (t = this._editorRef) ||
              void 0 === t ||
              null === (e = t.editor) ||
              void 0 === e ||
              e.setAttribute("aria-haspopup", "listbox");
        }
        componentDidUpdate(e) {
          let { editorState: t, searchId: n } = this.props;
          if (t !== e.editorState) {
            let e = x.tokenizeQuery(M.getFirstTextBlock(t)),
              a = R.getSelectionScope(e, t);
            f.updateAutocompleteQuery(n, e, a),
              null != this._editorRef &&
                M.scrollCursorIntoView(this._editorRef.editor);
          }
        }
        componentWillUnmount() {
          A.ComponentDispatch.unsubscribe(
            O.ComponentActions.PERFORM_SEARCH,
            this.search
          ),
            A.ComponentDispatch.unsubscribe(
              O.ComponentActions.SET_SEARCH_QUERY,
              this.handleSetSearchQuery
            ),
            A.ComponentDispatch.unsubscribe(
              O.ComponentActions.FOCUS_SEARCH,
              this.handleFocusSearch
            );
        }
        tokenize(e) {
          let t = x
            .tokenizeQuery(M.getFirstTextBlock(e))
            .filter(e => e.type !== E.default.NON_TOKEN_TYPE);
          return M.applyTokensAsEntities(t, e, m.default);
        }
        clearSearch() {
          let { searchId: e } = this.props;
          null != e && f.clearSearchState(e);
        }
        handlePastedFiles() {
          return !0;
        }
        handleDroppedFiles() {
          return !0;
        }
        handleDrop() {
          return !0;
        }
        renderInput(e) {
          let { editorState: t } = this.props;
          return (0, a.jsx)(r.Editor, {
            autoCorrect: "off",
            ref: this.setEditorRef,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            handleReturn: this.handleReturn,
            handleBeforeInput: this.handleBeforeInput,
            handleKeyCommand: this.handleKeyCommand,
            handlePastedText: this.handlePastedText,
            handlePastedFiles: this.handlePastedFiles,
            handleDroppedFiles: this.handleDroppedFiles,
            handleDrop: this.handleDrop,
            keyBindingFn: this.handleKeyBind,
            placeholder: b.default.Messages.SEARCH,
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? j : void 0,
            ariaLabel: b.default.Messages.SEARCH,
            ariaAutocomplete: "list",
          });
        }
        render() {
          let {
              searchId: e,
              editorState: t,
              hasResults: n,
              className: l,
            } = this.props,
            { focused: s } = this.state,
            r = M.getFirstTextBlock(t).length > 0;
          return null == e
            ? null
            : (0, a.jsx)(c.Popout, {
                renderPopout: this.renderPopout,
                position: "bottom",
                animation: c.Popout.Animation.NONE,
                shouldShow: s,
                autoInvert: !1,
                children: (t, o) => {
                  var u;
                  let { isShown: d } = o;
                  return (0, a.jsx)("div", {
                    className: l,
                    children: (0, a.jsx)("div", {
                      className: i(y.search, {
                        [y.open]: r || s,
                        [y.focused]: s,
                      }),
                      children: (0, a.jsx)(c.FocusRing, {
                        focusTarget: {
                          current:
                            null === (u = this._editorRef) || void 0 === u
                              ? void 0
                              : u.editor,
                        },
                        ringTarget: this._searchBarRef,
                        children: (0, a.jsxs)(
                          "div",
                          {
                            className: y.searchBar,
                            ref: this._searchBarRef,
                            children: [
                              this.renderInput(d),
                              (0, a.jsx)(h.SearchBarIcon, {
                                onClear: this.handleClearSearch,
                                hasContent: r || n,
                                className: y.icon,
                              }),
                            ],
                          },
                          e
                        ),
                      }),
                    }),
                  });
                },
              });
        }
        constructor(e) {
          super(e),
            (this.state = { focused: !1, selectedIndex: void 0 }),
            (this._searchBarRef = l.createRef()),
            (this._searchPopoutRef = l.createRef()),
            (this.handleSetSearchQuery = e => {
              let {
                  query: t,
                  anchor: n,
                  focus: a,
                  performSearch: l,
                  replace: s,
                } = e,
                { editorState: i } = this.props,
                r = M.getFirstTextBlock(i);
              " " !== t.charAt(t.length - 1) && (t += " "),
                null != n &&
                  0 !== n &&
                  " " !== r.charAt(n - 1) &&
                  " " !== t.charAt(0) &&
                  (t = " " + t),
                s
                  ? ((i = M.replaceAllContent(t, i)), (n = 0))
                  : (i = M.updateContent(t, i, n, a)),
                (i = M.truncateContent(i, 512)),
                (i = this.tokenize(i));
              let o = Number(n) + t.length;
              (i = M.setCollapsedSelection(o, i)),
                this.setEditorState(i),
                l && this.search({ queryString: M.getFirstTextBlock(i) });
            }),
            (this.handleSelectedIndexChanged = e => {
              var t, n;
              null === (n = this._editorRef) ||
                void 0 === n ||
                null === (t = n.editor) ||
                void 0 === t ||
                t.setAttribute(
                  "aria-activedescendant",
                  null != e ? "".concat(j, "-").concat(e) : void 0
                ),
                this.setState({ selectedIndex: e });
            }),
            (this.renderPopout = () =>
              (0, a.jsx)(L.default, {
                ref: this._searchPopoutRef,
                navId: j,
                onSelectedIndexChanged: this.handleSelectedIndexChanged,
              })),
            (this.search = e => {
              let { searchId: t, isSearching: n } = this.props,
                { queryString: a, searchEverywhere: l } = null != e ? e : {};
              if (null == a || "" === a) {
                let { editorState: e } = this.props;
                a = M.getFirstTextBlock(e);
              }
              if (null != t && !n) {
                let e = x.tokenizeQuery(a),
                  n = x.getSearchQueryFromTokens(e);
                for (let t = 0; t < e.length; t++)
                  !x.filterHasAnswer(e[t], e[t + 1]) &&
                    (a = a.substring(0, e[t].start) + a.substring(e[t].end));
                if (0 === e.length || 0 === Object.keys(n).length) return !1;
                F(t, n, a, !!l), this.onBlur();
              }
              return !0;
            }),
            (this.handleClearSearch = e => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              e.preventDefault(), e.stopPropagation();
              let a = M.getFirstTextBlock(t);
              if ("" === a) {
                this.focusEditor();
                return;
              }
              (t = M.truncateContent(t, 0)),
                this.setEditorState(t),
                !n && Promise.resolve().then(() => this.blurEditor());
            }),
            (this.handleFocusSearch = e => {
              let { prefillCurrentChannel: t } = e;
              if (!t) {
                this.focusEditor();
                return;
              }
              let n = I.default.getChannelId(),
                a = N.default.getChannel(n);
              if (
                ((null == a ? void 0 : a.isThread()) &&
                  (a = N.default.getChannel(null == a ? void 0 : a.parent_id)),
                null == a || a.isPrivate())
              ) {
                this.focusEditor();
                return;
              }
              let l = _.default.getTextChannelNameDisambiguations(
                  a.getGuildId()
                ),
                s = l[a.id],
                i = null != s ? s.name : a.name;
              this.handleSetSearchQuery({
                query:
                  m.default[O.SearchTokenTypes.FILTER_IN].key +
                  "#".concat(i, " "),
                replace: !0,
              });
            }),
            (this.focusEditor = () => {
              let { _editorRef: e } = this;
              null != e && Promise.resolve().then(() => e.focus());
            }),
            (this.blurEditor = () => {
              var e;
              null === (e = this._editorRef) || void 0 === e || e.blur();
            }),
            (this.setEditorRef = e => {
              this._editorRef = e;
            }),
            (this.onFocus = () => {
              let { searchType: e } = this.props;
              g.default.trackWithMetadata(O.AnalyticEvents.SEARCH_OPENED, {
                search_type: e,
              }),
                this.setState({ focused: !0 });
            }),
            (this.onBlur = () => {
              this.setState({ focused: !1 }, () => {
                M.isEmpty(this.props.editorState) && this.clearSearch();
              });
            }),
            (this.handleReturn = e => {
              let { shiftKey: t } = e;
              e.preventDefault();
              let { current: n } = this._searchPopoutRef,
                a = null != n && n.selectOption();
              return (
                !a &&
                  ((0, v.isFavoriteSearchEnabled)() && t
                    ? this.search({ searchEverywhere: !0 })
                    : this.search()),
                !0
              );
            }),
            (this.handleBeforeInput = e => {
              let { editorState: t } = this.props,
                { focused: n } = this.state,
                a = M.getFirstTextBlock(t);
              return (
                !!(a.length >= 512) ||
                ((t = M.updateContent(e, t)),
                (t = M.truncateContent(t, 512)),
                (t = this.tokenize(t)),
                this.setEditorState(t),
                !n && this.setState({ focused: !0 }),
                !0)
              );
            }),
            (this.handleKeyCommand = e => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              switch (e) {
                case "backspace":
                case "backspace-word":
                case "backspace-to-start-of-line":
                case "delete":
                case "delete-word":
                  return (
                    (t = M.deleteContent(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    !n && this.setState({ focused: !0 }),
                    !0
                  );
                case "transpose-characters":
                case "move-selection-to-start-of-block":
                case "move-selection-to-end-of-block":
                  return (
                    (t = M.miscCommand(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    !0
                  );
                case "split-block":
                case "underline":
                case "bold":
                case "italic":
                  return !0;
              }
            }),
            (this.handlePastedText = e => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              return (
                (e = null != e ? e.replace(/\n/g, "") : ""),
                (t = M.updateContent(e, t)),
                (t = M.truncateContent(t, 512)),
                (t = this.tokenize(t)),
                !n && this.setState({ focused: !0 }),
                this.setEditorState(t),
                !0
              );
            }),
            (this.setEditorState = e => {
              let { searchId: t } = this.props;
              f.setSearchState(t, e);
            }),
            (this.handleKeyBind = e => {
              let { key: t, metaKey: n, shiftKey: a } = e,
                {
                  editorState: l,
                  searchId: s,
                  keyboardModeEnabled: i,
                } = this.props;
              if ((e.stopPropagation(), "Escape" === t)) {
                if ((e.preventDefault(), M.isEmpty(l))) this.blurEditor();
                else {
                  let e = M.clearContent(l);
                  f.setSearchState(s, e), this.setState({ focused: !0 });
                }
                return !0;
              }
              if ("ArrowUp" === t) {
                e.preventDefault();
                let { current: t } = this._searchPopoutRef;
                return null != t && t.focusPreviousOption(), !0;
              }
              if ("ArrowDown" === t) {
                e.preventDefault();
                let { current: t } = this._searchPopoutRef;
                return null != t && t.focusNextOption(), !0;
              }
              if ("Tab" === t) {
                if (i) return;
                return (0, p.enableKeyboardMode)(), !0;
              }
              if ("Home" === t || ("ArrowLeft" === t && n))
                return (
                  e.preventDefault(),
                  (l = a
                    ? M.setToStartSelection(l)
                    : M.setCollapsedStartSelection(l)),
                  this.setEditorState(l),
                  !0
                );
              if ("End" === t || ("ArrowRight" === t && n))
                return (
                  e.preventDefault(),
                  (l = a
                    ? M.setToEndSelection(l)
                    : M.setCollapsedEndSelection(l)),
                  this.setEditorState(l),
                  !0
                );
              if (("Delete" === t || "Backspace" === t) && n) {
                let e = M.clearContent(l);
                return this.setEditorState(e), !0;
              }
              return M.getDefaultKeyBinding(e);
            }),
            x.clearTokenCache();
        }
      }
      var U = d.default.connectStores([S.default, T.default], () => {
        var e;
        let t = T.default.getCurrentSearchId(),
          n = T.default.getSearchType(),
          a = null != t && T.default.isSearching(t),
          l =
            null != t &&
            null !== (e = T.default.getEditorState(t)) &&
            void 0 !== e
              ? e
              : M.createEmptyEditorState(R.generateDecorators(m.default)),
          s = S.default.keyboardModeEnabled;
        return {
          searchId: t,
          searchType: n,
          isSearching: a,
          editorState: l,
          hasResults: T.default.hasResults(t),
          keyboardModeEnabled: s,
        };
      })(D);
    },
    653291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        o = n.n(r),
        u = n("917351"),
        d = n.n(u),
        c = n("866227"),
        f = n.n(c),
        h = n("868233"),
        E = n("446674"),
        m = n("77078"),
        p = n("378438"),
        S = n("425773"),
        g = n("76385"),
        N = n("955513"),
        _ = n("679653"),
        T = n("419830"),
        I = n("42203"),
        C = n("26989"),
        A = n("27618"),
        M = n("712611"),
        x = n("18494"),
        R = n("162771"),
        v = n("102985"),
        L = n("697218"),
        O = n("834179"),
        b = n("689476"),
        y = n("228220"),
        j = n("659500"),
        F = n("701909"),
        D = n("751520"),
        U = n("158998"),
        k = n("200745"),
        P = n("49111"),
        w = n("782340"),
        G = n("484354");
      let B = f("2015-05-15").local(),
        H = (0, h.makeLazy)({
          createPromise: () => n.el("201959").then(n.bind(n, "201959")),
          webpackId: "201959",
        }),
        V = (e, t, n) => {
          var l, s, i;
          let { user: r, text: o } = n;
          if (null == r) return (0, a.jsx)("strong", { children: o });
          let u = L.default.getUser(r.id),
            d = I.default.getChannel(e),
            c = (null == d ? void 0 : d.isPrivate())
              ? A.default.getNickname(r.id)
              : null,
            f =
              null !==
                (s =
                  null !== (l = C.default.getNick(e, r.id)) && void 0 !== l
                    ? l
                    : c) && void 0 !== s
                ? s
                : U.default.getName(r),
            h =
              null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) &&
              void 0 !== i
                ? i
                : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
          return [
            (0, a.jsx)(
              "img",
              { alt: "", className: G.displayAvatar, src: h },
              "avatar-".concat(t, "-").concat(r.id)
            ),
            (0, a.jsx)(
              "span",
              { className: G.displayedNick, children: f },
              "display-nick-".concat(t, "-").concat(r.id)
            ),
            (0, a.jsx)(
              "span",
              {
                className: G.displayUsername,
                children: U.default.getUserTag(r, {
                  identifiable:
                    v.default.enabled && v.default.hidePersonalInformation
                      ? "never"
                      : "always",
                }),
              },
              "display-username-".concat(t, "-").concat(r.id)
            ),
          ];
        },
        Y = (e, t, n) => {
          let { channel: l, text: s } = n;
          if (null == l) return (0, a.jsx)("strong", { children: s });
          let i = I.default.getChannel(l.parent_id),
            r = (0, T.getChannelIconComponent)(l);
          return (0, a.jsxs)("div", {
            className: G.resultChannel,
            children: [
              null != r
                ? (0, a.jsx)(r, { className: G.searchResultChannelIcon })
                : null,
              (0, a.jsx)("strong", {
                children: (0, _.computeChannelName)(l, L.default, A.default),
              }),
              null != i
                ? (0, a.jsx)("span", {
                    className: G.searchResultChannelCategory,
                    children: (0, _.computeChannelName)(
                      i,
                      L.default,
                      A.default
                    ),
                  })
                : null,
            ],
          });
        },
        K = e => {
          let t,
            n,
            {
              id: l,
              searchId: s,
              result: r,
              group: o,
              className: u,
              role: d,
              tabIndex: c,
              "aria-selected": f,
              onSelect: h,
              onFocus: E,
              showFilter: p,
              renderResult: S,
            } = e;
          if (p) {
            var g, _;
            t = (0, a.jsx)("span", {
              className: G.filter,
              children:
                null !==
                  (_ =
                    null === (g = N.default[o]) || void 0 === g
                      ? void 0
                      : g.key) && void 0 !== _
                  ? _
                  : "addme:",
            });
          }
          return (
            (n =
              null != S
                ? S(s, o, r)
                : (0, a.jsx)("strong", { children: r.text })),
            (0, a.jsxs)(m.Clickable, {
              tag: "li",
              className: i(G.option, u),
              onClick: h,
              onFocus: E,
              id: l,
              role: d,
              tabIndex: c,
              "aria-selected": f,
              children: [
                t,
                n,
                (0, a.jsx)(b.default, { className: G.plusIcon }),
              ],
            })
          );
        },
        z = e => (0, a.jsx)(K, { ...e, className: G.user, renderResult: V }),
        Q = {
          [P.SearchTokenTypes.FILTER_FROM]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FROM,
            component: z,
          },
          [P.SearchTokenTypes.FILTER_MENTIONS]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
            component: z,
          },
          [P.SearchTokenTypes.FILTER_HAS]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HAS,
          },
          [P.SearchTokenTypes.FILTER_FILE_TYPE]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE,
          },
          [P.SearchTokenTypes.FILTER_IN]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
            component: e => (0, a.jsx)(K, { ...e, renderResult: Y }),
          },
          [P.SearchAutocompleteGroups.DATES]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_DATES,
          },
          [P.SearchAutocompleteGroups.HISTORY]: {
            titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
            groupTip(e) {
              let { searchId: t } = e;
              return (0, a.jsx)(m.Tooltip, {
                text: w.default.Messages.SEARCH_CLEAR_HISTORY,
                position: "left",
                children: e => {
                  let { onMouseEnter: n, onMouseLeave: l } = e;
                  return (0, a.jsx)(m.Clickable, {
                    onClick: () => (0, p.clearHistory)(t),
                    onMouseEnter: n,
                    onMouseLeave: l,
                    className: G.searchClearHistory,
                    title: w.default.Messages.SEARCH_CLEAR_HISTORY,
                    "aria-label": w.default.Messages.SEARCH_CLEAR_HISTORY,
                    children: (0, a.jsx)(y.default, {}),
                  });
                },
              });
            },
            component: function (e) {
              let {
                  onSelect: t,
                  onFocus: n,
                  result: s,
                  showFilter: r,
                  searchId: o,
                  renderResult: u,
                  group: d,
                  ...c
                } = e,
                f = "",
                h = l.useMemo(
                  () =>
                    (function (e) {
                      let t = D.tokenizeQuery(e).map((e, t, n) =>
                        D.filterHasAnswer(e, n[t + 1])
                          ? e
                          : new g.Token(e.getFullMatch(), g.NON_TOKEN_TYPE)
                      );
                      return t;
                    })(s.text),
                  [s.text]
                ),
                E = h.map(e => {
                  let t = e.getFullMatch();
                  if ("" === t.trim()) return null;
                  let n = P.IS_SEARCH_FILTER_TOKEN.test(e.type),
                    l = P.IS_SEARCH_ANSWER_TOKEN.test(e.type);
                  return (
                    (f += t),
                    (0, a.jsx)(
                      "span",
                      {
                        className: i({
                          [G.filter]: n,
                          [G.answer]: l,
                          [G.nonText]: !n && !l,
                        }),
                        children: t,
                      },
                      e.type + t
                    )
                  );
                });
              return (0, a.jsxs)(m.Clickable, {
                className: i(G.option, G.history),
                onClick: t,
                onFocus: n,
                ...c,
                "aria-label": w.default.Messages.SEARCH_FROM_SUGGESTIONS.format(
                  { suggestion: f }
                ),
                children: [E, (0, a.jsx)(b.default, { className: G.plusIcon })],
              });
            },
          },
          [P.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
            titleText: () =>
              w.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
            groupTip: () =>
              (0, a.jsx)(m.Tooltip, {
                text: w.default.Messages.LEARN_MORE,
                position: "left",
                children: e =>
                  (0, a.jsx)("div", {
                    className: G.searchLearnMore,
                    ...e,
                    children: (0, a.jsx)(m.Anchor, {
                      href: F.default.getArticleURL(
                        P.HelpdeskArticles.USING_SEARCH
                      ),
                      title: w.default.Messages.LEARN_MORE,
                      children: (0, a.jsx)(O.default, {}),
                    }),
                  }),
              }),
            component: function (e) {
              var t;
              let {
                  result: n,
                  onSelect: l,
                  onFocus: s,
                  showFilter: r,
                  searchId: o,
                  ...u
                } = e,
                d = D.getSearchOptionAnswer(
                  null !== (t = n.token) && void 0 !== t ? t : ""
                );
              return (0, a.jsxs)(m.Clickable, {
                className: i(G.option, G.searchOption),
                onClick: l,
                onFocus: s,
                ...u,
                children: [
                  (0, a.jsx)("span", { className: G.filter, children: n.text }),
                  (0, a.jsx)("span", {
                    className: i({ [G.answer]: d }),
                    children: d,
                  }),
                  (0, a.jsx)(b.default, { className: G.plusIcon }),
                ],
              });
            },
          },
        };
      class W extends l.PureComponent {
        componentDidUpdate(e, t) {
          let { resultsState: n, totalResults: a } = this.props,
            { mode: l } = n,
            { resultsState: s } = e;
          null != l.filter && null == s.mode.filter && a > 0
            ? this.setSelectedIndex(0)
            : l.type === P.SearchPopoutModes.FILTER_ALL &&
                s.mode.type !== l.type
              ? this.setSelectedIndex(-1)
              : this.keepCurrentOptionSelected(e, t);
        }
        setSelectedIndex(e) {
          this.setState({ selectedIndex: e }, () =>
            this.props.onSelectedIndexChanged(e)
          );
        }
        render() {
          let { selectedIndex: e } = this.state,
            {
              navId: t,
              resultsState: n,
              totalResults: l,
              searchId: s,
            } = this.props;
          return (0, a.jsx)(S.default, {
            numResults: l,
            query: n.query,
            navId: t,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () =>
              this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites:
              s === P.FAVORITES && (0, k.isFavoriteSearchEnabled)(),
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.state = {
              dateHint: (0, N.getRandomDateShortcut)(),
              selectedIndex: -1,
            }),
            (this.handleDateChange = e => {
              this.setSearchQuery(e.format(P.SEARCH_DATE_FORMAT) + " ", !0);
            }),
            (this.keepCurrentOptionSelected = (e, t) => {
              let { selectedIndex: n } = this.state,
                { resultsState: a, totalResults: l } = this.props,
                { mode: s, autocompletes: i } = a,
                { resultsState: r } = e;
              if (s.type !== r.mode.type) this.setSelectedIndex(-1);
              else if (
                t.selectedIndex >= 0 &&
                (t.selectedIndex === n || r.autocompletes.length !== i.length)
              ) {
                let e = D.getFlattenedStringArray(r.autocompletes, r.mode.type),
                  n = e[t.selectedIndex - 1],
                  a = D.getFlattenedStringArray(i, s.type),
                  o = a.indexOf(n);
                -1 !== o
                  ? this.setSelectedIndex(o)
                  : t.selectedIndex >= l && this.setSelectedIndex(l - 1);
              }
            }),
            (this.focusNextOption = () => {
              this.focusOtherOption(1);
            }),
            (this.focusPreviousOption = () => {
              this.focusOtherOption(-1);
            }),
            (this.focusOtherOption = e => {
              let { selectedIndex: t } = this.state,
                { resultsState: n } = this.props;
              !D.showDatePicker(n.mode.filter) && this.focusOption(t + e);
            }),
            (this.focusOption = e => {
              let t = e,
                { autocompletes: n } = this.props.resultsState,
                a = this.shouldShowSearchQuery();
              t < -1 || (!a && t < 0)
                ? (t = D.getTotalResults(n) - 1)
                : a && t >= D.getTotalResults(n)
                  ? (t = -1)
                  : !a && t >= D.getTotalResults(n) && (t = 0),
                this.setSelectedIndex(t);
            }),
            (this.selectOption = e => {
              let t = e;
              if ((null == t && (t = this.state.selectedIndex), t < 0))
                return !1;
              let { autocompletes: n, mode: a } = this.props.resultsState;
              if (D.showDatePicker(a.filter)) return;
              let l = D.getFlattenedStringArray(n, a.type);
              if (t >= l.length) return !1;
              let s = l[t],
                i = (function (e) {
                  let t = !0,
                    n = e.trim();
                  return (
                    d(N.default).forOwn(e => {
                      "" !== e.key && null != e.key && n === e.key && (t = !1);
                    }),
                    t
                  );
                })(s);
              return this.setSearchQuery(s, i), !0;
            }),
            (this.setSearchQuery = function (e) {
              let n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                { mode: a, cursorScope: l } = t.props.resultsState,
                s = 0;
              null != a.token
                ? (s = a.token.start)
                : (null == l ? void 0 : l.currentToken) != null &&
                  (s = l.currentToken.end);
              let i = null != a.token ? a.token.end : s;
              j.ComponentDispatch.dispatch(
                P.ComponentActions.SET_SEARCH_QUERY,
                { query: e, anchor: s, focus: i, performSearch: n }
              ),
                t.setSelectedIndex(-1);
            }),
            (this.shouldShowSearchQuery = () => {
              let { mode: e } = this.props.resultsState;
              return (
                e.type !== P.SearchPopoutModes.FILTER &&
                e.type !== P.SearchPopoutModes.EMPTY &&
                !D.showDatePicker(e.filter)
              );
            }),
            (this.renderDatePicker = () =>
              (0, a.jsxs)("div", {
                className: G.datePicker,
                children: [
                  (0, a.jsx)(H, {
                    onSelect: this.handleDateChange,
                    maxDate: f().local(),
                    minDate: B,
                  }),
                  (0, a.jsxs)("div", {
                    className: G.datePickerHint,
                    children: [
                      (0, a.jsxs)("span", {
                        className: G.hint,
                        children: [
                          w.default.Messages.SEARCH_DATE_PICKER_HINT,
                          "\xa0",
                        ],
                      }),
                      (0, a.jsx)(m.Clickable, {
                        tag: "span",
                        className: G.hintValue,
                        onClick: this.handleHintClick,
                        children: this.state.dateHint,
                      }),
                    ],
                  }),
                ],
              })),
            (this.handleHintClick = () => {
              this.setSearchQuery(this.state.dateHint, !0);
            }),
            (this.performSearch = e => {
              j.ComponentDispatch.dispatch(
                P.ComponentActions.PERFORM_SEARCH,
                null != e ? e : {}
              );
            }),
            (this.renderAutocompletes = () => {
              let { selectedIndex: e } = this.state,
                { navId: t, searchId: n } = this.props,
                { autocompletes: l, mode: s } = this.props.resultsState;
              if (D.showDatePicker(s.filter)) return this.renderDatePicker();
              let i = -1;
              return l.map(l => {
                var r, o, u;
                let d, c;
                if (null == l || 0 === l.results.length) return null;
                let f = null !== (r = Q[l.group]) && void 0 !== r ? r : {};
                null != f.titleText &&
                  ((c = "".concat(l.group, "-header")),
                  (d = (0, a.jsx)("div", {
                    id: c,
                    className: G.header,
                    children: f.titleText(),
                  })));
                let h = null !== (o = f.groupTip) && void 0 !== o ? o : null,
                  E = null != h ? (0, a.jsx)(h, { searchId: n }) : null,
                  m = null !== (u = f.component) && void 0 !== u ? u : K,
                  p = s.type === P.SearchPopoutModes.FILTER_ALL;
                return (0, a.jsxs)(
                  "ul",
                  {
                    role: "group",
                    "aria-labelledby": c,
                    className: G.resultsGroup,
                    children: [
                      d,
                      E,
                      l.results.map(s => {
                        var r, o;
                        if (null == s || null == l) return null;
                        i += 1;
                        let u = e === i;
                        return (0, a.jsx)(
                          m,
                          {
                            searchId: n,
                            group:
                              null !== (r = s.group) && void 0 !== r
                                ? r
                                : l.group,
                            result: s,
                            showFilter: p,
                            onSelect: this.selectOption.bind(null, i),
                            onFocus: this.focusOption.bind(null, i),
                            ...(0, S.getListboxOptionProps)(t, i, u),
                          },
                          ""
                            .concat(l.group, "-")
                            .concat(s.text, "-")
                            .concat(
                              null !== (o = s.key) && void 0 !== o ? o : ""
                            )
                        );
                      }),
                    ],
                  },
                  l.group
                );
              });
            });
        }
      }
      var X = l.forwardRef((e, t) => {
        let [n, l, s] = (0, E.useStateFromStoresArray)(
          [R.default, x.default, M.default],
          () => {
            let e = R.default.getGuildId(),
              t = x.default.getChannelId(),
              n = null != e ? e : t;
            o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
            let a = M.default.getState(n),
              l = D.getTotalResults(a.autocompletes);
            return [n, a, l];
          }
        );
        return (0, a.jsx)(W, {
          ...e,
          searchId: n,
          resultsState: l,
          totalResults: s,
          ref: t,
        });
      });
    },
    414833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          computeThreadNotificationSetting: function () {
            return d;
          },
          useThreadNotificationSetting: function () {
            return c;
          },
        }),
        n("702976");
      var a = n("446674"),
        l = n("42203"),
        s = n("282109"),
        i = n("568734"),
        r = n("755624"),
        o = n("648564"),
        u = n("49111");
      function d(e) {
        let t = r.default.flags(e.id);
        if (null == t) return o.ThreadMemberFlags.NO_MESSAGES;
        if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ALL_MESSAGES))
          return o.ThreadMemberFlags.ALL_MESSAGES;
        if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ONLY_MENTIONS))
          return o.ThreadMemberFlags.ONLY_MENTIONS;
        if ((0, i.hasFlag)(t, o.ThreadMemberFlags.NO_MESSAGES))
          return o.ThreadMemberFlags.NO_MESSAGES;
        let n = l.default.getChannel(e.parent_id);
        if (
          null == n ||
          s.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
        )
          return o.ThreadMemberFlags.NO_MESSAGES;
        let a = s.default.resolvedMessageNotifications(n);
        return a === u.UserNotificationSettings.NO_MESSAGES
          ? o.ThreadMemberFlags.NO_MESSAGES
          : a === u.UserNotificationSettings.ONLY_MENTIONS
            ? o.ThreadMemberFlags.ONLY_MENTIONS
            : o.ThreadMemberFlags.ALL_MESSAGES;
      }
      function c(e) {
        return (0, a.useStateFromStores)(
          [r.default, s.default, l.default],
          () => d(e),
          [e]
        );
      }
    },
    547772: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("646240"),
        i = n("255228"),
        r = n("263024"),
        o = n("414833"),
        u = n("648564");
      function d(e) {
        let { channel: t, closePopout: n, onSelect: d, navId: c, label: f } = e,
          h = (0, s.default)(t, "Notifications Bell"),
          E = (0, i.default)(t),
          m = (0, o.useThreadNotificationSetting)(t);
        return (0, a.jsxs)(l.Menu, {
          navId: c,
          onClose: n,
          "aria-label": f,
          onSelect: d,
          children: [
            (0, a.jsxs)(l.MenuGroup, {
              children: [t.isForumPost() ? h : null, E],
            }),
            (0, a.jsx)(l.MenuGroup, {
              children: (0, u.getThreadNotificationOptions)().map(e => {
                let { setting: n, label: s } = e;
                return (0, a.jsx)(
                  l.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(n),
                    label: s,
                    action: () =>
                      r.default.setNotificationSettings(t, { flags: n }),
                    checked: n === m,
                  },
                  n
                );
              }),
            }),
          ],
        });
      }
    },
    236717: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("446674"),
        l = n("913144");
      let s = "UPDATE_NOT_AVAILABLE";
      function i(e) {
        s = e.type;
      }
      class r extends a.default.Store {
        getState() {
          return s;
        }
      }
      r.displayName = "AutoUpdateStore";
      var o = new r(l.default, {
        CHECKING_FOR_UPDATES: i,
        UPDATE_NOT_AVAILABLE: i,
        UPDATE_AVAILABLE: i,
        UPDATE_MANUALLY: i,
        UPDATE_ERROR: i,
        UPDATE_DOWNLOADED: i,
      });
    },
    712611: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("424973"),
        n("808653");
      var a = n("446674"),
        l = n("913144"),
        s = n("955513"),
        i = n("447909"),
        r = n("21121"),
        o = n("25292"),
        u = n("651879"),
        d = n("751520"),
        c = n("158998"),
        f = n("26989"),
        h = n("744983"),
        E = n("102985"),
        m = n("697218"),
        p = n("49111");
      let S = {},
        g = {};
      function N(e) {
        let {
            searchId: t,
            query: n,
            mode: a,
            tokens: l,
            cursorScope: s,
            autocompletes: r,
          } = e,
          o = g[t];
        return (
          null == o &&
            ((o = {
              results: [],
              context: i.default.getSearchContext(_.bind(null, t)),
            }),
            (g[t] = o)),
          {
            query: null != n ? n : "",
            mode:
              null != a
                ? a
                : {
                    type: p.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null,
                  },
            tokens: null != l ? l : [],
            cursorScope: null != s ? s : null,
            autocompletes: null != r ? r : [],
          }
        );
      }
      function _(e, t) {
        let { results: n } = t,
          a = g[e],
          l = S[e];
        if (null == a || null == l) return;
        let { type: s, filter: i } = l.mode;
        if (
          s === p.SearchPopoutModes.EMPTY ||
          (s === p.SearchPopoutModes.FILTER &&
            i !== p.SearchTokenTypes.FILTER_FROM &&
            i !== p.SearchTokenTypes.FILTER_MENTIONS)
        )
          return;
        let r = 3;
        l.mode.type === p.SearchPopoutModes.FILTER && (r = 10),
          (a.results = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10;
            return (
              (e = e.reduce((e, t) => {
                let n = m.default.getUser(t.id);
                return null == n
                  ? e
                  : (e.push({
                      id: n.id,
                      text: c.default.getUserTag(n),
                      user: n,
                    }),
                    e);
              }, [])).length > t && (e.length = t),
              e
            );
          })(n, r));
        let { query: o, mode: u, tokens: d, cursorScope: f } = l,
          { autocompletes: h } = l;
        (h = C(e, u)),
          (S[e] = N({
            searchId: e,
            query: o,
            mode: u,
            tokens: d,
            cursorScope: f,
            autocompletes: h,
          })),
          v.emitChange();
      }
      function T(e, t, n) {
        let a,
          l =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
        if (null == e || "" === e) return null;
        let i = h.default.getSearchType(n);
        if (
          i === p.SearchTypes.GUILD &&
          (e === p.SearchTokenTypes.FILTER_FROM ||
            e === p.SearchTokenTypes.FILTER_MENTIONS)
        ) {
          let e = g[n];
          null == e
            ? (a = null)
            : ((null == t || 0 === t.getFullMatch().trim().length) &&
                (e.results = o.default.getRecentlyTalked(n, 10).map(e => {
                  let { record: t } = e;
                  return { user: t, text: c.default.getUserTag(t) };
                })),
              (a = e.results));
        } else {
          var r;
          let i =
              null === (r = s.default[e]) || void 0 === r
                ? void 0
                : r.getAutocompletions,
            o = (null != t ? t.getFullMatch() : "").trim();
          a = null != i ? i(o, n, null != l ? l : 10) : [];
        }
        return null == a || 0 === a.length ? null : { group: e, results: a };
      }
      function I(e) {
        let t = (null != e ? e.getFullMatch() : "").trim(),
          n = (function () {
            let e = (0, r.isInMainTabsExperiment)() && !1;
            return {
              [p.SearchTokenTypes.FILTER_FROM]:
                !E.default.hidePersonalInformation,
              [p.SearchTokenTypes.FILTER_MENTIONS]:
                !E.default.hidePersonalInformation,
              [p.SearchTokenTypes.FILTER_HAS]: !0,
              [p.SearchTokenTypes.FILTER_BEFORE]: !0,
              [p.SearchTokenTypes.FILTER_AFTER]: !0,
              [p.SearchTokenTypes.FILTER_ON]: !0,
              [p.SearchTokenTypes.FILTER_IN]:
                h.default.getSearchType() === p.SearchTypes.GUILD,
              [p.SearchTokenTypes.FILTER_PINNED]: !e,
            };
          })(),
          a = (0, s.getFilterAutocompletions)(t).filter(e => n[e.token]);
        return { group: p.SearchAutocompleteGroups.SEARCH_OPTIONS, results: a };
      }
      function C(e, t) {
        let n = [];
        if (t.type === p.SearchPopoutModes.FILTER)
          n.push(T(t.filter, t.token, e, 10));
        else if (t.type === p.SearchPopoutModes.FILTER_ALL)
          n = (function (e, t) {
            let n = (null != e ? e.getFullMatch() : "").trim(),
              a = [];
            null != n &&
              "" !== n &&
              ((function (e) {
                let t = h.default.getSearchType(e),
                  n = [p.SearchTokenTypes.FILTER_HAS];
                return (
                  !E.default.hidePersonalInformation &&
                    (n.push(p.SearchTokenTypes.FILTER_FROM),
                    n.push(p.SearchTokenTypes.FILTER_MENTIONS)),
                  t === p.SearchTypes.GUILD &&
                    n.push(p.SearchTokenTypes.FILTER_IN),
                  n
                );
              })(t).forEach(n => {
                if (null == n) return;
                let l = T(n, e, t, 3);
                null != l && a.push(l);
              }),
              a.push(
                (function (e, t) {
                  let n = (null != e ? e.getFullMatch() : "").trim();
                  if (null != n && "" !== n) {
                    var a, l, i;
                    let e =
                        null ===
                          (a = s.default[p.SearchTokenTypes.FILTER_BEFORE]) ||
                        void 0 === a
                          ? void 0
                          : a.getAutocompletions(n, t, 1)[0],
                      r =
                        null ===
                          (l = s.default[p.SearchTokenTypes.FILTER_ON]) ||
                        void 0 === l
                          ? void 0
                          : l.getAutocompletions(n, t, 1)[0],
                      o =
                        null ===
                          (i = s.default[p.SearchTokenTypes.FILTER_AFTER]) ||
                        void 0 === i
                          ? void 0
                          : i.getAutocompletions(n, t, 1)[0];
                    return null == e
                      ? null
                      : {
                          group: p.SearchAutocompleteGroups.DATES,
                          results: [e, r, o],
                        };
                  }
                })(e, t)
              ));
            let l = (0, d.getTotalResults)(a);
            return l < 5 && a.push(I(e)), a;
          })(t.token, e);
        else if (t.type === p.SearchPopoutModes.EMPTY) {
          n.push(I(t.token));
          let a = (0, r.isInMainTabsExperiment)() && !1;
          !a &&
            n.push(
              (function (e) {
                if (E.default.hidePersonalInformation) return null;
                let t = h.default.getHistory(e);
                return null == t
                  ? null
                  : {
                      group: p.SearchAutocompleteGroups.HISTORY,
                      results: t.map(e => ({ text: e })),
                    };
              })(e)
            );
        }
        return n;
      }
      function A() {
        (0, d.clearTokenCache)();
      }
      function M(e) {
        let t = S[e];
        if (null == t) return;
        let {
          query: n,
          mode: a,
          tokens: l,
          cursorScope: s,
          autocompletes: i,
        } = t;
        S[e] = N({
          searchId: e,
          query: n,
          mode: a,
          tokens: l,
          cursorScope: s,
          autocompletes: i.map(e =>
            (null == e ? void 0 : e.group) ===
            p.SearchAutocompleteGroups.HISTORY
              ? null
              : e
          ),
        });
      }
      function x() {
        let e = h.default.getCurrentSearchId();
        if (null == e || null == S[e]) return;
        let { query: t, mode: n, tokens: a, cursorScope: l } = S[e];
        S[e] = N({
          searchId: e,
          query: t,
          mode: n,
          tokens: a,
          cursorScope: l,
          autocompletes: C(e, n),
        });
      }
      class R extends a.default.Store {
        initialize() {
          this.waitFor(f.default, E.default);
        }
        getState(e) {
          var t;
          return null !== (t = S[e]) && void 0 !== t ? t : N({ searchId: e });
        }
      }
      R.displayName = "SearchAutocompleteStore";
      let v = new R(l.default, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
          var t;
          let n,
            { searchId: a, tokens: l, cursorScope: s } = e,
            i = (0, d.getQueryFromTokens)(l),
            r = (0, d.getAutocompleteMode)(s, l),
            o = null !== (t = S[a]) && void 0 !== t ? t : {},
            c = g[a],
            f = !0;
          if (i === o.query && (null == o.mode || o.mode.filter === r.filter))
            (n = o.autocompletes), (f = !1);
          else if (
            r.type === p.SearchPopoutModes.EMPTY ||
            (r.type === p.SearchPopoutModes.FILTER &&
              r.filter !== p.SearchTokenTypes.FILTER_FROM &&
              r.filter !== p.SearchTokenTypes.FILTER_MENTIONS)
          )
            null != c && (c.context.clearQuery(), (c.results = [])),
              (n = C(a, r));
          else if (null != c) {
            let { token: e } = r;
            null != e && e.getFullMatch().trim().length > 0
              ? (u.default.requestMembers(a, e.getFullMatch().trim(), 10),
                c.context.setQuery(e.getFullMatch().trim(), { guild: a }),
                (n = o.autocompletes),
                (f = !1))
              : (c.context.clearQuery(), (n = C(a, r)));
          }
          return (
            (S[a] = N({
              searchId: a,
              query: i,
              mode: r,
              tokens: l,
              cursorScope: s,
              autocompletes: n,
            })),
            f
          );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
          let { searchId: t } = e,
            n = g[t];
          null != n && (n.context.destroy(), (n.results = []), delete g[t]),
            delete S[t];
        },
        CHANNEL_CREATE: A,
        CHANNEL_DELETE: A,
        STREAMER_MODE_UPDATE: x,
        SEARCH_MODAL_OPEN: x,
        SEARCH_SCREEN_OPEN: x,
        SEARCH_CLEAR_HISTORY: function (e) {
          let { searchId: t } = e;
          null != t ? M(t) : Object.keys(S).forEach(M);
        },
        LOGOUT: function () {
          Object.keys(S).forEach(M);
        },
      });
      var L = v;
    },
    220677: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("80022"),
        r = e => {
          let { value: t = 0, text: n, className: l, ...r } = e;
          return null != n
            ? (0, a.jsx)("div", {
                className: s(i.wrapper, l),
                ...r,
                children: n,
              })
            : t > 0
              ? (0, a.jsx)("div", {
                  className: s(i.wrapper, l),
                  ...r,
                  children: t,
                })
              : null;
        };
    },
    822332: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("782340"),
        u = n("1700");
      let d = { BLOCK: u.block, INLINE: u.inline };
      class c extends l.PureComponent {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: l = d.BLOCK,
            style: s,
          } = this.props;
          return (0, a.jsxs)("div", {
            className: i(t, l),
            style: s,
            children: [
              (0, a.jsxs)(r.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: u.pro,
                children: [o.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"],
              }),
              (0, a.jsx)(r.Text, {
                className: i(u.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      c.Types = d;
      var f = c;
    },
    471654: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("904575"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: l = "currentColor",
              ...s
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsxs)("g", {
                  clipPath: "url(#clip0)",
                  children: [
                    (0, a.jsx)("path", {
                      d: "M17.5053 1.76605C17.5053 1.76605 26.7154 8.05195 23.2155 16.8783C19.7157 25.7047 12.7544 23.2563 15.3562 20.6775C17.9581 18.0986 12.2862 16.3487 8.65588 13.0024L17.4976 1.76605",
                      fill: l,
                      fillOpacity: "0.6",
                    }),
                    (0, a.jsx)("path", {
                      d: "M16.945 10.4082C15.0032 12.8796 12.2632 14.1153 10.1449 13.6701L2.75381 23.0875C2.62942 23.2463 2.47493 23.3791 2.29918 23.4782C2.12343 23.5774 1.92987 23.6408 1.72956 23.6651C1.52925 23.6893 1.32613 23.6738 1.13181 23.6195C0.937493 23.5652 0.755794 23.473 0.597107 23.3484C0.436561 23.2245 0.302154 23.0701 0.201652 22.8939C0.101149 22.7178 0.0365434 22.5235 0.011566 22.3222C-0.0134115 22.121 0.00173486 21.9168 0.0561299 21.7214C0.110525 21.5261 0.203091 21.3434 0.328479 21.184L7.68121 11.7821C6.70648 9.83259 7.24373 6.84698 9.21623 4.35258C11.6646 1.25185 15.3563 0.0929071 17.4977 1.76608C19.639 3.43925 19.378 7.30749 16.945 10.4082Z",
                      fill: l,
                    }),
                  ],
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsx)("clipPath", {
                    id: "clip0",
                    children: (0, a.jsx)("rect", {
                      width: t,
                      height: n,
                      fill: l,
                    }),
                  }),
                }),
              ],
            });
          },
          s.BugIcon,
          void 0,
          { size: 32 }
        );
    },
    11539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("54549"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              children: (0, a.jsx)("path", {
                d: "M12 4.66668L11.06 3.72668L6.83332 7.95335L7.77332 8.89335L12 4.66668ZM14.8266 3.72668L7.77332 10.78L4.98665 8.00002L4.04665 8.94002L7.77332 12.6667L15.7733 4.66668L14.8266 3.72668ZM0.273315 8.94002L3.99998 12.6667L4.93998 11.7267L1.21998 8.00002L0.273315 8.94002Z",
                fill: l,
                className: s,
              }),
            });
          },
          s.DoubleCheckmarkLargeIcon,
          void 0,
          { size: 16 }
        );
    },
    733350: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("691096"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: s,
              background: r,
              ...o
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13 0C16.5198 0 19.4422 2.61306 19.9288 6.00063C19.9525 6.00021 19.9762 6 20 6C22.2091 6 24 7.79086 24 10C24 10.7708 23.782 11.4907 23.4043 12.1013C21.9807 10.7964 20.0834 10 18 10C15.0389 10 12.4535 11.6088 11.0703 14H5C2.243 14 0 11.757 0 9C0 6.243 2.243 4 5 4C6.393 4 7.678 4.454 9.175 6.58L9.992 6.004C9.018 4.62 7.987 3.815 7.022 3.357C8.26 1.31 10.49 0 13 0Z",
                }),
                (0, a.jsx)("path", {
                  className: s,
                  fill: l,
                  d: "M21.293 17.292L19 19.585V13.999H17V19.585L14.707 17.292L13.293 18.706L18 23.413L22.707 18.706L21.293 17.292Z",
                }),
              ],
            });
          },
          s.DownloadIcon,
          void 0,
          { size: 24 }
        );
    },
    496657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("400033"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 22 23",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: s,
                    fill: l,
                    d: "M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z",
                  }),
                  (0, a.jsx)("path", {
                    className: s,
                    fill: l,
                    d: "M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z",
                  }),
                  (0, a.jsx)("polygon", {
                    className: s,
                    fill: l,
                    points:
                      "17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525",
                  }),
                ],
              }),
            });
          },
          s.StaffBadgeIcon,
          void 0,
          { size: 16 }
        );
    },
    834179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("763377"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: s,
                fill: l,
                d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z",
              }),
            });
          },
          s.CircleQuestionIcon,
          void 0,
          { size: 24 }
        );
    },
    826267: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("342072"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, a.jsx)("path", {
                d: "M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z",
                fill: l,
                className: s,
              }),
            });
          },
          s.InboxIcon,
          void 0,
          { size: 24 }
        );
    },
    672571: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("440275"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: (0, a.jsx)("path", {
                className: s,
                fill: l,
                d: "M6.11111111,3.88888889 L6.11111111,0.833333333 L9.16666667,3.88888889 L6.11111111,3.88888889 Z M1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,3.33333333 L6.66666667,0 L1.11111111,0 Z",
                transform: "translate(3 3)",
              }),
            });
          },
          s.FileIcon,
          void 0,
          { size: 16 }
        );
    },
    689476: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("424823"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: n = 18,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              children: (0, a.jsx)("polygon", {
                fillRule: "nonzero",
                className: s,
                fill: l,
                points:
                  "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 18 }
        );
    },
    868308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          quitAndInstall: function () {
            return s;
          },
        });
      var a = n("976789");
      let l = new a.default();
      function s() {
        l.quitAndInstall();
      }
    },
    313483: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          generateDecorators: function () {
            return r;
          },
          getSelectionScope: function () {
            return o;
          },
        }),
        n("424973");
      var a = n("954172");
      n("76385");
      var l = n("955513");
      n("202752");
      var s = n("751520");
      n("49111");
      let i = {
        [l.ComponentTypes.FILTER]: a.Filter,
        [l.ComponentTypes.ANSWER]: a.Answer,
      };
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = [];
        return (
          Object.keys(e).forEach(n => {
            let a = e[n];
            t.push({
              strategy: (e, t, a) =>
                (function (e, t, n, a) {
                  t.findEntityRanges(t => {
                    let n = t.getEntity();
                    return null !== n && e.getEntity(n).getType() === a;
                  }, n);
                })(a, e, t, n),
              component: i[a.componentType],
            });
          }),
          t
        );
      }
      function o(e, t) {
        let { focusOffset: n, anchorOffset: a } = t.getSelection();
        return (0, s.getSelectionScope)(e, n, a);
      }
    },
    512861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BugIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M9.54 3.28a3 3 0 0 0-.37.74c-.19.52.28.98.83.98h4c.55 0 1.02-.46.83-.98a2.96 2.96 0 0 0-.37-.74c.23-.16.56-.28.99-.28a1 1 0 1 0 0-2c-1 0-2.01.4-2.68 1.1a3 3 0 0 0-1.54 0A3.76 3.76 0 0 0 8.55 1a1 1 0 0 0 0 2c.43 0 .76.12 1 .28ZM18.01 18.85c-.04.1-.03.22.05.3l1.51 1.5a1 1 0 0 1-1.41 1.42l-1.18-1.18a.26.26 0 0 0-.37 0 6.7 6.7 0 0 1-2.8 1.82c-.42.14-.83-.2-.86-.64l-.42-8.57a.53.53 0 0 0-1.05 0l-.43 8.57c-.03.45-.44.78-.87.64A6.7 6.7 0 0 1 7.4 20.9a.26.26 0 0 0-.37-.01l-1.18 1.18a1 1 0 0 1-1.41-1.41l1.51-1.51c.08-.08.1-.2.05-.3-.47-.94-.78-2-.92-3.12a.25.25 0 0 0-.25-.23H3a1 1 0 1 1 0-2h1.82c.13 0 .24-.1.25-.23.14-1.13.45-2.18.92-3.12a.25.25 0 0 0-.05-.3l-1.51-1.5a1 1 0 1 1 1.41-1.42L7.02 8.1c.1.1.27.1.37 0a6.66 6.66 0 0 1 2.95-1.87c.38-.11.75.14.85.52l.57 2.27c.06.25.42.25.48 0l.57-2.27c.1-.38.47-.63.85-.52 1.1.33 2.11.98 2.95 1.86.1.1.26.11.37.01l1.18-1.18a1 1 0 1 1 1.41 1.41l-1.51 1.51c-.08.08-.1.2-.05.3.47.94.78 2 .92 3.12.01.13.12.23.25.23H21a1 1 0 1 1 0 2h-1.82c-.13 0-.24.1-.25.23a9.68 9.68 0 0 1-.92 3.12Z",
            className: r,
          }),
        });
      };
    },
    93510: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleQuestionIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: i = "transparent",
          secondaryColorClass: r = "",
          color: o = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...d
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    922934: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DoubleCheckmarkLargeIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M16.7 8.7a1 1 0 0 0-1.4-1.4l-3.26 3.24a1 1 0 0 0 1.42 1.42L16.7 8.7ZM3.7 11.3a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4-1.4l-4.5-4.5Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21.7 9.7a1 1 0 0 0-1.4-1.4L13 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8Z",
              className: r,
            }),
          ],
        });
      };
    },
    440224: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FileIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5V18a4 4 0 0 1-4 4Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21.7 7.94c.01.03 0 .06-.04.06H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Z",
              className: r,
            }),
          ],
        });
      };
    },
    471206: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InboxIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=b86f5aebfd0e488140ad.js.map

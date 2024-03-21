(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94548"],
  {
    966760: function (e, t, a) {
      a("70102");
      e.exports = function (e, t, a) {
        if ("function" != typeof e) throw TypeError("Expected a function");
        return setTimeout(function () {
          e.apply(void 0, a);
        }, t);
      };
    },
    474820: function (e, t, a) {
      var s = a("966760"),
        n = a("616601")(function (e, t) {
          return s(e, 1, t);
        });
      e.exports = n;
    },
    714358: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e7c5287d6706ac82b14b.svg";
    },
    112545: function (e, t, a) {
      "use strict";
      e.exports = a.p + "91a0948fc3f2fcdae60b.png";
    },
    600310: function (e, t, a) {
      "use strict";
      e.exports = a.p + "20e943e83204fab6ff33.png";
    },
    129185: function (e, t, a) {
      "use strict";
      e.exports = a.p + "124659e036ed41dd2134.png";
    },
    338283: function (e, t, a) {
      "use strict";
      e.exports = a.p + "fa7ba1d8e3edcce69332.png";
    },
    62e4: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a("192779");
      a.es(s, t);
    },
    740483: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("16470"),
        o = a("538282"),
        u = a("882641"),
        d = a("13030"),
        c = a("350583"),
        m = n.memo(
          n.forwardRef(function (e, t) {
            let { disabled: a, type: l, className: m, onClick: h } = e,
              [f, g] = (0, o.useExpressionPickerStore)(
                e => [e.activeView, e.activeViewType],
                i.default
              ),
              x = n.useCallback(() => {
                (0, o.toggleMultiExpressionPicker)(l), null == h || h();
              }, [l, h]);
            return a
              ? null
              : (0, s.jsx)("div", {
                  className: r(
                    d.CHAT_INPUT_BUTTON_CLASSNAME,
                    c.buttonContainer
                  ),
                  ref: t,
                  children: (0, s.jsx)(u.default, {
                    className: r(c.emojiButton, m),
                    onClick: x,
                    active:
                      (f === d.ExpressionPickerViewType.GIF ||
                        f === d.ExpressionPickerViewType.EMOJI ||
                        f === d.ExpressionPickerViewType.STICKER) &&
                      g === l,
                    tabIndex: 0,
                    focusProps: {
                      offset: { top: 4, bottom: 4, left: -4, right: -4 },
                    },
                  }),
                });
          })
        );
    },
    119161: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          makeEmptyTitleError: function () {
            return u;
          },
          makeEmptyMessageError: function () {
            return d;
          },
          makeAutomodViolationError: function () {
            return c;
          },
          renderError: function () {
            return m;
          },
        });
      var s,
        n,
        l = a("600798"),
        r = a("782340");
      function i(e, t) {
        return { type: e, message: null != t ? t : null };
      }
      function o(e) {
        return i(0, e);
      }
      function u() {
        return i(0, r.default.Messages.FORUM_POST_EMPTY_TITLE_ERROR);
      }
      function d() {
        return i(0, r.default.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR);
      }
      function c(e, t) {
        return i(
          1,
          (0, l.getAutomodErrorMessageFromErrorResponse)(
            e,
            null == t ? void 0 : t.id
          )
        );
      }
      function m(e, t) {
        var a;
        return null == e ||
          (0 === e.type && null != t.content && t.content.trim().length > 0) ||
          (2 === e.type && null != t.tags && t.tags.length > 0)
          ? null
          : null !== (a = e.message) && void 0 !== a
            ? a
            : null;
      }
      ((s = n || (n = {}))[(s.EmptyContent = 0)] = "EmptyContent"),
        (s[(s.AutomodViolation = 1)] = "AutomodViolation"),
        (s[(s.EmptyTags = 2)] = "EmptyTags");
    },
    713955: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getAllRolesRows: function () {
            return i;
          },
          getAllExistingRolesWithPermission: function () {
            return o;
          },
        });
      var s = a("316693"),
        n = a("454273"),
        l = a("991170");
      let r = (e, t, a) => {
        if (null == e.id) return !1;
        let n = l.computePermissionsForRoles({
          forceRoles: { [e.id]: e },
          context: a,
        });
        return s.has(n, t);
      };
      function i(e, t) {
        return Object.values(t)
          .sort(n.sortRoles)
          .map(e => (0, n.getRoleRowData)(e));
      }
      function o(e, t, a, s) {
        return Object.values(t).filter(e => (0, n.isAdmin)(e) || r(e, s, a));
      }
    },
    706065: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        }),
        a("222007");
      var s = a("95410"),
        n = a("689988");
      let l = "formGuidelinesStorageKey";
      class r extends n.default {
        _initialize() {
          let e = s.default.get(l);
          null != e && (this.seenForumGuidelines = new Set(e));
        }
        _terminate() {
          s.default.set(l, this.seenForumGuidelines);
        }
        markAsSeen(e) {
          this.seenForumGuidelines.add(e),
            s.default.set(l, this.seenForumGuidelines);
        }
        hasSeen(e) {
          return this.seenForumGuidelines.has(e);
        }
        constructor(...e) {
          super(...e), (this.seenForumGuidelines = new Set());
        }
      }
      var i = new r();
    },
    146290: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("884691"),
        n = a("471671"),
        l = a("816454"),
        r = a("250850"),
        i = {
          useForumChannelSeenManager: function (e) {
            let { guildId: t, channelId: a } = e,
              i = s.useRef(null),
              o = (0, l.getMainWindowId)(),
              u = !n.default.isFocused(o);
            return (
              s.useLayoutEffect(
                () => (
                  null == i.current &&
                    ((i.current = new r.default({
                      guildId: t,
                      channelId: a,
                      isPaused: u,
                      windowId: o,
                    })),
                    i.current.initialize()),
                  () => {
                    var e;
                    null === (e = i.current) || void 0 === e || e.terminate(),
                      (i.current = null);
                  }
                ),
                [a, t, u, o]
              ),
              i.current
            );
          },
        };
    },
    763245: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useIsForumPostPreviewEnabled: function () {
            return l;
          },
        });
      var s = a("862205");
      let n = (0, s.createExperiment)({
        kind: "user",
        id: "2023-10_forum_post_preview",
        label: "Enable preview of Forum post content before creation",
        defaultConfig: { isEnabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { isEnabled: !0 } }],
      });
      function l() {
        let { isEnabled: e } = n.useExperiment(
          { location: "forum_post_1" },
          { autoTrackExposure: !0 }
        );
        return e;
      }
    },
    43836: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useIsRecentMessageDeleted: function () {
            return l;
          },
        });
      var s = a("446674"),
        n = a("324261");
      function l(e) {
        var t;
        let { loaded: a, message: l } = (0, s.useStateFromStores)(
          [n.default],
          () => n.default.getMessageState(e.id)
        );
        return (
          a &&
          (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 &&
          null == l
        );
      }
    },
    532308: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("448105"),
        l = a.n(n),
        r = a("446674"),
        i = a("77078"),
        o = a("430568"),
        u = a("385976"),
        d = a("547896"),
        c = a("680986"),
        m = a("782340"),
        h = a("282078");
      let f = e => {
        let { tag: t } = e,
          { id: a, name: n, emojiId: l, emojiName: c } = t,
          m = (0, r.useStateFromStores)([u.default], () =>
            null != l ? u.default.getUsableCustomEmojiById(l) : null
          ),
          f = null != l || null != c;
        return (0, s.jsx)(
          i.ComboboxItem,
          {
            value: a,
            children: (0, s.jsx)(i.ComboboxItem.Label, {
              children: (0, s.jsxs)("div", {
                className: h.row,
                children: [
                  f
                    ? (0, s.jsx)(o.default, {
                        className: h.emoji,
                        emojiId: l,
                        emojiName: c,
                        animated: !!(null == m ? void 0 : m.animated),
                      })
                    : (0, s.jsx)(d.default, { className: h.emoji }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    color: "header-secondary",
                    children: n,
                  }),
                ],
              }),
            }),
          },
          a
        );
      };
      function g(e) {
        let {
            parentChannel: t,
            appliedTags: a,
            maxTagsApplied: n,
            onSelectTag: r,
            onClose: o,
          } = e,
          u = (0, c.useVisibleForumTags)(t),
          d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
        return (0, s.jsx)(i.ComboboxPopout, {
          showScrollbar: !0,
          value: a,
          onChange: e => {
            (!n || a.has(e)) && (r(e), o());
          },
          placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
          "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
          children: e => d(e, u).map(e => (0, s.jsx)(f, { tag: e }, e.id)),
        });
      }
    },
    479273: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ex;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("474820"),
        o = a.n(i),
        u = a("16470"),
        d = a("974667"),
        c = a("942367"),
        m = a("482402"),
        h = a("446674"),
        f = a("151426"),
        g = a("77078"),
        x = a("264732"),
        C = a("731898"),
        S = a("206230"),
        _ = a("679653"),
        T = a("384997"),
        p = a("406043"),
        E = a("87635"),
        N = a("396856"),
        M = a("549077"),
        v = a("144491"),
        A = a("689275"),
        I = a("134947"),
        j = a("300322"),
        R = a("967241"),
        O = a("982108"),
        F = a("42203"),
        b = a("474643"),
        L = a("88093"),
        P = a("585722"),
        y = a("471671"),
        D = a("837899"),
        U = a("425190"),
        w = a("891152"),
        k = a("423487"),
        H = a("378765"),
        B = a("526812"),
        G = a("404607"),
        V = a("670902"),
        z = a("339792"),
        W = a("680986"),
        K = a("146290"),
        Y = a("250850"),
        X = a("867965"),
        Z = a("688169"),
        q = a("131600"),
        Q = a("912066"),
        J = a("657927"),
        $ = a("152637"),
        ee = a("578198"),
        et = a("530474"),
        ea = a("592633"),
        es = a("968462"),
        en = a("823968"),
        el = a("90625"),
        er = a("363622"),
        ei = a("193695"),
        eo = a("552683"),
        eu = a("589455"),
        ed = a("485055"),
        ec = a("219840"),
        em = a("49111"),
        eh = a("648564"),
        ef = a("782340"),
        eg = a("156464");
      function ex(e) {
        let { channel: t, guild: a, sidebarState: n } = e;
        return (0, s.jsx)(
          ee.ForumPostComposerStoreProvider,
          {
            createStore: () => (0, ee.createForumPostComposerStore)(t),
            children: (0, s.jsx)(eM, { channel: t, guild: a, sidebarState: n }),
          },
          t.id
        );
      }
      let eC = new er.GridLayout({ minWidth: 320, maxWidth: 450, gap: 16 });
      function eS(e) {
        return "forum-grid-header-section-".concat(e);
      }
      let e_ = (e, t, a) => (0 === e ? 0 : (0, er.getGridPostHeight)(a));
      function eT(e) {
        let { itemRole: t, coords: a, section: n } = e;
        return (0, s.jsx)(
          "div",
          {
            className: r(eg.card, eg.archivedDividerRow, eg.columnsSpan),
            style: a,
            "data-item-role": t,
            children: (0, s.jsx)("div", {
              className: eg.emptyMainCard,
              children: (0, s.jsx)(g.Heading, {
                variant: "eyebrow",
                className: eg.archivedDivider,
                id: eS(n),
                children: ef.default.Messages.FORUM_SECTION_ARCHIVED,
              }),
            }),
          },
          "section-divider"
        );
      }
      function ep(e) {
        let {
          section: t,
          coords: a,
          key: n,
          isShowingSearchResult: l,
          hasActiveThreads: r,
        } = e;
        return () =>
          2 === t && !l && r
            ? (0, s.jsx)(
                eT,
                {
                  section: t,
                  coords: null == a ? void 0 : { ...a, position: "absolute" },
                  itemRole: "section",
                },
                n
              )
            : null;
      }
      function eE(e, t) {
        return "card-".concat(e, "-").concat(t);
      }
      function eN(e) {
        if ("string" == typeof e) {
          let t = e.match(/card-{\d+}-({\d+})$/);
          return null == t ? null : t[1];
        }
        return null;
      }
      function eM(e) {
        let { channel: t, sidebarState: a } = e,
          {
            editorHeight: l,
            editorAdditionRowHeight: i,
            listViewCardHeights: o,
            formOpen: c,
          } = (0, ee.useForumPostComposerStore)(e => {
            let {
              editorHeight: t,
              editorAdditionRowHeight: a,
              listViewCardHeights: s,
              formOpen: n,
              cardHeightVersion: l,
            } = e;
            return {
              editorHeight: t,
              editorAdditionRowHeight: a,
              listViewCardHeights: s,
              formOpen: n,
              cardHeightVersion: l,
            };
          }, u.default),
          {
            activeThreadIds: f,
            archivedThreadIds: C,
            searchResults: _,
            canLoadMore: T,
            loadMore: p,
            activeThreadsLoading: E,
            archivedThreadsLoading: j,
            loading: L,
            isSearchLoading: P,
            layoutType: y,
          } = (function (e) {
            let {
                sortOrder: t,
                tagFilter: a,
                layoutType: s,
              } = (0, z.useForumChannelStore)(e.id),
              n = (0, W.useForumActiveThreadIds)({
                channel: e,
                sortOrder: t,
                tagFilter: a,
                shouldAutomaticallyAck: !0,
              }),
              l = (0, h.useStateFromStores)(
                [A.default],
                () => !A.default.hasLoaded(e.guild_id)
              ),
              {
                threadIds: r,
                canLoadMore: i,
                loadMore: o,
                loading: u,
              } = (0, I.useArchivedThreads)(e, t, a),
              { searchResults: d, isSearchLoading: c } = (0,
              W.useForumSearchState)({ channelId: e.id });
            return (
              (0, W.useLoadForumUnreadCounts)(e, t, a),
              {
                activeThreadIds: n,
                archivedThreadIds: r,
                searchResults: d,
                canLoadMore: i,
                loadMore: o,
                loading: l || u || c,
                archivedThreadsLoading: u,
                activeThreadsLoading: l,
                isSearchLoading: c,
                layoutType: s,
              }
            );
          })(t),
          D = f.length > 0,
          U = D || C.length > 0,
          w = (0, N.default)(t),
          { tagFilter: k } = (0, z.useForumChannelStore)(t.id);
        (0, W.useAutomaticForumSearch)(t, k, c);
        let H = (0, W.useCanSearchForumPosts)(t),
          V = (0, W.useCanViewArchivedPosts)(t),
          Q = n.useRef(null),
          { observePostVisibilityAnalytics: J } = (function (e) {
            let { guildId: t, channelId: a, scrollerRef: s } = e;
            K.default.useForumChannelSeenManager({ guildId: t, channelId: a });
            let l = n.useRef(null),
              r = n.useCallback((e, t) => {
                for (let a of t) {
                  let t = a.target.dataset.itemId;
                  if (null == t) return;
                  let s = Date.now();
                  a.intersectionRatio >= 0.5
                    ? (0, Y.markForumPostItemAsSeen)(e, t, s)
                    : (0, Y.markForumPostItemAsUnseen)(e, t, s);
                }
              }, []);
            n.useEffect(() => {
              var e;
              let t =
                null === (e = s.current) || void 0 === e
                  ? void 0
                  : e.getScrollerNode();
              if (null != t)
                return (
                  (l.current = new IntersectionObserver(e => r(a, e), {
                    root: t,
                    rootMargin: "0px 100000px 0px 100000px",
                    threshold: 0.5,
                  })),
                  () => {
                    var e;
                    null === (e = l.current) || void 0 === e || e.disconnect(),
                      (l.current = null);
                  }
                );
            }, [a, r, s]);
            let i = n.useCallback(
              (e, t) => {
                var s;
                if (null == e) {
                  (0, Y.markForumPostItemAsUnseen)(a, t, Date.now());
                  return;
                }
                null === (s = l.current) || void 0 === s || s.observe(e);
              },
              [a]
            );
            return { observePostVisibilityAnalytics: i };
          })({ scrollerRef: Q, channelId: t.id, guildId: t.guild_id }),
          et = y === m.ForumLayout.GRID,
          en = null != _,
          el = n.useRef(null),
          { containerRef: eo, containerWidth: ex } = (0, eu.default)();
        n.useEffect(
          () => () => {
            null != t.id && G.default.clearForumSearch(t.id);
          },
          [t.id]
        );
        let { columns: eT } = n.useMemo(
            () =>
              et ? eC.getRenderOptions(ex) : er.ForumListLayoutRenderOptions,
            [et, ex]
          ),
          eM = n.useMemo(
            () => (L ? Math.round((window.innerHeight - 200) / 118) : 0),
            [L]
          ),
          ej = n.useMemo(() => {
            let e = window.innerHeight,
              t =
                Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
            return E ? t : 0;
          }, [ex, eT, E]),
          eO = n.useMemo(() => {
            let e = window.innerHeight,
              t =
                Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
            return j ? t : 0;
          }, [ex, eT, j]),
          eF = n.useMemo(() => {
            let e = window.innerHeight,
              t =
                Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
            return P && en ? t : 0;
          }, [ex, eT, P, en]),
          eb = n.useMemo(() => {
            if (et) {
              if (!H && en) return [1, 0];
              if (!V) return [1, f.length + ej, 0];
              else if (en) return [1, _.length + eF, 0];
              else return [1, f.length + ej, C.length + eO];
            }
            if (!H && en) return [1, 1];
            if (!V) return [1, f.length, 1];
            else if (en) return [1, _.length, 0, eM];
            else return [1, f.length, C.length, eM];
          }, [et, en, f.length, C.length, H, V, eM, _, ej, eO, eF]),
          eL = n.useMemo(() => {
            if (!H && en) return [[], []];
            if (!V) return [[], f, []];
            if (en) return [[], _, [], []];
            else return [[], f, C, []];
          }, [en, H, V, _, f, C]),
          eP = n.useCallback(
            (e, a) => {
              (0, X.trackForumPostClicked)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: e.id,
                location: {
                  page: em.AnalyticsPages.GUILD_CHANNEL,
                  section: em.AnalyticsSections.FORUM_CHANNEL_POST,
                },
              }),
                a
                  ? (0, v.transitionToThread)(
                      e,
                      eh.OpenThreadAnalyticsLocations.BROWSER
                    )
                  : ((el.current = e.id),
                    (0, R.openThreadSidebarForViewing)(e));
            },
            [t.guild_id, t.id, el]
          ),
          [ey, eD] = n.useState(l + i - 24),
          eU = n.useCallback(
            (e, a, n) =>
              0 === e
                ? (0, s.jsx)(
                    eR,
                    {
                      channel: t,
                      isEmpty: !D,
                      isSearchLoading: P,
                      numResults: null == _ ? void 0 : _.length,
                      coords: a,
                      onHeightChange: eD,
                      children:
                        !L &&
                        (0, s.jsx)(
                          q.default,
                          { channel: t, hasAnyThread: U },
                          t.id
                        ),
                    },
                    "forum-channel-header"
                  )
                : 2 !== e || V
                  ? 1 === e && en && !H
                    ? (0, s.jsx)(
                        eA,
                        { channel: t, coords: a },
                        "archive-or-search-result"
                      )
                    : n()
                  : (0, s.jsx)(
                      ev,
                      { channel: t, coords: a },
                      "archived-missing-reading-history-perm"
                    ),
            [en, V, _, H, t, D, P, L, U]
          ),
          ew = (0, h.useStateFromStores)([B.default], () =>
            B.default.hasHidden(t.id)
          );
        n.useEffect(() => {
          var e, t;
          let a = et ? eW : Q,
            s =
              null === (e = a.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
          null != s &&
            !ew &&
            s.scrollTop > l &&
            (null === (t = a.current) || void 0 === t || t.scrollTo({ to: 0 }));
        }, [ew]);
        let ek = (0, Z.useForumActivityExperiment)(t.guild_id),
          {
            updateListScrollerRef: eH,
            renderListSection: eB,
            renderListItem: eG,
            getListSectionHeight: eV,
            getListItemHeight: ez,
          } = (function (e) {
            let {
                listRef: t,
                isIncreasedActivityView: a,
                hasActiveThreads: l,
                threadIdsBySection: i,
                listViewCardHeights: o,
                editorHeight: u,
                editorAdditionRowHeight: d,
                renderSectionOrItem: c,
                goToThread: m,
                observePostVisibilityAnalytics: h,
                isShowingSearchResult: f,
              } = e,
              x = n.useCallback(
                e => a => {
                  var s;
                  (t.current = a),
                    (e.current =
                      null !== (s = null == a ? void 0 : a.getScrollerNode()) &&
                      void 0 !== s
                        ? s
                        : null);
                },
                [t]
              ),
              C = n.useCallback(
                e =>
                  ep({
                    section: e.section,
                    isShowingSearchResult: f,
                    hasActiveThreads: l,
                  })(),
                [l, f]
              ),
              S = n.useCallback(
                e =>
                  c(e.section, void 0, () => {
                    if (3 === e.section)
                      return __OVERLAY__
                        ? null
                        : a
                          ? (0, s.jsx)("div", {
                              className: eg.placeholder,
                              children: (0, s.jsx)(es.default, {}),
                            })
                          : (0, s.jsx)(
                              "div",
                              {
                                "data-item-role": "item",
                                className: r(
                                  eg.loadingCard,
                                  eg["loadingCard-".concat(e.row % 3)],
                                  { [eg.loadingCardWithIncreasedActivity]: a }
                                ),
                              },
                              "loading-".concat(e.row)
                            );
                    let t = i[e.section][e.row];
                    return (0, s.jsx)(
                      "li",
                      {
                        className: eg.card,
                        "data-item-role": "item",
                        children: (0, s.jsx)(g.HeadingLevel, {
                          children: a
                            ? (0, s.jsx)(ei.default, {
                                className: eg.increasedActivityMainCard,
                                threadId: t,
                                goToThread: m,
                                observePostVisibilityAnalytics: h,
                              })
                            : (0, s.jsx)($.default, {
                                className: eg.mainCard,
                                threadId: t,
                                goToThread: m,
                                observePostVisibilityAnalytics: h,
                              }),
                        }),
                      },
                      "".concat(e.section, "-").concat(t)
                    );
                  }),
                [a, c, i, m, h]
              ),
              _ = n.useCallback(
                (e, t) => {
                  if (0 === e) return u + d;
                  let s = i[e][t],
                    n = o[s],
                    l =
                      (a
                        ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT
                        : 96) + 8;
                  return null == n ? l : n + 8;
                },
                [i, o, u, d, a]
              ),
              T = n.useCallback(e => (2 === e && l ? 40 : 0), [l]);
            return {
              updateListScrollerRef: x,
              renderListSection: C,
              renderListItem: S,
              getListSectionHeight: T,
              getListItemHeight: _,
            };
          })({
            listRef: Q,
            hasActiveThreads: D,
            threadIdsBySection: eL,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: i,
            renderSectionOrItem: eU,
            goToThread: eP,
            observePostVisibilityAnalytics: J,
            isShowingSearchResult: en,
            isIncreasedActivityView: ek,
          }),
          eW = n.useRef(null),
          {
            updateMasonryListScrollerRef: eK,
            getItemKey: eY,
            renderGridSection: eX,
            renderGridItem: eZ,
            getGridSectionHeight: eq,
            getSectionProps: eQ,
            handleGridFocus: eJ,
          } = (function (e) {
            let {
                masonryListScrollerRef: t,
                threadIdsBySection: a,
                goToThread: l,
                renderSectionOrItem: i,
                hasActiveThreads: o,
                isShowingSearchResult: u,
                canSearchForumPosts: d,
                canViewArchivedPosts: c,
                observePostVisibilityAnalytics: m,
                focusedThreadId: h,
                headerHeight: f,
              } = e,
              g = n.useRef(null),
              x = n.useCallback(
                e => {
                  (t.current = e),
                    (g.current = null == e ? void 0 : e.getScrollerNode());
                },
                [t]
              ),
              C = n.useCallback(
                (e, a) => {
                  let { current: s } = t;
                  if (null == s) return;
                  let n = document.querySelector(e);
                  if (null == n) return;
                  let l = s.getCoordsMap()[a],
                    r = null != l ? l.height + 20 : 200;
                  s.scrollIntoViewNode({
                    node: n,
                    padding: r,
                    callback() {
                      requestAnimationFrame(() => {
                        var t;
                        null === (t = document.querySelector(e)) ||
                          void 0 === t ||
                          t.focus({ preventScroll: !0 });
                      });
                    },
                  }),
                    (h.current = eN(a));
                },
                [t, h]
              ),
              S = n.useCallback(
                e => {
                  let t = eN(e);
                  if (null == t) return;
                  let a = F.default.getChannel(t);
                  null != a && l(a, !0);
                },
                [l]
              ),
              _ = n.useCallback(
                function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    s = a[e];
                  if (0 === s.length)
                    return "section-".concat(e, "-").concat(t);
                  {
                    let s = a[e][t];
                    return null == s ? eE(e, t) : eE(e, s);
                  }
                },
                [a]
              ),
              T = n.useCallback(
                (e, t, a) =>
                  i(
                    e,
                    t,
                    ep({
                      section: e,
                      coords: t,
                      key: a,
                      isShowingSearchResult: u,
                      hasActiveThreads: o,
                    })
                  ),
                [i, o, u]
              ),
              p = n.useCallback(
                e =>
                  0 === e
                    ? {}
                    : { role: "grid", "aria-labelledby": "#".concat(eS(e)) },
                []
              ),
              E = n.useCallback(
                (e, t, n, i, o) => {
                  if (0 === e) return null;
                  let u = a[e][t];
                  return null != u
                    ? (0, s.jsx)(
                        ea.default,
                        {
                          id: "".concat(i),
                          threadId: u,
                          className: r(eg.card, eg.mainCard),
                          goToThread: l,
                          observePostVisibilityAnalytics: m,
                          coords: n,
                          gridCoords: o.coordinates[i],
                          gridSectionBoundaries: o.boundaries,
                        },
                        i
                      )
                    : __OVERLAY__
                      ? null
                      : (0, s.jsx)(
                          "div",
                          {
                            style: { ...n },
                            "data-item-role": "item",
                            className: r(
                              eg.loadingCard,
                              eg["loadingCard-".concat(t % 3)]
                            ),
                          },
                          i
                        );
                },
                [a, l, m]
              ),
              N = n.useCallback(
                e =>
                  0 === e
                    ? f - 8 - 24
                    : 2 === e
                      ? o || !c
                        ? 40
                        : 0
                      : 1 === e && u && !d
                        ? 40
                        : 0,
                [f, u, d, o, c]
              );
            return {
              updateMasonryListScrollerRef: x,
              masonryListContainerRef: g,
              focusedThreadId: h,
              handleGridFocus: C,
              handleGridSelect: S,
              getItemKey: _,
              renderGridSection: T,
              renderGridItem: E,
              getSectionProps: p,
              getGridSectionHeight: N,
            };
          })({
            masonryListScrollerRef: eW,
            threadIdsBySection: eL,
            goToThread: eP,
            renderSectionOrItem: eU,
            hasActiveThreads: D,
            isShowingSearchResult: en,
            canSearchForumPosts: H,
            canViewArchivedPosts: V,
            observePostVisibilityAnalytics: J,
            focusedThreadId: el,
            headerHeight: ey,
          });
        !(function (e) {
          let {
            masonryListScrollerRef: t,
            containerWidth: a,
            isGridLayout: s,
            threadIdsBySection: l,
            focusedThreadId: r,
            parentId: i,
          } = e;
          n.useEffect(() => {
            if (s) {
              let e = setTimeout(() => {
                if (null == t.current || null == r.current) return;
                let e = r.current;
                if ("string" != typeof e) return;
                let a = O.default.getSidebarState(i);
                if (null == a) {
                  r.current = null;
                  return;
                }
                let s = l.findIndex(t => t.find(t => t === e)),
                  n = t.current.getCoordsMap(),
                  o = "__section__".concat(s),
                  u = n[o],
                  d = n[eE(s, e)];
                null != u &&
                  null != d &&
                  t.current.scrollIntoViewRect({
                    start: u.top + d.top - 100,
                    end: u.top + d.top + d.height + 50,
                  });
              }, 500);
              return () => clearTimeout(e);
            }
          }, [i, a, s, l, r, t]);
        })({
          masonryListScrollerRef: eW,
          containerWidth: ex,
          isGridLayout: et,
          threadIdsBySection: eL,
          parentId: t.id,
          focusedThreadId: el,
        });
        let e$ = n.useCallback(() => {
            var e, a;
            if (en) return;
            let s = et
              ? null === (e = eW.current) || void 0 === e
                ? void 0
                : e.getScrollerState()
              : null === (a = Q.current) || void 0 === a
                ? void 0
                : a.getScrollerState();
            if (null == s) return;
            (0, X.trackForumScrolled)({ guildId: t.guild_id, channelId: t.id });
            let n = s.scrollTop + s.offsetHeight,
              l = s.scrollHeight - n,
              r = et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200;
            l < r && p();
          }, [en, et, t.guild_id, t.id, ex, p]),
          e0 = (0, h.useStateFromStores)(
            [S.default],
            () => S.default.keyboardModeEnabled
          ),
          e1 = (0, ed.default)({
            id: "forum-grid-view",
            isEnabled: et && e0,
            setFocus: eJ,
          }),
          e6 = (0, ec.default)({
            listRef: Q,
            padding: 96,
            isEnabled: !et && e0,
            channel: t,
          }),
          { ref: e4, ...e2 } = e1.containerProps,
          e8 = O.default.getSidebarState(t.id),
          e3 = null != e8 && (0, O.isViewChannelSidebar)(e8);
        return (0, s.jsx)("div", {
          className: eg.container,
          ref: eo,
          children: (0, s.jsx)(g.FocusJumpSection, {
            children: e =>
              (0, s.jsxs)(s.Fragment, {
                children: [
                  c &&
                    (0, s.jsx)(x.default, {
                      channel: t,
                      draftType: b.DraftType.FirstThreadMessage,
                      className: eg.uploadArea,
                      style: {
                        right:
                          e3 && (null == a ? void 0 : a.isThreadSidebarFloating)
                            ? a.threadSidebarWidth
                            : 0,
                      },
                    }),
                  (0, s.jsx)(eI, { channel: t }),
                  (0, s.jsx)(g.HiddenVisually, {
                    children: (0, s.jsx)(g.H, {
                      children: ef.default.Messages.THREADS,
                    }),
                  }),
                  w
                    ? (0, s.jsx)("div", {
                        className: eg.optInNotice,
                        children: (0, s.jsx)(M.default, { channel: t }),
                      })
                    : null,
                  et
                    ? (0, s.jsx)(ed.GridNavigatorProvider, {
                        navigator: e1,
                        children: (0, s.jsx)(
                          g.MasonryList,
                          {
                            ref: e => {
                              var t;
                              (e4.current =
                                null !==
                                  (t =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== t
                                  ? t
                                  : null),
                                eK(e);
                            },
                            itemGutter: 16,
                            padding: 24,
                            className: eg.grid,
                            columns: eT,
                            sections: eb,
                            getItemKey: eY,
                            getSectionHeight: eq,
                            getItemHeight: e_,
                            renderSection: eX,
                            renderItem: eZ,
                            getSectionProps: eQ,
                            onScroll: T ? e$ : void 0,
                            chunkSize: 350,
                            ...e2,
                            ...e,
                          },
                          y
                        ),
                      })
                    : (0, s.jsx)(d.ListNavigatorProvider, {
                        navigator: e6,
                        children: (0, s.jsx)(d.ListNavigatorContainer, {
                          children: t => {
                            let { ref: a, ...n } = t;
                            return (0, s.jsx)(
                              g.ListAuto,
                              {
                                ref: eH(a),
                                className: eg.list,
                                sections: eb,
                                sectionHeight: eV,
                                rowHeight: ez,
                                renderRow: eG,
                                renderSection: eB,
                                chunkSize: 150,
                                onScroll: T ? e$ : void 0,
                                paddingBottom: 24,
                                ...n,
                                ...e,
                                innerRole: "list",
                              },
                              y
                            );
                          },
                        }),
                      }),
                ],
              }),
          }),
        });
      }
      function ev(e) {
        let { channel: t, coords: a } = e,
          n = (0, _.default)(t);
        return (0, s.jsx)("div", {
          className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
          style: a,
          children: (0, s.jsx)(g.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
              channelName: n,
            }),
          }),
        });
      }
      function eA(e) {
        let { channel: t, coords: a } = e,
          n = (0, _.default)(t);
        return (0, s.jsx)("div", {
          className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
          style: a,
          children: (0, s.jsx)(g.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children:
              ef.default.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
                channelName: n,
              }),
          }),
        });
      }
      function eI(e) {
        let { channel: t } = e,
          a = n.useCallback(() => {
            G.default.resort(t.id);
          }, [t]),
          l = (0, h.useStateFromStores)([V.default], () =>
            V.default.getNewThreadCount()
          );
        return 0 === l
          ? null
          : (0, s.jsx)(g.Clickable, {
              className: eg.newPostsButton,
              onClick: a,
              children: (0, s.jsx)(g.Text, {
                color: "text-brand",
                variant: "text-md/medium",
                children: ef.default.Messages.NEW_FORUM_POST_COUNT.format({
                  count: l,
                }),
              }),
            });
      }
      function ej() {
        return Promise.resolve();
      }
      function eR(e) {
        var t, a, l;
        let {
            channel: i,
            isEmpty: x,
            isSearchLoading: _,
            numResults: N,
            children: M,
            coords: v,
            onHeightChange: A,
          } = e,
          {
            name: I,
            formOpen: R,
            titleFocused: O,
            hasClickedForm: F,
            textAreaState: w,
            onboardingExpanded: B,
            setEditorAdditionRowHeight: V,
          } = (0, ee.useForumPostComposerStore)(e => {
            let {
              name: t,
              formOpen: a,
              titleFocused: s,
              hasClickedForm: n,
              textAreaState: l,
              onboardingExpanded: r,
              setEditorAdditionRowHeight: i,
            } = e;
            return {
              name: t,
              formOpen: a,
              titleFocused: s,
              hasClickedForm: n,
              textAreaState: l,
              onboardingExpanded: r,
              setEditorAdditionRowHeight: i,
            };
          }, u.default),
          { tagFilter: K, layoutType: Y } = (0, z.useForumChannelStore)(i.id),
          Z = (0, ee.useForumPostComposerStoreApi)(),
          q = (0, z.useForumChannelStoreApi)(),
          $ = (0, h.useStateFromStores)([L.default], () =>
            L.default.canChatInGuild(i.guild_id)
          ),
          ea = (0, W.useCanManageChannel)(i),
          es = (0, j.useCanStartThread)(i),
          [en, er] = n.useState(es),
          [, ei] = (0, p.useCurrentUserCommunicationDisabled)(
            null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0
          ),
          eu = $ && (es || (en && ei)),
          ed = i.isMediaChannel();
        n.useEffect(() => {
          es && er(!0);
        }, [es]);
        let { ref: ec, height: eh } = (0, C.default)();
        n.useEffect(() => {
          null != eh && A(eh);
        }, [A, eh]);
        let ex = n.useCallback(() => {
          o(() => {
            null != ec.current &&
              Z.getState().setEditorHeight(ec.current.offsetHeight);
          });
        }, [ec, Z]);
        n.useLayoutEffect(ex, [ex, x, eu, B]),
          (0, H.useComponentAction)({
            event: em.ComponentActions.REMEASURE_TARGET,
            handler: ex,
          });
        let eC = (0, h.useStateFromStores)([P.default], () =>
            P.default.getUploads(i.id, b.DraftType.FirstThreadMessage)
          ),
          eS = (0, W.useChannelTemplate)(i),
          e_ = n.useRef(null),
          eT = n.useRef(null),
          [ep, eE] = n.useState(0),
          { width: eN } = (0, h.useStateFromStores)([y.default], () =>
            y.default.windowSize()
          ),
          eM =
            null === (a = e_.current) || void 0 === a
              ? void 0
              : null === (t = a.getBoundingClientRect()) || void 0 === t
                ? void 0
                : t.width,
          ev = n.useRef(null);
        n.useLayoutEffect(() => {
          var e;
          let t = eT.current,
            a =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0];
          if (null != e_.current && null != a && null != a.children) {
            let { left: e, top: t } = e_.current.getBoundingClientRect(),
              s = 0;
            for (let n of a.children) {
              let { right: a, top: l, height: r } = n.getBoundingClientRect();
              if (l - t > r) break;
              a - e > s && (s = a - e);
            }
            eE(s);
          }
        }, [i.availableTags, eN, eM, K]);
        let eA = I.length > 0 && !R && (_ || null != N),
          eI =
            !__OVERLAY__ &&
            !F &&
            !R &&
            O &&
            (0 === w.textValue.trim().length || w.textValue.trim() === eS) &&
            0 === eC.length;
        n.useLayoutEffect(() => {
          let e = eA || eI;
          if (!e) return V(0);
          null != ev.current && V(e ? ev.current.clientHeight : 0);
        }, [V, eA, eI, ev]);
        let eR = e => {
            (0, X.trackForumTagFilterClicked)({
              guildId: i.guild_id,
              channelId: i.id,
              tagId: e,
              filterTagIds: Array.from(K),
              added: !K.has(e),
              location: {
                page: em.AnalyticsPages.GUILD_CHANNEL,
                section: em.AnalyticsSections.FORUM_CHANNEL_HEADER,
                object: em.AnalyticsObjects.CHANNEL_TAG,
              },
            }),
              q.getState().toggleTagFilter(i.id, e);
          },
          eF = (0, d.default)({
            id: "".concat(i.id, "-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ej,
            scrollToEnd: ej,
            orientation: c.Orientations.HORIZONTAL,
          }),
          {
            role: eb,
            onFocus: eL,
            ...eP
          } = (0, d.useListItem)("forum-channel-header"),
          ey = n.useRef(null),
          eD = (function () {
            let e = n.useRef(!1),
              t = (0, h.useStateFromStores)(
                [S.default],
                () => S.default.keyboardModeEnabled
              ),
              a = n.useCallback(
                t => {
                  e.current = t.shiftKey;
                },
                [e]
              );
            return (
              n.useLayoutEffect(
                () => (
                  t
                    ? window.addEventListener("keydown", a)
                    : window.removeEventListener("keydown", a),
                  () => window.removeEventListener("keydown", a)
                ),
                [t, a]
              ),
              e
            );
          })(),
          eU = n.useCallback(
            e => {
              if ((eL(e), e.target === ec.current && !eD.current)) {
                var t;
                null === (t = ey.current) || void 0 === t || t.focus();
              }
            },
            [eL, ec, eD]
          );
        return (0, s.jsx)(
          "div",
          {
            className: r(eg.card, eg.headerRow, eg.columnsSpan),
            ref: ec,
            onFocus: eU,
            ...eP,
            style: { ...v, position: "static", height: "auto" },
            children: (0, s.jsxs)(H.ComponentDispatchGroupProvider, {
              children: [
                null != i.guild_id
                  ? (0, s.jsx)(E.default, {
                      className: r(eg.newMemberBanner, {
                        [eg.gridViewBanner]: Y === m.ForumLayout.GRID,
                      }),
                      guildId: i.guild_id,
                      channel: i,
                    })
                  : null,
                (0, s.jsx)("div", {
                  className: r(eg.mainCard, eg.header, {
                    [eg.headerWithMatchingPosts]: eA || eI,
                  }),
                  children: (0, s.jsx)(et.default, {
                    parentChannel: i,
                    onChange: ex,
                    isSearchLoading: _,
                    canCreatePost: eu,
                    inputRef: ey,
                  }),
                }),
                (eA || eI) &&
                  (0, s.jsxs)("div", {
                    className: eg.matchingPostsRow,
                    ref: ev,
                    children: [
                      eA &&
                        (0, s.jsxs)("div", {
                          className: eg.matchingPosts,
                          children: [
                            (0, s.jsx)(g.Heading, {
                              variant: "text-xs/normal",
                              color: "text-normal",
                              children: _
                                ? ef.default.Messages.FORUM_SEARCHING
                                : 0 === N
                                  ? ef.default.Messages
                                      .FORUM_SEARCH_NO_MATCHING_POSTS
                                  : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format(
                                      { numPosts: N, query: I }
                                    ),
                            }),
                            !_ &&
                              (0, s.jsx)(g.Clickable, {
                                onClick: () => {
                                  (0, X.trackForumSearchCleared)({
                                    guildId: i.guild_id,
                                    channelId: i.id,
                                  }),
                                    G.default.clearForumSearch(i.id),
                                    Z.getState().setName("");
                                },
                                children: (0, s.jsx)(g.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-brand",
                                  className: eg.clear,
                                  children: ef.default.Messages.CLEAR,
                                }),
                              }),
                          ],
                        }),
                      (0, s.jsx)("div", { className: eg.tagsSpacer }),
                      eI
                        ? eu
                          ? (0, s.jsxs)("div", {
                              className: eg.startPostHelp,
                              children: [
                                (0, s.jsx)(g.KeyCombo, {
                                  shortcut: "SHIFT",
                                  className: eg.keyboardShortcut,
                                }),
                                (0, s.jsx)(g.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: "+",
                                }),
                                (0, s.jsx)(g.KeyCombo, {
                                  shortcut: "ENTER",
                                  className: eg.keyboardShortcut,
                                }),
                                (0, s.jsx)(g.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children:
                                    ef.default.Messages
                                      .FORUM_ENTER_TO_START_POST,
                                }),
                              ],
                            })
                          : (0, s.jsxs)("div", {
                              className: eg.startPostHelp,
                              children: [
                                (0, s.jsx)(k.default, {
                                  height: 14,
                                  width: 14,
                                  className: eg.warnIcon,
                                }),
                                (0, s.jsx)(g.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children:
                                    ef.default.Messages
                                      .FORUM_NO_POST_PERMISSION_HELP,
                                }),
                              ],
                            })
                        : null,
                    ],
                  }),
                (0, s.jsx)(Q.default, { channel: i, onChange: ex }),
                (0, s.jsxs)("div", {
                  className: eg.tagsContainer,
                  ref: e_,
                  children: [
                    (0, s.jsx)(eO, { channel: i }),
                    i.availableTags.length > 0
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("div", { className: eg.divider }),
                            (0, s.jsx)("div", {
                              className: eg.tagList,
                              ref: eT,
                              children: (0, s.jsx)(d.ListNavigatorProvider, {
                                navigator: eF,
                                children: (0, s.jsx)(d.ListNavigatorContainer, {
                                  children: e => {
                                    let { ref: t, ...a } = e;
                                    return (0, s.jsx)("div", {
                                      className: eg.tagListInner,
                                      ref: t,
                                      ...a,
                                      children: i.availableTags.map(e =>
                                        (0, s.jsx)(
                                          el.default,
                                          {
                                            className: eg.tag,
                                            tag: e,
                                            onClick: () => eR(e.id),
                                            selected: K.has(e.id),
                                          },
                                          e.id
                                        )
                                      ),
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, s.jsx)(g.Popout, {
                              renderPopout: e => {
                                let { closePopout: t, setPopoutRef: a } = e;
                                return (0, s.jsx)(eo.default, {
                                  channel: i,
                                  closePopout: t,
                                  setPopoutRef: a,
                                });
                              },
                              position: "bottom",
                              align: "right",
                              children: (e, t) => {
                                let { isShown: a } = t;
                                return (0, s.jsxs)(g.Button, {
                                  ...e,
                                  size: g.Button.Sizes.MIN,
                                  color: g.Button.Colors.CUSTOM,
                                  className: r(eg.tagsButton, {
                                    [eg.tagsButtonWithCount]: K.size > 0,
                                  }),
                                  style: { left: ep },
                                  innerClassName: eg.tagsButtonInner,
                                  "aria-label":
                                    K.size > 0
                                      ? ef.default.Messages
                                          .FORUM_TAG_SEE_MORE_A11Y_LABEL
                                      : ef.default.Messages
                                          .FORUM_TAG_ALL_A11Y_LABEL,
                                  children: [
                                    K.size > 0
                                      ? (0, s.jsx)("div", {
                                          className: eg.countContainer,
                                          children: (0, s.jsx)(g.Text, {
                                            className: eg.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: K.size,
                                          }),
                                        })
                                      : ef.default.Messages.FORUM_TAG_ALL,
                                    a
                                      ? (0, s.jsx)(U.default, { width: 20 })
                                      : (0, s.jsx)(D.default, { width: 20 }),
                                  ],
                                });
                              },
                            }),
                            (0, s.jsxs)(g.Button, {
                              size: g.Button.Sizes.MIN,
                              color: g.Button.Colors.CUSTOM,
                              className: r(
                                eg.tagsButton,
                                eg.tagsButtonPlaceholder
                              ),
                              innerClassName: eg.tagsButtonInner,
                              "aria-label":
                                ef.default.Messages
                                  .FORUM_TAG_SEE_MORE_A11Y_LABEL,
                              children: [
                                K.size > 0
                                  ? (0, s.jsx)("div", {
                                      className: eg.countContainer,
                                      children: (0, s.jsx)(g.Text, {
                                        className: eg.countText,
                                        color: "none",
                                        variant: "text-xs/medium",
                                        children: K.size,
                                      }),
                                    })
                                  : null,
                                (0, s.jsx)(U.default, { width: 24 }),
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                M,
                ea &&
                  !ed &&
                  (0, s.jsx)(T.default, {
                    contentTypes: [
                      f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD,
                    ],
                    children: e => {
                      let { visibleContent: t, markAsDismissed: a } = e;
                      return t ===
                        f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD
                        ? (0, s.jsx)(J.default, { onDismiss: a })
                        : null;
                    },
                  }),
              ],
            }),
          },
          "create-form"
        );
      }
      function eO(e) {
        let { channel: t } = e,
          a = t.isMediaChannel();
        return (0, s.jsx)(g.Popout, {
          renderPopout: e => {
            let { closePopout: a } = e;
            return (0, s.jsx)(en.default, { channel: t, closePopout: a });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: n } = t;
            return (0, s.jsxs)(g.Button, {
              ...e,
              size: g.Button.Sizes.MIN,
              color: g.Button.Colors.CUSTOM,
              className: eg.sortDropdown,
              innerClassName: eg.sortDropdownInner,
              "aria-label": a
                ? ef.default.Messages.MEDIA_CHANNEL_SORT
                : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
              children: [
                (0, s.jsx)(w.default, {}),
                (0, s.jsx)(g.Text, {
                  className: eg.sortDropdownText,
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  children: a
                    ? ef.default.Messages.MEDIA_CHANNEL_SORT
                    : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                }),
                n
                  ? (0, s.jsx)(U.default, { width: 20 })
                  : (0, s.jsx)(D.default, { width: 20 }),
              ],
            });
          },
        });
      }
    },
    131600: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ef;
          },
        }),
        a("424973"),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("866227"),
        o = a.n(i),
        u = a("146606"),
        d = a("171210"),
        c = a("316693"),
        m = a("446674"),
        h = a("77078"),
        f = a("18054"),
        g = a("581583"),
        x = a("206230"),
        C = a("656038"),
        S = a("454273"),
        _ = a("781555"),
        T = a("305961"),
        p = a("36694"),
        E = a("945330"),
        N = a("717018"),
        M = a("673078"),
        v = a("68238"),
        A = a("904276"),
        I = a("772280"),
        j = a("423487"),
        R = a("956089"),
        O = a("659500"),
        F = a("718517"),
        b = a("299039"),
        L = a("526812"),
        P = a("404607"),
        y = a("713955"),
        D = a("339792"),
        U = a("680986"),
        w = a("867965"),
        k = a("258039"),
        H = a("729608"),
        B = a("578198"),
        G = a("953371"),
        V = a("49111"),
        z = a("782340"),
        W = a("548850");
      let K = { width: 28, height: 28 },
        Y = { width: 20, height: 20, borderRadius: 10 },
        X = e => {
          (0, w.trackForumOnboardingClicked)({ onboardingCTA: e });
        };
      class Z {
        addStep(e) {
          ++this.currentIndex,
            this.steps.push({ index: this.currentIndex, ...e }),
            e.isDone && this.completedSteps++;
        }
        getSteps() {
          return this.steps;
        }
        isAllDone() {
          return this.steps.every(e => e.isDone);
        }
        constructor() {
          (this.currentIndex = 0), (this.steps = []), (this.completedSteps = 0);
        }
      }
      let q = e => {
          let t = null != e.topic && e.topic.length > 0;
          return {
            name: z.default.Messages
              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
            description:
              z.default.Messages
                .FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
            clickHandler: () => {
              X(G.ForumOnboardingCTAs.GUIDELINES),
                f.default.open(
                  e.id,
                  void 0,
                  V.ChannelSettingsSubsections.TOPIC
                );
            },
            isDone: t,
          };
        },
        Q = e => {
          let t = null != e.availableTags && e.availableTags.length > 0;
          return {
            name: z.default.Messages
              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
            description:
              z.default.Messages
                .FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
            clickHandler: () => {
              X(G.ForumOnboardingCTAs.TAGS),
                f.default.open(e.id),
                (0, h.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("987034")
                    .then(a.bind(a, "987034"));
                  return a =>
                    (0, s.jsx)(t, {
                      ...a,
                      channelId: e.id,
                      guildId: e.guild_id,
                    });
                });
            },
            isDone: t,
          };
        },
        J = e => {
          let t = null != e.defaultReactionEmoji;
          return {
            name: z.default.Messages
              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
            description:
              z.default.Messages
                .FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
            clickHandler: () => {
              X(G.ForumOnboardingCTAs.DEFAULT_REACTION),
                (0, h.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("456552")
                    .then(a.bind(a, "456552"));
                  return a => (0, s.jsx)(t, { ...a, channel: e });
                });
            },
            isDone: t,
          };
        },
        $ = (e, t, n) => ({
          name: z.default.Messages
            .FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
          description: t
            ? z.default.Messages
                .MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION
            : z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format(
                {
                  onClick: e => {
                    null != n &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      (0, w.trackForumUpsellModalViewed)(),
                      (0, h.openModalLazy)(async () => {
                        let { default: e } = await a
                          .el("135430")
                          .then(a.bind(a, "135430"));
                        return t => (0, s.jsx)(e, { ...t, guildId: n });
                      }));
                  },
                }
              ),
          clickHandler: () => {
            X(G.ForumOnboardingCTAs.CREATE_POST),
              O.ComponentDispatch.dispatch(
                V.ComponentActions.FOCUS_COMPOSER_TITLE
              );
          },
          isDone: e,
        }),
        ee = (e, t) =>
          n.useCallback(
            () => (t(!1), P.default.hideAdminOnboarding(e, !0)),
            [e, t]
          ),
        et = e => {
          let t = b.default.extractTimestamp(e),
            a = o().isBefore(o(t).add(o.duration(15, "days")));
          return a;
        },
        ea = (e, t, a) => {
          n.useEffect(() => {
            !e && a(!t);
          }, [e, a, t]);
        },
        es = (e, t, a, s) => {
          let l = n.useRef(0);
          n.useEffect(
            () => (
              a || !e || t
                ? clearTimeout(l.current)
                : (l.current = setTimeout(() => {
                    s();
                  }, 60 * F.default.Millis.SECOND)),
              () => clearTimeout(l.current)
            ),
            [e, t, s, a]
          );
        },
        en = (e, t, a) => {
          n.useEffect(() => {
            e && t && a();
          }, []);
        },
        el = e => {
          let {
              isAllDone: t,
              isVisible: a,
              canManageChannel: s,
              guildId: l,
              channel: r,
            } = e,
            i = (0, m.useStateFromStores)([T.default], () =>
              null != l ? T.default.getRoles(l) : void 0
            ),
            o = n.useCallback(() => {
              O.ComponentDispatch.dispatch(V.ComponentActions.REMEASURE_TARGET);
            }, []);
          n.useEffect(() => {
            o();
          }, [o, t, a, s, i, r.id, r.permissionOverwrites]);
        },
        er = () => {
          let [e, t] = n.useState(!0),
            a = (0, m.useStateFromStores)(
              [x.default],
              () => x.default.useReducedMotion
            ),
            s = (0, u.useTransition)(e, {
              keys: e => (e ? "shown" : "hidden"),
              config: eu,
              from: { opacity: 0 },
              enter: { opacity: 1 },
              leave: { opacity: 0 },
              unique: !0,
              immediate: a,
            });
          return { transitions: s, setVisible: t };
        },
        ei = e => {
          let t = (0, m.useStateFromStores)(
            [x.default],
            () => x.default.useReducedMotion
          );
          return (0, u.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
            immediate: t,
          });
        },
        eo = e => {
          let { guild: t, roles: a } = e;
          return (0, s.jsx)("div", {
            className: W.rolesList,
            "aria-label": z.default.Messages.ROLES_LIST.format({
              numRoles: a.length,
            }),
            children: a.map(e =>
              (0, s.jsx)(
                g.MemberRole,
                {
                  role: e,
                  canRemove: !1,
                  onRemove: V.NOOP_NULL,
                  guildId: t.id,
                  className: W.rolePill,
                },
                e.id
              )
            ),
          });
        },
        eu = { mass: 1, tension: 250, friction: 18, clamp: !0 },
        ed = e => {
          let { guild: t, channel: l, hasAnyThread: r, handleHide: i } = e,
            [o, u] = n.useState(!1),
            d = (0, k.isOnboardingDismissed)(l.id),
            f = (0, m.useStateFromStores)([L.default], () =>
              L.default.hasHidden(l.id)
            ),
            g = (function (e, t, l, r) {
              let i = null == e ? void 0 : e.id,
                o = (0, m.useStateFromStores)([T.default], () =>
                  null != i ? T.default.getRoles(i) : void 0
                );
              return n.useMemo(() => {
                let n = new Z(),
                  i = (null == t ? void 0 : t.isMediaChannel()) === !0;
                return (
                  null != e &&
                    null != t &&
                    !i &&
                    null != o &&
                    n.addStep(
                      (function (e, t, n, l) {
                        let r = (0, C.default)(n)
                            ? c.combine(
                                V.Permissions.VIEW_CHANNEL,
                                V.Permissions.SEND_MESSAGES
                              )
                            : V.Permissions.SEND_MESSAGES,
                          i =
                            null != e
                              ? (0, y.getAllExistingRolesWithPermission)(
                                  e,
                                  t,
                                  n,
                                  r
                                ).filter(
                                  t =>
                                    n.permissionOverwrites.hasOwnProperty(
                                      t.id
                                    ) || (0, S.isEveryoneRoleId)(e.id, t.id)
                                )
                              : [],
                          o = i.length > 0,
                          u = i.some(t => (0, S.isEveryoneRoleId)(e.id, t.id));
                        return {
                          name: z.default.Messages
                            .FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                          description:
                            z.default.Messages
                              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                          isDone: o && u,
                          shouldWarn: o && !u,
                          children: o
                            ? (0, s.jsx)(eo, { guild: e, roles: i })
                            : null,
                          clickHandler: () => {
                            X(G.ForumOnboardingCTAs.PERMISSIONS),
                              (0, h.openModalLazy)(
                                async () => {
                                  let { default: t } = await a
                                    .el("840489")
                                    .then(a.bind(a, "840489"));
                                  return (
                                    l(!0),
                                    a =>
                                      (0, s.jsx)(t, {
                                        ...a,
                                        channel: n,
                                        guild: e,
                                        permission: r,
                                        currentSelectedRoles: i,
                                      })
                                  );
                                },
                                {
                                  modalKey:
                                    "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                  onCloseRequest: V.NOOP_NULL,
                                  onCloseCallback: () => l(!1),
                                }
                              );
                          },
                        };
                      })(e, o, t, r)
                    ),
                  !i && n.addStep(q(t)),
                  n.addStep(Q(t)),
                  n.addStep(J(t)),
                  n.addStep($(l, i, null == e ? void 0 : e.id)),
                  n
                );
              }, [t, e, o, l, r]);
            })(t, l, r, u),
            x = g.isAllDone(),
            _ = d || f || !et(l.id);
          return (
            es(x, _, o, i),
            { onboardingSteps: g, isHidden: f, isDismissed: d, isAllDone: x }
          );
        },
        ec = () =>
          n.useCallback(e => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
          }, []),
        em = e => {
          let { handleHide: t } = e;
          return (0, s.jsx)(h.Clickable, {
            onClick: t,
            className: W.closeButton,
            "aria-label": z.default.Messages.DISMISS,
            children: (0, s.jsx)(E.default, { className: W.closeIcon }),
          });
        },
        eh = e => {
          let { expanded: t, onClick: a } = e;
          return (0, s.jsx)(h.Clickable, {
            onClick: a,
            className: W.closeButton,
            "aria-label": t
              ? z.default.Messages.COLLAPSE
              : z.default.Messages.EXPAND,
            children: t
              ? (0, s.jsx)(N.default, { className: W.closeIcon })
              : (0, s.jsx)(M.default, { className: W.closeIcon }),
          });
        };
      var ef = e => {
        let { hasAnyThread: t, channel: a } = e,
          { onboardingExpanded: l } = (0, B.useForumPostComposerStore)(e => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
          }),
          { tagFilter: i } = (0, D.useForumChannelStore)(a.id),
          o = (0, m.useStateFromStores)([T.default], () =>
            T.default.getGuild(a.getGuildId())
          ),
          c = (0, U.useCanManageChannel)(a),
          { transitions: f, setVisible: g } = er(),
          x = ei(l),
          C = ec(),
          S = ee(a.id, g),
          {
            onboardingSteps: E,
            isDismissed: N,
            isHidden: M,
            isAllDone: O,
          } = ed({ guild: o, channel: a, hasAnyThread: t, handleHide: S }),
          F = !M && !N,
          b = (0, B.useForumPostComposerStoreApi)(),
          L = a.isMediaChannel(),
          P = e => b.getState().setOnboardingExpanded(e);
        return (en(O, F, S),
        el({
          isAllDone: O,
          isVisible: F,
          canManageChannel: c,
          guildId: null == o ? void 0 : o.id,
          channel: a,
        }),
        ea(N, M, g),
        n.useEffect(() => {
          (!t || !F) && P(!0);
        }, []),
        null == o)
          ? null
          : F && c
            ? L
              ? t
                ? null
                : (0, s.jsx)(_.default, { channel: a })
              : (0, s.jsx)(s.Fragment, {
                  children: f((e, t) =>
                    t
                      ? (0, s.jsx)(u.animated.div, {
                          style: e,
                          className: W.container,
                          children: (0, s.jsxs)("div", {
                            className: W.wrapper,
                            children: [
                              (0, s.jsx)("div", {
                                className: W.headerRow,
                                children: (0, s.jsxs)(h.HeadingLevel, {
                                  component: (0, s.jsx)(h.Heading, {
                                    variant: "heading-md/semibold",
                                    children: z.default.Messages.GET_STARTED,
                                  }),
                                  children: [
                                    (0, s.jsx)(h.Heading, {
                                      variant: "heading-md/medium",
                                      className: W.header,
                                      children:
                                        z.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format(
                                          {
                                            numCompleted:
                                              E.completedSteps.toString(),
                                            numSteps: E.steps.length.toString(),
                                          }
                                        ),
                                    }),
                                    (0, s.jsxs)(h.Text, {
                                      variant: "text-xs/normal",
                                      className: W.visibilityInfo,
                                      children: [
                                        (0, s.jsx)(v.default, {
                                          width: 12,
                                          height: 12,
                                          className: W.icon,
                                        }),
                                        z.default.Messages
                                          .FORUM_CHANNEL_ONBOARDING_VISIBILITY,
                                      ],
                                    }),
                                    (0, s.jsx)(eh, {
                                      expanded: l,
                                      onClick: () => P(!l),
                                    }),
                                    (0, s.jsx)(em, { handleHide: S }),
                                  ],
                                }),
                              }),
                              x((e, t) =>
                                t
                                  ? (0, s.jsx)(u.animated.div, {
                                      style: e,
                                      className: W.listContainer,
                                      children: (0, s.jsx)("ol", {
                                        className: W.checklist,
                                        children: E.getSteps().map(e =>
                                          (0, s.jsxs)(
                                            h.Clickable,
                                            {
                                              tag: "li",
                                              "aria-label": e.name,
                                              onClick: () => C(e),
                                              className: r(W.stepContainer, {
                                                [W.completed]: e.isDone,
                                              }),
                                              children: [
                                                e.shouldWarn
                                                  ? (0, s.jsx)(j.default, {
                                                      color:
                                                        d.default.STATUS_DANGER,
                                                      className: W.stepStatus,
                                                    })
                                                  : e.isDone
                                                    ? (0, s.jsx)(R.IconBadge, {
                                                        color:
                                                          d.default
                                                            .STATUS_POSITIVE_BACKGROUND,
                                                        icon: p.default,
                                                        style: Y,
                                                        className: W.stepStatus,
                                                      })
                                                    : (0, s.jsx)(R.IconBadge, {
                                                        disableColor: !0,
                                                        icon: A.default,
                                                        style: K,
                                                        className: r(
                                                          W.stepStatus,
                                                          W.completed
                                                        ),
                                                      }),
                                                (0, s.jsxs)("div", {
                                                  className: W.step,
                                                  children: [
                                                    (0, s.jsx)(h.Text, {
                                                      variant: "text-md/medium",
                                                      color: e.isDone
                                                        ? "header-secondary"
                                                        : "header-primary",
                                                      className: W.stepName,
                                                      children: e.name,
                                                    }),
                                                    (0, s.jsx)(h.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "header-secondary",
                                                      className:
                                                        W.stepDescription,
                                                      children: e.description,
                                                    }),
                                                    e.children,
                                                  ],
                                                }),
                                                (0, s.jsx)(I.default, {
                                                  width: 12,
                                                  className: W.stepStatus,
                                                }),
                                              ],
                                            },
                                            "onboard-step-".concat(e.index)
                                          )
                                        ),
                                      }),
                                    })
                                  : null
                              ),
                            ],
                          }),
                        })
                      : null
                  ),
                })
            : t
              ? null
              : (0, s.jsx)(H.default, {
                  channelName: a.name,
                  guildId: a.guild_id,
                  tagFilter: i,
                  channel: a,
                });
      };
    },
    729608: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var s = a("37983"),
        n = a("884691"),
        l = a("77078"),
        r = a("300322"),
        i = a("660074"),
        o = a("543289"),
        u = a("772280"),
        d = a("659500"),
        c = a("680986"),
        m = a("867965"),
        h = a("49111"),
        f = a("782340"),
        g = a("198022");
      function x(e) {
        let { channelName: t, guildId: x, tagFilter: C, channel: S } = e,
          _ = (0, c.useCanManageChannel)(S),
          T = (0, r.useCanStartThread)(S),
          p = S.isMediaChannel(),
          E = n.useCallback(() => {
            (0, m.trackForumUpsellModalViewed)(),
              (0, l.openModalLazy)(async () => {
                let { default: e } = await a
                  .el("135430")
                  .then(a.bind(a, "135430"));
                return t => (0, s.jsx)(e, { ...t, guildId: x });
              });
          }, [x]),
          N = C.size > 0,
          M = T || _,
          v = !N && _ && !p,
          A = n.useCallback(
            () =>
              v
                ? E()
                : T
                  ? void d.ComponentDispatch.dispatch(
                      h.ComponentActions.FOCUS_COMPOSER_TITLE
                    )
                  : (0, h.NOOP_NULL)(),
            [E, v, T]
          );
        return (0, s.jsxs)("div", {
          className: g.container,
          children: [
            (0, s.jsxs)("div", {
              className: g.iconContainer,
              children: [
                (0, s.jsx)("div", {
                  className: g.icon,
                  children: (0, s.jsx)(i.default, { width: 30, height: 30 }),
                }),
                (0, s.jsx)(o.default, { className: g.stars }),
              ],
            }),
            (0, s.jsx)(l.Heading, {
              className: g.header,
              variant: "heading-md/semibold",
              children: N
                ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                    numTags: C.size,
                  })
                : f.default.Messages.FORUM_EMPTY_STATE_TITLE,
            }),
            (0, s.jsx)(l.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: N
                ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                    numTags: C.size,
                  })
                : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                    channelName: t,
                  }),
            }),
            M &&
              (0, s.jsxs)(l.Button, {
                look: l.Button.Looks.BLANK,
                size: l.Button.Sizes.MIN,
                color: l.Button.Colors.GREEN,
                onClick: A,
                className: g.cta,
                innerClassName: g.button,
                children: [
                  v
                    ? f.default.Messages.FORUM_EMPTY_STATE_CTA
                    : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA,
                  (0, s.jsx)(u.default, { width: 12 }),
                ],
              }),
          ],
        });
      }
    },
    912066: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return N;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("146606"),
        o = a("446674"),
        u = a("77078"),
        d = a("18054"),
        c = a("206230"),
        m = a("367376"),
        h = a("213523"),
        f = a("945330"),
        g = a("673078"),
        x = a("987772"),
        C = a("680986"),
        S = a("578198"),
        _ = a("49111"),
        T = a("782340"),
        p = a("268887"),
        E = a("919163"),
        N = n.memo(function (e) {
          let { channel: t, onChange: l } = e,
            N = (0, S.useForumPostComposerStoreApi)(),
            { guidelinesOpen: M } = (0, S.useForumPostComposerStore)(e => {
              let { guidelinesOpen: t } = e;
              return { guidelinesOpen: t };
            }),
            v = (0, C.useCanManageChannel)(t),
            [A, I] = n.useState(!1),
            j = n.useCallback(
              e => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== A && I(t);
              },
              [A]
            );
          n.useLayoutEffect(() => {
            setTimeout(l, 350);
          }, [M, l]);
          let R = (0, o.useStateFromStores)(
              [c.default],
              () => c.default.useReducedMotion
            ),
            [O, F] = n.useState(!M),
            b = (0, i.useSpring)({
              opacity: M ? 1 : 0,
              maxHeight: M ? 500 : 0,
              config: { duration: 300 },
              immediate: R,
              onRest: () => F(!M),
            }),
            L = null != t.topic && t.topic.length > 0;
          return L
            ? (0, s.jsx)(i.animated.div, {
                style: b,
                className: O ? p.hiddenVisually : void 0,
                children: (0, s.jsxs)("div", {
                  className: p.container,
                  children: [
                    (0, s.jsxs)("div", {
                      className: p.headerContainer,
                      children: [
                        (0, s.jsxs)(u.Heading, {
                          variant: "heading-lg/semibold",
                          className: p.guidelinesHeader,
                          children: [
                            (0, s.jsx)(h.default, { width: 20, height: 20 }),
                            T.default.Messages.FORUM_POST_GUIDELINES_TITLE,
                            v &&
                              (0, s.jsx)(u.Clickable, {
                                onClick: () => {
                                  d.default.open(
                                    t.id,
                                    void 0,
                                    _.ChannelSettingsSubsections.TOPIC
                                  );
                                },
                                tag: "span",
                                className: p.clickable,
                                children: (0, s.jsx)(x.default, {
                                  width: 16,
                                  height: 16,
                                }),
                              }),
                          ],
                        }),
                        (0, s.jsx)(u.Clickable, {
                          "aria-label": T.default.Messages.CLOSE,
                          className: p.clickable,
                          onClick: () => {
                            N.getState().setGuidelinesOpen(!1);
                          },
                          children: (0, s.jsx)(f.default, {
                            width: 16,
                            height: 16,
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: p.descriptionContainer,
                      children: [
                        (0, s.jsx)(u.Text, {
                          selectable: !0,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          style: { maxHeight: 220 },
                          className: r(p.guidelines, E.markup),
                          children: (0, s.jsx)("div", {
                            ref: j,
                            children: m.default.parseForumPostGuidelines(
                              t.topic,
                              !0,
                              {
                                channelId: t.id,
                                allowHeading: !0,
                                allowList: !0,
                              }
                            ),
                          }),
                        }),
                        A &&
                          (0, s.jsxs)("div", {
                            className: p.showMore,
                            children: [
                              (0, s.jsx)("div", { className: p.gradient }),
                              (0, s.jsx)("div", {
                                className: p.linkContainer,
                                children: (0, s.jsx)(u.Clickable, {
                                  className: p.showMoreLink,
                                  onClick: () => {
                                    (0, u.openModalLazy)(async () => {
                                      let { default: e } = await a
                                        .el("553415")
                                        .then(a.bind(a, "553415"));
                                      return a =>
                                        (0, s.jsx)(e, { ...a, channel: t });
                                    });
                                  },
                                  children: (0, s.jsxs)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-brand",
                                    className: p.showMoreText,
                                    children: [
                                      T.default.Messages
                                        .FORUM_CHANNEL_TOPIC_VIEW_ALL,
                                      (0, s.jsx)(g.default, {
                                        className: p.showMoreIcon,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        });
    },
    657927: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        l = a.n(n),
        r = a("77078"),
        i = a("945330"),
        o = a("153769"),
        u = a("266926"),
        d = a("867965"),
        c = a("152637"),
        m = a("953371"),
        h = a("994428"),
        f = a("782340"),
        g = a("156464"),
        x = a("259344"),
        C = a("304696"),
        S = a("714358");
      function _(e) {
        let { onDismiss: t } = e;
        return (0, s.jsxs)(r.Clickable, {
          onClick: () => {
            open(m.COMMUNITY_PORTAL_FORUM_PAGE),
              (0, d.trackForumHelperCardClicked)({ readGuideCta: !0 });
          },
          className: l(C.container, x.container, g.mainCard),
          children: [
            (0, s.jsxs)("div", {
              className: x.inline,
              children: [
                (0, s.jsxs)("div", {
                  className: x.author,
                  children: [
                    (0, s.jsx)(o.default, { className: x.discordIcon }),
                    (0, s.jsx)(r.Text, {
                      variant: "text-sm/semibold",
                      color: "header-primary",
                      children: f.default.Messages.DISCORD_NAME,
                    }),
                    (0, s.jsxs)("div", {
                      className: x.notice,
                      children: [
                        (0, s.jsx)(u.default, { className: x.infoIcon }),
                        (0, s.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: f.default.Messages.FORUM_HELPER_CARD_NOTICE,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(r.Clickable, {
                  onClick: e => {
                    e.stopPropagation(),
                      t(h.ContentDismissActionType.DISMISS),
                      (0, d.trackForumHelperCardClicked)({ readGuideCta: !1 });
                  },
                  children: (0, s.jsx)(i.default, {
                    className: x.closeIcon,
                    width: 16,
                    height: 16,
                  }),
                }),
              ],
            }),
            (0, s.jsx)("hr", { className: x.separator }),
            (0, s.jsxs)("div", {
              className: x.inline,
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(r.Heading, {
                      className: l(C.channelName, x.title),
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: f.default.Messages.FORUM_HELPER_CARD_TITLE,
                    }),
                    (0, s.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: f.default.Messages.FORUM_HELPER_CARD_BODY,
                    }),
                  ],
                }),
                (0, s.jsx)("img", {
                  src: S,
                  alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                  width: c.MAX_THUMBNAIL_WIDTH,
                  height: c.MAX_THUMBNAIL_WIDTH,
                }),
              ],
            }),
          ],
        });
      }
    },
    1999: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ComposerUploadButton: function () {
            return j;
          },
          default: function () {
            return O;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("627445"),
        r = a.n(l),
        i = a("146606"),
        o = a("446674"),
        u = a("77078"),
        d = a("371642"),
        c = a("206230"),
        m = a("850391"),
        h = a("271972"),
        f = a("761354"),
        g = a("42203"),
        x = a("474643"),
        C = a("585722"),
        S = a("840817"),
        _ = a("659500"),
        T = a("412861"),
        p = a("867965"),
        E = a("49111"),
        N = a("404173");
      let M = { scale: 0.95, opacity: 0 },
        v = { scale: 1, opacity: 1 },
        A = { scale: 1, opacity: 1 },
        I = { tension: 2400, friction: 52 };
      function j(e) {
        let { channelId: t, onClick: a, onClose: l, onMouseEnter: i } = e,
          c = n.useRef(null),
          m = (0, o.useStateFromStores)(
            [g.default],
            () => g.default.getChannel(t),
            [t]
          );
        return (
          r(null != m, "Forum Channel is null"),
          (0, s.jsxs)(u.Clickable, {
            className: N.uploadInput,
            onMouseEnter: i,
            onClick: () => {
              (0, p.trackForumChannelMediaUploaderClicked)({ isMobile: !1 }),
                null == a || a();
            },
            onKeyPress: e => {
              if ("Enter" === e.key) {
                var t;
                null === (t = c.current) ||
                  void 0 === t ||
                  t.activateUploadDialogue(),
                  (0, p.trackForumChannelMediaUploaderClicked)({
                    isMobile: !1,
                  });
              }
            },
            children: [
              (0, s.jsx)(d.default, {
                className: N.fileInput,
                ref: c,
                onChange: e => {
                  null == l || l(),
                    (0, T.promptToUpload)(
                      e.currentTarget.files,
                      m,
                      x.DraftType.FirstThreadMessage,
                      { requireConfirm: !0 }
                    ),
                    _.ComponentDispatch.dispatch(
                      E.ComponentActions.TEXTAREA_FOCUS
                    ),
                    (e.currentTarget.value = null);
                },
                multiple: m.rateLimitPerUser <= 0,
                tabIndex: -1,
                "aria-hidden": !0,
              }),
              (0, s.jsx)(S.default, {
                width: 28,
                height: 28,
                className: N.uploadIcon,
              }),
            ],
          })
        );
      }
      function R(e) {
        let { channelId: t, closePopout: a } = e,
          [l, r] = n.useState(!1),
          { reducedMotion: d } = n.useContext(
            u.AccessibilityPreferencesContext
          ),
          g = (0, i.useSpring)({ from: d.enabled ? v : M, to: A, config: I }),
          x = (0, o.useStateFromStores)(
            [c.default],
            () => c.default.keyboardModeEnabled
          ),
          S = (0, o.useStateFromStores)([C.default], () =>
            C.default.getUploads(
              t,
              m.ChatInputTypes.CREATE_FORUM_POST.drafts.type
            )
          );
        return (0, s.jsx)(i.animated.div, {
          className: N.popoutContainer,
          onMouseLeave: () => {
            !l && a();
          },
          style: g,
          children: (0, s.jsxs)(u.ScrollerThin, {
            orientation: "horizontal",
            className: N.popout,
            paddingFix: !1,
            fade: !0,
            children: [
              (0, s.jsx)(j, {
                channelId: t,
                onClick: () => {
                  r(!0);
                },
                onClose: () => {
                  r(!1), a();
                },
              }),
              (0, s.jsx)("div", {
                className: N.uploads,
                children: S.map(e =>
                  (0, s.jsx)(
                    f.default,
                    {
                      channelId: t,
                      draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                      upload: e,
                      keyboardModeEnabled: x,
                      hideFileName: !0,
                      size: h.AttachmentListItemSizes.SMALL,
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      function O(e) {
        let { channelId: t } = e,
          [a, l] = n.useState(!1),
          r = (0, o.useStateFromStores)([C.default], () =>
            C.default.getUploads(
              t,
              m.ChatInputTypes.CREATE_FORUM_POST.drafts.type
            )
          ),
          i = r.length,
          u = i > 0;
        n.useEffect(() => {
          a && !u && l(!1);
        }, [a, u]);
        let d = () => {
          u && l(!0);
        };
        return (0, s.jsxs)("div", {
          className: N.container,
          children: [
            u
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(f.UploadIcon, {
                      upload: r[0],
                      size: h.AttachmentListItemSizes.SMALL,
                      onMouseEnter: d,
                    }),
                    !a &&
                      (0, s.jsx)("div", { className: N.badge, children: i }),
                  ],
                })
              : (0, s.jsx)(j, { onMouseEnter: d, channelId: t }),
            a &&
              (0, s.jsx)(R, {
                channelId: t,
                closePopout: () => {
                  l(!1);
                },
              }),
          ],
        });
      }
    },
    530474: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eh;
          },
        }),
        a("222007"),
        a("843762");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("627445"),
        o = a.n(i),
        u = a("16470"),
        d = a("974667"),
        c = a("942367"),
        m = a("446674"),
        h = a("77078"),
        f = a("295426"),
        g = a("81594"),
        x = a("850391"),
        C = a("740483"),
        S = a("681060"),
        _ = a("830618"),
        T = a("939563"),
        p = a("236003"),
        E = a("549558"),
        N = a("884351"),
        M = a("39331"),
        v = a("82080"),
        A = a("328511"),
        I = a("467094"),
        j = a("24337"),
        R = a("967241"),
        O = a("517141"),
        F = a("719926"),
        b = a("474643"),
        L = a("957255"),
        P = a("401848"),
        y = a("585722"),
        D = a("697218"),
        U = a("837899"),
        w = a("213523"),
        k = a("381546"),
        H = a("462579"),
        B = a("867544"),
        G = a("660074"),
        V = a("987772"),
        z = a("229915"),
        W = a("547896"),
        K = a("378765"),
        Y = a("718422"),
        X = a("412861"),
        Z = a("119161"),
        q = a("404607"),
        Q = a("706065"),
        J = a("680986"),
        $ = a("763245"),
        ee = a("867965"),
        et = a("532308"),
        ea = a("1999"),
        es = a("578198"),
        en = a("90625"),
        el = a("337113"),
        er = a("589455"),
        ei = a("953371"),
        eo = a("49111"),
        eu = a("724210"),
        ed = a("782340"),
        ec = a("528282");
      let em = x.ChatInputTypes.CREATE_FORUM_POST;
      function eh(e) {
        let {
            parentChannel: t,
            isSearchLoading: a,
            onChange: l,
            canCreatePost: i,
            inputRef: o,
          } = e,
          {
            textAreaState: d,
            formOpen: c,
            previewing: f,
          } = (0, es.useForumPostComposerStore)(e => {
            let { textAreaState: t, formOpen: a, previewing: s } = e;
            return { textAreaState: t, formOpen: a, previewing: s };
          }, u.default),
          [g, x] = n.useState(null),
          C = n.useContext(K.ComponentDispatchGroupContext),
          S = n.useCallback(() => {
            C.bumpDispatchPriority();
          }, [C]),
          _ = (0, m.useStateFromStores)([L.default], () =>
            L.default.can(eo.Permissions.ATTACH_FILES, t)
          ),
          T = (0, m.useStateFromStoresArray)([y.default], () =>
            y.default.getUploads(t.id, b.DraftType.FirstThreadMessage)
          ),
          M = c && _ && i,
          v = (null == t ? void 0 : t.isMediaChannel()) === !0,
          j = (function (e, t) {
            let a = (0, es.useForumPostComposerStoreApi)(),
              s = (0, J.useChannelTemplate)(e),
              l = n.useCallback(() => {
                let {
                  formOpen: n,
                  setFormOpenFromUserAction: l,
                  name: r,
                  textAreaState: i,
                  hasClickedForm: o,
                } = a.getState();
                !n &&
                  (setTimeout(() => {
                    if (t.current instanceof h.TextAreaAutosize) {
                      var e, a, s, n;
                      null === (a = t.current) ||
                        void 0 === a ||
                        null === (e = a._textArea) ||
                        void 0 === e ||
                        e.setSelectionRange(r.length, r.length),
                        null === (n = t.current) ||
                          void 0 === n ||
                          null === (s = n._textArea) ||
                          void 0 === s ||
                          s.focus();
                    }
                  }, 0),
                  ((o && r.length > 0) ||
                    (i.textValue.trim().length > 0 &&
                      i.textValue.trim() !== s) ||
                    y.default.getUploads(e.id, b.DraftType.FirstThreadMessage)
                      .length > 0) &&
                    l());
              }, [a, e.id, s, t]);
            return l;
          })(t, o),
          F = (function (e) {
            let { formOpen: t } = (0, es.useForumPostComposerStore)(e => {
                let { formOpen: t } = e;
                return { formOpen: t };
              }, u.default),
              a = (0, es.useForumPostComposerStoreApi)(),
              s = (0, O.useCreateForumPost)({ parentChannel: e });
            n.useEffect(() => {
              let { setNameError: e, setMessageError: t } = a.getState();
              e(null), t(null);
            }, [t, a]);
            let l = n.useCallback(
              (t, s, n) => {
                let { name: l, textAreaState: r } = a.getState();
                null == t && (t = r.textValue), (t = t.trim());
                let { content: i } = N.default.parse(e, t);
                if (((t = i), null == s || 0 === s.length)) {
                  var o;
                  s =
                    null ===
                      (o = A.default.getStickerPreview(e.id, em.drafts.type)) ||
                    void 0 === o
                      ? void 0
                      : o.map(e => e.id);
                }
                if (
                  ((null == n || 0 === n.length) &&
                    (n = y.default.getUploads(
                      e.id,
                      b.DraftType.FirstThreadMessage
                    )),
                  null != n && n.length > 0 && e.isMediaChannel())
                ) {
                  let e = n.findIndex(e => !0 === e.isThumbnail);
                  if (e > -1) {
                    let t = n[e];
                    n.splice(e, 1), n.unshift(t);
                  }
                }
                let u = 0 === l.length,
                  d =
                    (null == t || 0 === t.length) &&
                    (null == s || 0 === s.length) &&
                    0 === n.length;
                return {
                  content: t,
                  stickers: s,
                  uploads: n,
                  hasNameError: u,
                  hasMessageError: d,
                };
              },
              [e, a]
            );
            return n.useCallback(
              async (t, n, r) => {
                let {
                    setNameError: i,
                    setMessageError: o,
                    setSubmitting: u,
                    resetFormState: d,
                    formOpen: c,
                    setFormOpen: m,
                    setPreviewing: h,
                    setFormOpenFromUserAction: f,
                    setGuidelinesOpen: g,
                  } = a.getState(),
                  x = Q.default.hasSeen(e.id);
                if (!c)
                  return (
                    (0, ee.trackForumCreateNewPostClick)({
                      guildId: e.guild_id,
                      channelId: e.id,
                    }),
                    !x && a.getState().setGuidelinesOpen(!0),
                    f(),
                    { shouldClear: !1, shouldRefocus: !1 }
                  );
                let {
                  content: C,
                  stickers: S,
                  uploads: _,
                  hasNameError: T,
                  hasMessageError: p,
                } = l(t, n, r);
                if (
                  (i(T ? (0, Z.makeEmptyTitleError)() : null),
                  o(p ? (0, Z.makeEmptyMessageError)() : null),
                  T || p)
                )
                  return { shouldClear: !1, shouldRefocus: !0 };
                try {
                  u(!0);
                  let { valid: t } = await (0, Y.applyChatRestrictions)({
                    content: C,
                    stickers: S,
                    uploads: _,
                    type: em,
                    channel: e,
                  });
                  if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                  let a = await s(C, S, _);
                  return (
                    (0, R.openThreadSidebarForViewing)(a),
                    q.default.resort(e.id),
                    (0, I.clearStickerPreview)(e.id, em.drafts.type),
                    d(),
                    m(!1),
                    h(!1),
                    Q.default.markAsSeen(e.id),
                    g(!1),
                    { shouldClear: !0, shouldRefocus: !1 }
                  );
                } catch (t) {
                  var E, N;
                  return (
                    (null === (E = t.body) || void 0 === E
                      ? void 0
                      : E.code) === eo.AbortCodes.AUTOMOD_TITLE_BLOCKED
                      ? i((0, Z.makeAutomodViolationError)(t.body, e))
                      : (null === (N = t.body) || void 0 === N
                          ? void 0
                          : N.code) === eo.AbortCodes.AUTOMOD_MESSAGE_BLOCKED &&
                        o((0, Z.makeAutomodViolationError)(t.body, e)),
                    { shouldClear: !1, shouldRefocus: !0 }
                  );
                } finally {
                  u(!1);
                }
              },
              [s, l, e, a]
            );
          })(t);
        return (
          n.useLayoutEffect(l, [c, d, T, l]),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              "aria-label": i
                ? ed.default.Messages.NEW_FORUM_POST
                : ed.default.Messages.SEARCH,
              className: r(ec.container, { [ec.collapsed]: !c }),
              onClick: !c && i ? j : void 0,
              children: (0, s.jsxs)("form", {
                onMouseDown: S,
                onFocus: S,
                onSubmit: e => {
                  e.preventDefault(), i && F();
                },
                children: [
                  (0, s.jsxs)("div", {
                    className: ec.formContainer,
                    children: [
                      (0, s.jsx)(ef, {
                        parentChannel: t,
                        isSearchLoading: a,
                        inputRef: o,
                      }),
                      (0, s.jsxs)("div", {
                        className: f ? ec.previewForm : ec.form,
                        children: [
                          (0, s.jsx)(eg, {
                            editorRef: g,
                            parentChannel: t,
                            isSearchLoading: a,
                            inputRef: o,
                            canCreatePost: i,
                          }),
                          c &&
                            (0, s.jsx)(eS, {
                              editorRef: g,
                              setEditorRef: x,
                              parentChannel: t,
                              submit: F,
                              disabled: !i,
                            }),
                          f && (0, s.jsx)(e_, {}),
                        ],
                      }),
                      M &&
                        (v
                          ? (0, s.jsx)(E.MediaPostThumbnail, {
                              parentChannel: t,
                            })
                          : (0, s.jsx)(ea.default, { channelId: t.id })),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ec.form,
                    children: [
                      M && v && (0, s.jsx)(p.default, { parentChannel: t }),
                      c &&
                        (0, s.jsx)(ep, {
                          className: ec.horizontalPadding,
                          parentChannel: t,
                          canCreatePost: i,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let ef = n.memo(function (e) {
          let { parentChannel: t, isSearchLoading: a, inputRef: l } = e,
            {
              formOpen: r,
              name: i,
              textAreaState: o,
              hasClickedForm: d,
              submitting: c,
            } = (0, es.useForumPostComposerStore)(e => {
              let {
                formOpen: t,
                nameError: a,
                name: s,
                previewing: n,
                textAreaState: l,
                hasClickedForm: r,
                submitting: i,
              } = e;
              return {
                formOpen: t,
                nameError: a,
                name: s,
                textAreaState: l,
                previewing: n,
                hasClickedForm: r,
                submitting: i,
              };
            }, u.default),
            m = (0, es.useForumPostComposerStoreApi)(),
            x = (0, J.useChannelTemplate)(t),
            C = n.useCallback(() => {
              var e;
              m.getState().resetFormState(),
                f.default.clearDraft(t.id, b.DraftType.ThreadSettings),
                f.default.clearDraft(t.id, b.DraftType.FirstThreadMessage),
                g.default.clearAll(t.id, b.DraftType.FirstThreadMessage),
                m.getState().setFormOpen(!1),
                m.getState().setBodyFocused(!1),
                m.getState().setTitleFocused(!1),
                m.getState().setHasClickedForm(!1),
                m.getState().setPreviewing(!1),
                null === (e = l.current) || void 0 === e || e.blur(),
                (0, ee.trackForumNewPostCleared)({
                  guildId: t.guild_id,
                  channelId: t.id,
                });
            }, [m, t.id, t.guild_id, l]),
            S = n.useMemo(
              () =>
                a && !r
                  ? (0, s.jsx)(ev, {})
                  : a ||
                      r ||
                      (0 !== o.textValue.trim().length &&
                        o.textValue.trim() !== x)
                    ? !r &&
                      (i.trim().length > 0 ||
                        (o.textValue.trim().length > 0 &&
                          o.textValue.trim() !== x) ||
                        y.default.getUploads(
                          t.id,
                          b.DraftType.FirstThreadMessage
                        ).length > 0) &&
                      d
                      ? (0, s.jsx)(V.default, {
                          className: ec.pencilIcon,
                          width: 24,
                          height: 24,
                        })
                      : c
                        ? (0, s.jsx)(k.default, {
                            className: ec.closeIconDisabled,
                            width: 24,
                            height: 24,
                          })
                        : (0, s.jsx)(h.Tooltip, {
                            text: ed.default.Messages.FORUM_CLEAR_ALL,
                            children: e =>
                              (0, s.jsx)(h.Clickable, {
                                ...e,
                                onClick: C,
                                children: (0, s.jsx)(k.default, {
                                  className: ec.closeIcon,
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                          })
                    : (0, s.jsx)(z.default, {
                        className: ec.searchIcon,
                        width: 24,
                        height: 24,
                      }),
              [a, r, d, i, o.textValue, C, t.id, x, c]
            );
          return (0, s.jsx)("div", {
            className: ec.prefixElement,
            children: S,
          });
        }),
        eg = n.memo(function (e) {
          let {
              parentChannel: t,
              inputRef: a,
              canCreatePost: l,
              editorRef: r,
            } = e,
            {
              formOpen: i,
              nameError: d,
              name: c,
              textAreaState: f,
              previewing: g,
            } = (0, es.useForumPostComposerStore)(e => {
              let {
                formOpen: t,
                nameError: a,
                name: s,
                previewing: n,
                textAreaState: l,
                hasClickedForm: r,
                submitting: i,
              } = e;
              return {
                formOpen: t,
                nameError: a,
                name: s,
                textAreaState: l,
                previewing: n,
                hasClickedForm: r,
                submitting: i,
              };
            }, u.default),
            x = (0, es.useForumPostComposerStoreApi)(),
            C = null != t.topic && 0 !== t.topic.length,
            S = Q.default.hasSeen(t.id),
            _ = (0, J.useChannelTemplate)(t),
            T = (0, m.useStateFromStores)([D.default], () =>
              D.default.getCurrentUser()
            );
          o(null != T, "current user cannot be null");
          (0, K.useComponentAction)({
            event: eo.ComponentActions.FOCUS_COMPOSER_TITLE,
            handler: () => {
              var e;
              let t =
                a.current instanceof h.TextAreaAutosize
                  ? null === (e = a.current) || void 0 === e
                    ? void 0
                    : e._textArea
                  : a.current;
              null == t || t.focus(),
                x.getState().setTitleFocused(!0),
                x.getState().setFormOpen(!0),
                x.getState().setHasClickedForm(!0);
            },
          });
          let p = n.useCallback(
              e => {
                let a = e.clipboardData.files[0];
                null != a &&
                  a.type.startsWith("image/") &&
                  (e.preventDefault(),
                  (0, X.promptToUpload)([a], t, b.DraftType.FirstThreadMessage),
                  x.getState().setFormOpenFromUserAction());
              },
              [t, x]
            ),
            E = (0, Z.renderError)(d, { content: c });
          return (0, s.jsxs)("div", {
            className: ec.titleContainer,
            onPaste: p,
            children: [
              i && g
                ? (0, s.jsx)(h.Heading, {
                    variant: "heading-md/semibold",
                    className: ec.title,
                    children: c,
                  })
                : (0, s.jsx)(h.TextArea, {
                    value: c,
                    placeholder: l
                      ? i ||
                        (f.textValue.length > 0 && f.textValue.trim() !== _)
                        ? ed.default.Messages
                            .FORUM_POST_TITLE_PLACEHOLDER_FOCUSED
                        : ed.default.Messages
                            .FORUM_POST_TITLE_PLACEHOLDER_SEARCH
                      : ed.default.Messages.SEARCH,
                    flex: !0,
                    autosize: i,
                    rows: 1,
                    showCharacterCount: !1,
                    showRemainingCharacterCount: !1,
                    maxLength: eo.MAX_CHANNEL_NAME_LENGTH,
                    onChange: e => {
                      let a = (0, j.default)(e, !1);
                      x.getState().setName(a);
                      let s = 0 === a.trim().length,
                        n = 0 === f.textValue.trim().length,
                        l = f.textValue.trim() === _;
                      s && (n || l) && x.getState().setHasClickedForm(!1),
                        !i && q.default.updateForumSearchQuery(t.id, a);
                    },
                    onFocus: () => {
                      x.getState().setTitleFocused(!0),
                        x.getState().setBodyFocused(!1);
                    },
                    onBlur: () => {
                      x.getState().setTitleFocused(!1);
                      let e = (0, j.default)(c, !0);
                      e !== c &&
                        (x.getState().setName(e),
                        !i && q.default.updateForumSearchQuery(t.id, e));
                    },
                    onKeyDown: e => {
                      var s, n;
                      "Enter" === e.key &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        i && c.length > 0
                          ? null == r || r.focus()
                          : l &&
                            e.shiftKey &&
                            ((0, ee.trackForumCreateNewPostKeybindUsed)({
                              guildId: t.guild_id,
                              channelId: t.id,
                            }),
                            C && !S && x.getState().setGuidelinesOpen(!0),
                            x.getState().setFormOpenFromUserAction(),
                            c.trim().length > 0 &&
                              (x.getState().setBodyFocused(!0),
                              null == r || r.focus())));
                      let o =
                        a.current instanceof h.TextAreaAutosize
                          ? null === (s = a.current) || void 0 === s
                            ? void 0
                            : s._textArea
                          : a.current;
                      if ("Home" === e.key || "End" === e.key) {
                        if (null == o) return;
                        if (
                          (e.preventDefault(),
                          e.stopPropagation(),
                          "Home" === e.key)
                        )
                          o.setSelectionRange(0, 0);
                        else {
                          let e = c.length;
                          o.setSelectionRange(e, e);
                        }
                      }
                      "Escape" === e.key &&
                        !x.getState().submitting &&
                        (null === (n = a.current) || void 0 === n || n.blur(),
                        x.getState().setFormOpen(!1),
                        x.getState().setTitleFocused(!1),
                        x.getState().setBodyFocused(!1),
                        x.getState().setPreviewing(!1));
                    },
                    error: E,
                    className: ec.title,
                    inputRef: a,
                  }),
              i
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(ex, { parentChannel: t }),
                      (0, s.jsx)(eE, { parentChannel: t, canCreatePost: l }),
                    ],
                  }),
            ],
          });
        });
      function ex(e) {
        let { parentChannel: t } = e,
          { guidelinesOpen: a } = (0, es.useForumPostComposerStore)(e => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
          }),
          n = (0, es.useForumPostComposerStoreApi)(),
          l = null != t.topic && 0 !== t.topic.length,
          i = () => {
            n.getState().setGuidelinesOpen(!a);
          };
        return l
          ? (0, s.jsx)(h.Tooltip, {
              text: ed.default.Messages.FORUM_POST_GUIDELINES_TITLE,
              children: e =>
                (0, s.jsx)(h.Clickable, {
                  ...e,
                  onClick: i,
                  className: r(ec.forumPostFormButton, {
                    [ec.forumPostFormButtonActive]: a,
                  }),
                  children: (0, s.jsx)(w.default, {
                    ...e,
                    width: 24,
                    height: 24,
                  }),
                }),
            })
          : null;
      }
      let eC = n.memo(function (e) {
          let { parentChannel: t, textValue: a } = e,
            n = new F.default({ channelId: t.id, content: a }),
            { content: l } = (0, M.default)(n, {
              hideSimpleEmbedContent: !0,
              isInteracting: !1,
              formatInline: !1,
              allowList: !0,
              allowHeading: !0,
              previewLinkTarget: !0,
            }),
            i = (0, v.default)({ message: n, channel: t }, l, !1);
          return (0, s.jsx)("div", {
            className: r(ec.channelTextAreaInner, ec.previewTextArea),
            children: i,
          });
        }),
        eS = n.memo(function (e) {
          let {
              parentChannel: t,
              submit: a,
              disabled: l = !1,
              editorRef: i,
              setEditorRef: d,
            } = e,
            c = (0, m.useStateFromStores)([D.default], () =>
              D.default.getCurrentUser()
            );
          o(null != c, "current user cannot be null");
          let {
              messageError: f,
              previewing: g,
              textAreaState: x,
              bodyFocused: C,
              formOpen: _,
            } = (0, es.useForumPostComposerStore)(e => {
              let {
                messageError: t,
                textAreaState: a,
                previewing: s,
                bodyFocused: n,
                formOpen: l,
              } = e;
              return {
                messageError: t,
                textAreaState: a,
                previewing: s,
                bodyFocused: n,
                formOpen: l,
              };
            }, u.default),
            p = (0, es.useForumPostComposerStoreApi)();
          n.useEffect(
            () => () =>
              (0, ee.maybeTrackForumNewPostDraftCreated)({
                guildId: t.guild_id,
                channelId: t.id,
              }),
            [t.guild_id, t.id]
          );
          let E = n.useCallback(() => {
              p.getState().setBodyFocused(!0);
            }, [p]),
            N = n.useCallback(() => {
              p.getState().setBodyFocused(!1);
            }, [p]),
            M = n.useCallback(
              (e, t, a) => {
                let { setTextAreaState: s } = p.getState();
                s({ textValue: t, richValue: a });
              },
              [p]
            ),
            v = n.useCallback(
              e => {
                let { value: t, uploads: s, stickers: n } = e;
                return a(t, n, s);
              },
              [a]
            );
          (0, K.useComponentAction)({
            event: eo.ComponentActions.TEXTAREA_FOCUS,
            handler: E,
          }),
            (0, K.useComponentAction)({
              event: eo.ComponentActions.TEXTAREA_BLUR,
              handler: N,
            });
          let A = (0, Z.renderError)(f, { content: x.textValue });
          return (0, s.jsx)("div", {
            className: ec.bodyContainer,
            children: (0, s.jsxs)("div", {
              className: ec.contentContainer,
              children: [
                g
                  ? (0, s.jsx)(eC, { parentChannel: t, textValue: x.textValue })
                  : (0, s.jsx)("div", {
                      onClick: E,
                      children: (0, s.jsx)(S.default, {
                        type: em,
                        setEditorRef: d,
                        channel: t,
                        placeholder:
                          ed.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                        textValue: x.textValue,
                        richValue: x.richValue,
                        focused: C,
                        className: ec.channelTextArea,
                        innerClassName: r(ec.channelTextAreaInner, {
                          [ec.channelTextAreaInnerError]: null != A,
                        }),
                        onChange: M,
                        onSubmit: v,
                        promptToUpload: X.promptToUpload,
                        disabled: l,
                        onKeyDown: e => {
                          if (
                            (("ArrowUp" === e.key || "ArrowDown" === e.key) &&
                              e.stopPropagation(),
                            "Home" === e.key || "End" === e.key)
                          ) {
                            if (null == i) return;
                            e.preventDefault(), e.stopPropagation();
                            let t = i.getSlateEditor();
                            if (null == t) return;
                            "Home" === e.key
                              ? T.SlateTransforms.resetSelectionToStart(t)
                              : T.SlateTransforms.resetSelectionToEnd(t);
                          }
                          _ &&
                            "Escape" === e.key &&
                            !p.getState().submitting &&
                            (null == i || i.blur(),
                            p.getState().setFormOpen(!1),
                            p.getState().setTitleFocused(!1),
                            p.getState().setBodyFocused(!1),
                            p.getState().setPreviewing(!1));
                        },
                        autoCompletePosition: "bottom",
                      }),
                    }),
                (0, s.jsx)(h.InputError, { error: A }),
              ],
            }),
          });
        });
      function e_() {
        return (0, s.jsx)("div", {
          className: ec.previewModeIndicator,
          children: (0, s.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: ed.default.Messages.PREVIEW_MODE,
          }),
        });
      }
      function eT() {
        let e = (0, $.useIsForumPostPreviewEnabled)(),
          { previewing: t } = (0, es.useForumPostComposerStore)(e => {
            let { previewing: t } = e;
            return { previewing: t };
          }),
          a = (0, es.useForumPostComposerStoreApi)(),
          l = n.useCallback(() => {
            a.getState().setPreviewing(!t),
              (0, ee.trackForumPreviewPostClicked)();
          }, [t, a]);
        return e
          ? (0, s.jsx)(h.Tooltip, {
              text: t
                ? ed.default.Messages.EXIT_PREVIEW
                : ed.default.Messages.PREVIEW,
              children: e =>
                (0, s.jsx)(h.Clickable, {
                  ...e,
                  onClick: l,
                  className: r(ec.forumPostFormButton, {
                    [ec.forumPostFormButtonActive]: t,
                  }),
                  children: t
                    ? (0, s.jsx)(B.default, { ...e, width: 24, height: 24 })
                    : (0, s.jsx)(H.default, { ...e, width: 24, height: 24 }),
                }),
            })
          : null;
      }
      let ep = n.memo(function (e) {
        let { parentChannel: t, canCreatePost: a, className: l } = e,
          {
            textAreaState: r,
            appliedTags: i,
            name: o,
          } = (0, es.useForumPostComposerStore)(e => {
            let { textAreaState: t, appliedTags: a, name: s } = e;
            return { textAreaState: t, appliedTags: a, name: s };
          }),
          { rateLimitPerUser: u } = t,
          d = u > 0,
          c = (0, m.useStateFromStores)([P.default], () =>
            P.default.getSlowmodeCooldownGuess(
              t.id,
              P.SlowmodeType.CreateThread
            )
          ),
          f = (0, m.useStateFromStores)(
            [L.default],
            () =>
              L.default.can(eo.Permissions.MANAGE_THREADS, t) ||
              L.default.can(eo.Permissions.MANAGE_CHANNELS, t)
          ),
          g =
            t.hasFlag(eu.ChannelFlags.REQUIRE_TAG) &&
            0 === i.size &&
            o.length > 0 &&
            r.textValue.length > 0,
          x = (0, es.useForumPostComposerStoreApi)(),
          S = n.useCallback(() => {
            x.getState().setBodyFocused(!1);
          }, [x]),
          T = n.useMemo(
            () => "" !== o.trim() && "" !== r.textValue.trim(),
            [o, r.textValue]
          );
        return (
          n.useEffect(() => {
            !T && x.getState().setPreviewing(!1);
          }, [T, x]),
          (0, s.jsxs)("div", {
            className: l,
            children: [
              (0, s.jsx)(eM, { parentChannel: t }),
              (0, s.jsx)("div", { className: ec.tagsDivider }),
              (0, s.jsxs)("div", {
                className: ec.controlsContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: ec.controls,
                    children: [
                      (0, s.jsxs)("div", {
                        className: ec.wrappedControls,
                        children: [
                          g &&
                            (0, s.jsx)(h.Text, {
                              variant: "text-sm/normal",
                              color: "text-danger",
                              children:
                                ed.default.Messages
                                  .FORUM_POST_TAG_REQUIRED_ERROR,
                            }),
                          (0, s.jsx)(_.default, {
                            type: em,
                            textValue: r.textValue,
                            className: ec.characterCount,
                          }),
                          d &&
                            (0, s.jsx)(el.default, {
                              rateLimitPerUser: u,
                              slowmodeCooldownGuess: c,
                              isBypassSlowmode: f,
                              leadingIcon: !0,
                            }),
                        ],
                      }),
                      (0, s.jsx)(ex, { parentChannel: t }),
                      T && (0, s.jsx)(eT, {}),
                      (0, s.jsx)(eE, {
                        parentChannel: t,
                        disableIfInvalid: !0,
                        canCreatePost: a,
                        disabled: d && !f && c > 0,
                      }),
                    ],
                  }),
                  (0, s.jsx)(
                    C.default,
                    { type: em, className: ec.expressionPicker, onClick: S },
                    "expression"
                  ),
                ],
              }),
            ],
          })
        );
      });
      function eE(e) {
        let {
            parentChannel: t,
            canCreatePost: a,
            disabled: n,
            disableIfInvalid: l = !1,
          } = e,
          {
            submitting: r,
            textAreaState: i,
            name: o,
            appliedTags: u,
            formOpen: d,
          } = (0, es.useForumPostComposerStore)(e => {
            let {
              submitting: t,
              textAreaState: a,
              name: s,
              appliedTags: n,
              formOpen: l,
            } = e;
            return {
              submitting: t,
              textAreaState: a,
              name: s,
              appliedTags: n,
              formOpen: l,
            };
          }),
          c =
            t.hasFlag(eu.ChannelFlags.REQUIRE_TAG) &&
            0 === u.size &&
            o.length > 0 &&
            i.textValue.length > 0,
          f = (0, m.useStateFromStoresArray)([y.default], () =>
            y.default.getUploads(t.id, b.DraftType.FirstThreadMessage)
          ),
          g = i.textValue.trim().length > 0 || f.length > 0,
          x = !c && g && o.trim().length > 0;
        if (__OVERLAY__) return null;
        let C = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, s.jsxs)(h.Button, {
            ...e,
            size: h.Button.Sizes.SMALL,
            className: ec.submitButton,
            innerClassName: ec.submitButtonInner,
            type: "submit",
            submitting: r,
            disabled: (l && !x) || n || !a,
            children: [
              (0, s.jsx)(G.default, {
                className: ec.submitIcon,
                width: 16,
                height: 16,
              }),
              (0, s.jsx)(h.Text, {
                variant: "text-md/semibold",
                color: "none",
                children: d
                  ? ed.default.Messages.SUBMIT_POST
                  : ed.default.Messages.NEW_FORUM_POST_NEW,
              }),
            ],
          });
        };
        return a
          ? C()
          : (0, s.jsx)(h.Tooltip, {
              text: ed.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
              children: e => C(e),
            });
      }
      function eN() {
        return Promise.resolve();
      }
      function eM(e) {
        let { parentChannel: t } = e,
          {
            appliedTags: a,
            toggleAppliedTag: l,
            setPopoutOpen: i,
          } = (0, es.useForumPostComposerStore)(e => {
            let { appliedTags: t, toggleAppliedTag: a, setPopoutOpen: s } = e;
            return { appliedTags: t, toggleAppliedTag: a, setPopoutOpen: s };
          }, u.default),
          o = a.size >= ei.MAX_FORUM_POST_TAGS,
          m = (0, d.default)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eN,
            scrollToEnd: eN,
            orientation: c.Orientations.HORIZONTAL,
          }),
          { containerRef: f, containerWidth: g } = (0, er.default)(),
          x = n.useRef(null),
          [C, S] = n.useState(!0),
          _ = (0, J.useVisibleForumTags)(t),
          [T, p] = n.useState(0);
        return (n.useLayoutEffect(() => {
          var e;
          let t = x.current,
            a =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0],
            s = null == t || null == a || a.clientHeight > t.clientHeight;
          if (
            (s !== C && S(s),
            s && null != f.current && null != a && null != a.children)
          ) {
            let { left: e, top: t } = f.current.getBoundingClientRect(),
              s = 0;
            for (let n of a.children) {
              let { right: a, top: l, height: r } = n.getBoundingClientRect();
              if (l - t > r) break;
              a - e > s && (s = a - e);
            }
            p(s);
          }
        }, [_, C, f, g]),
        0 === _.length)
          ? null
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className: ec.tagsContainer,
                ref: f,
                children: [
                  (0, s.jsx)(W.default, {
                    className: ec.tagsIcon,
                    width: 16,
                    height: 16,
                  }),
                  (0, s.jsx)("div", {
                    className: ec.tagList,
                    ref: x,
                    children: (0, s.jsx)(d.ListNavigatorProvider, {
                      navigator: m,
                      children: (0, s.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                          let { ref: t, ...n } = e;
                          return (0, s.jsx)("div", {
                            className: ec.tagListInner,
                            ref: t,
                            ...n,
                            children: _.map(e =>
                              (0, s.jsx)(
                                en.default,
                                {
                                  ariaLabel:
                                    ed.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format(
                                      { tagName: e.name }
                                    ),
                                  tag: e,
                                  onClick:
                                    o && !a.has(e.id) ? void 0 : () => l(e.id),
                                  disabled:
                                    !a.has(e.id) &&
                                    a.size >= ei.MAX_FORUM_POST_TAGS,
                                  selected: a.has(e.id),
                                  size: en.default.Sizes.SMALL,
                                },
                                e.id
                              )
                            ),
                          });
                        },
                      }),
                    }),
                  }),
                  C &&
                    (0, s.jsx)(h.Popout, {
                      onRequestOpen: () => i(!0),
                      onRequestClose: () => i(!1),
                      renderPopout: e => {
                        let { closePopout: n } = e;
                        return (0, s.jsx)(et.default, {
                          parentChannel: t,
                          appliedTags: a,
                          maxTagsApplied: o,
                          onSelectTag: l,
                          onClose: n,
                        });
                      },
                      position: "bottom",
                      align: "center",
                      children: e =>
                        (0, s.jsxs)(h.Button, {
                          ...e,
                          size: h.Button.Sizes.TINY,
                          className: ec.tagsButton,
                          innerClassName: ec.tagsButtonInner,
                          style: { left: T },
                          look: h.Button.Looks.LINK,
                          "aria-label": ed.default.Messages.ADD_TAG_FORUM_POST,
                          children: [
                            ed.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                            (0, s.jsx)(U.default, { width: 16 }),
                          ],
                        }),
                    }),
                  (0, s.jsxs)(h.Button, {
                    size: h.Button.Sizes.TINY,
                    className: r(ec.tagsButton, ec.tagsButtonPlaceholder),
                    innerClassName: ec.tagsButtonInner,
                    look: h.Button.Looks.LINK,
                    "aria-label": ed.default.Messages.ADD_TAG_FORUM_POST,
                    children: [
                      ed.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                      (0, s.jsx)(U.default, { width: 16 }),
                    ],
                  }),
                ],
              }),
            });
      }
      function ev(e) {
        let { style: t, className: a } = e;
        return (0, s.jsx)("div", {
          className: a,
          style: t,
          children: (0, s.jsx)("div", { className: ec.loader }),
        });
      }
    },
    592633: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return V;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("335710"),
        o = a("446674"),
        u = a("669491"),
        d = a("77078"),
        c = a("125667"),
        m = a("955735"),
        h = a("963119"),
        f = a("651693"),
        g = a("605160"),
        x = a("70845"),
        C = a("933629"),
        S = a("845579"),
        _ = a("982108"),
        T = a("42203"),
        p = a("957255"),
        E = a("594098"),
        N = a("887718"),
        M = a("95689"),
        v = a("132755"),
        A = a("497880"),
        I = a("956089"),
        j = a("680986"),
        R = a("612278"),
        O = a("791234"),
        F = a("512630"),
        b = a("152637"),
        L = a("363622"),
        P = a("855455"),
        y = a("136460"),
        D = a("601016"),
        U = a("485055"),
        w = a("390083"),
        k = a("953371"),
        H = a("49111"),
        B = a("782340"),
        G = a("42903"),
        V = n.memo(function (e) {
          let {
              id: t,
              threadId: a,
              goToThread: n,
              overrideMedia: l,
              className: r,
              coords: i,
              gridCoords: u,
              gridSectionBoundaries: d,
              observePostVisibilityAnalytics: c,
            } = e,
            m = (0, o.useStateFromStores)([T.default], () =>
              T.default.getChannel(a)
            );
          return null == m
            ? null
            : (0, s.jsx)(z, {
                id: t,
                channel: m,
                goToThread: n,
                overrideMedia: l,
                className: r,
                coords: i,
                gridCoords: u,
                observePostVisibilityAnalytics: c,
                gridSectionBoundaries: d,
              });
        });
      function z(e) {
        let {
            id: t,
            channel: a,
            goToThread: l,
            overrideMedia: c,
            className: m,
            coords: h,
            gridCoords: f,
            gridSectionBoundaries: g,
            observePostVisibilityAnalytics: C,
          } = e,
          E = (0, o.useStateFromStores)([T.default], () =>
            T.default.getChannel(a.parent_id)
          ),
          N = a.id,
          M = n.useRef(null),
          v = (0, o.useStateFromStores)(
            [_.default],
            () => _.default.getCurrentSidebarChannelId(a.parent_id) === a.id
          ),
          { firstMessage: A, loaded: F } = (0, R.useFirstForumPostMessage)(a),
          { firstMedia: P } = (0, j.useForumPostFirstMessageMarkup)({
            firstMessage: A,
            formatInline: !1,
            noStyleAndInteraction: !1,
          }),
          { messageCountText: V } = (0, j.useMessageCount)(a),
          { isNew: z, hasUnreads: K } = (0, j.useForumPostReadStates)(a),
          Y = n.useRef(null),
          { handleLeftClick: Z, handleRightClick: Q } = (0, w.default)({
            facepileRef: Y,
            goToThread: l,
            channel: a,
          });
        n.useEffect(() => {
          null == C || C(M.current, N);
        }, [C, N]);
        let J = (0, o.useStateFromStores)([p.default], () =>
            p.default.can(H.Permissions.MANAGE_MESSAGES, a)
          ),
          $ = S.GifAutoPlay.useSetting(),
          ee = S.RenderSpoilers.useSetting(),
          et = (0, x.default)(ee, J),
          ea = (0, O.useForumPostMediaThumbnail)(A, E, !1),
          [es, en] = (0, L.getFrameDimensions)(h.width - 2 * L.IMAGE_PADDING),
          el = (0, j.useLastActiveTimestamp)(
            a,
            i.ThreadSortOrder.CREATION_DATE,
            k.ForumTimestampFormats.POSTED_DURATION_AGO
          ),
          er = (0, b.useHighlightedChannelName)(a),
          ei = (null == A ? void 0 : A.blocked) || null == (null != c ? c : P),
          { onFocus: eo, ...eu } = (0, U.useForumGridItem)({
            id: t,
            row: f.row,
            column: f.column,
            section: f.section,
            boundaries: g,
          }),
          ed = a.isMediaPost();
        return (0, s.jsxs)("li", {
          ref: M,
          onClick: Z,
          onFocus: eo,
          onContextMenu: Q,
          className: r(G.container, m, { [G.isOpen]: v }),
          style: { ...h },
          children: [
            (0, s.jsx)(d.Clickable, {
              onClick: Z,
              focusProps: { ringTarget: M },
              onContextMenu: Q,
              "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
                title: a.name,
                count: V,
              }),
              className: G.focusTarget,
              ...eu,
            }),
            (0, s.jsxs)("div", {
              className: G.header,
              children: [
                (0, s.jsxs)("div", {
                  className: G.authorRow,
                  children: [
                    (0, s.jsxs)("div", {
                      className: G.rowGroup,
                      children: [
                        (0, s.jsx)(y.default, { channel: a, message: A }),
                        (0, s.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: G.postCreationTimestamp,
                          children: el,
                        }),
                      ],
                    }),
                    z
                      ? (0, s.jsx)(I.TextBadge, {
                          className: r(G.newBadge),
                          color: u.default.unsafe_rawColors.BRAND_260.css,
                          text: B.default.Messages.NEW,
                        })
                      : null,
                  ],
                }),
                (0, s.jsx)(d.HeadingLevel, {
                  children: (0, s.jsx)(d.Heading, {
                    variant: "heading-md/extrabold",
                    className: G.title,
                    color: K ? "header-primary" : "text-muted",
                    style: {
                      width: "".concat(
                        h.width - 2 * L.GRID_POST_CONTROLS_MARGIN,
                        "px"
                      ),
                    },
                    children: er,
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: G.postBody,
              children: (0, s.jsx)(d.FocusBlock, {
                children: ei
                  ? (0, s.jsx)(q, {
                      channel: a,
                      firstMessage: A,
                      isFirstMessageLoaded: F,
                      containerWidth: h.width,
                      hasUnreads: K,
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(X, {
                          mediaAttachments: ea,
                          globalSpoilerRenderSetting: et,
                          containerWidth: es,
                          containerHeight: ed ? es * (9 / 16) : en,
                          canAutoPlay: $,
                          shouldMaintainAspectRatio: ed,
                        }),
                        (0, s.jsx)("div", {
                          className: G.tagsRow,
                          children: (0, s.jsx)(D.default, {
                            channel: a,
                            tagsClassName: G.tagPill,
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            (0, s.jsx)("div", {
              className: G.footer,
              children: (0, s.jsx)(d.FocusBlock, {
                children: (0, s.jsx)(W, {
                  channel: a,
                  firstMessage: A,
                  facepileRef: Y,
                }),
              }),
            }),
          ],
        });
      }
      function W(e) {
        let { channel: t, facepileRef: a, firstMessage: n } = e,
          l = (0, j.useTypingUserIds)(t),
          r =
            (null == n ? void 0 : n.reactions) != null &&
            n.reactions.length > 0;
        return (0, s.jsxs)("div", {
          className: G.forumPostControls,
          children: [
            (0, s.jsxs)("div", {
              className: G.controlsGroup,
              children: [
                (0, s.jsx)("div", {
                  className: G.messageCountContainer,
                  children: (0, s.jsx)(b.MessageCount, {
                    channel: t,
                    iconSize: 16,
                    showReadState: !0,
                  }),
                }),
                l.length > 0
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("span", {
                          className: G.bullet,
                          children: "•",
                        }),
                        (0, s.jsxs)("div", {
                          className: G.typing,
                          children: [
                            (0, s.jsx)(b.Facepile, {
                              channel: t,
                              userIds: l,
                              facepileRef: a,
                            }),
                            (0, s.jsx)("div", {
                              className: G.dots,
                              children: (0, s.jsx)(d.Dots, {
                                themed: !0,
                                dotRadius: 2,
                              }),
                            }),
                            (0, s.jsx)(c.default, {
                              channel: t,
                              className: G.typingUsers,
                              renderDots: !1,
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, s.jsxs)("div", {
              className: G.controlsGroup,
              children: [
                r || null == n
                  ? null
                  : (0, s.jsx)(b.DefaultReaction, {
                      firstMessage: n,
                      channel: t,
                    }),
                null == n
                  ? null
                  : (0, s.jsx)(b.MostUsedReaction, {
                      firstMessage: n,
                      channel: t,
                    }),
              ],
            }),
          ],
        });
      }
      let K = e => e.preventDefault(),
        Y = n.memo(function (e) {
          return (0, s.jsx)(s.Fragment, {
            children: (0, C.renderImageComponent)(e),
          });
        }),
        X = n.memo(function (e) {
          let {
              mediaAttachments: t,
              globalSpoilerRenderSetting: a,
              containerWidth: l,
              containerHeight: i,
              canAutoPlay: o,
              shouldMaintainAspectRatio: u = !1,
            } = e,
            { containsVideo: d, containsGif: c } = n.useMemo(
              () => (0, O.messageContainsGifOrVideo)(t),
              [t]
            ),
            x = n.useMemo(
              () => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX),
              [t]
            ),
            C = (0, P.useImageContainerStyles)({
              numAttachments: x.length,
              containerWidth: l,
              containerHeight: i,
            }),
            S = (0, P.useImageDimensionStyles)({
              imageContainerStyles: C,
              containerWidth: l,
              containerHeight: i,
            }),
            _ = (0, h.useShouldRedactExplicitContentForForum)(),
            T = n.useMemo(
              () =>
                x.map((e, t) => {
                  var n;
                  let [l, i] = (0, g.getForumPostShouldObscure)(e, !a, _),
                    h = (0, g.getObscuredAlt)(i),
                    x = {
                      ...S[t],
                      src: e.src,
                      width: e.width,
                      height: e.height,
                      alt: null != e.alt && l ? h : e.alt,
                      onClick: K,
                      shouldRenderAccessory: !c && !d,
                    },
                    T = (0, f.isAnimatedImageUrl)(e.src)
                      ? "".concat(e.src, "?format=png")
                      : e.src,
                    p = o && !l ? e.src : T;
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: G.bodyMediaFrame,
                      style: C[t],
                      children: [
                        u
                          ? (0, s.jsx)(m.default, {
                              ...x,
                              src: p,
                              backgroundSrc: T,
                              aspectRatio: x.maxWidth / x.maxHeight,
                              alt:
                                null !== (n = x.alt) && void 0 !== n ? n : "",
                              className: r(G.mediaPostContainer, {
                                [G.obscured]: l,
                              }),
                              imageChildClassName: G.mediaPostThumbnail,
                            })
                          : e.src.startsWith("data:")
                            ? (0, s.jsx)(E.default, {
                                ...x,
                                className: G.mediaContainer,
                                imageClassName: r(G.thumbnailOverride, {
                                  [G.obscured]: l,
                                }),
                              })
                            : (0, s.jsx)(Y, {
                                ...x,
                                autoPlay: o && !l,
                                containerClassName: G.mosaicMediaContainer,
                                imageClassName: r(G.imageCover, {
                                  [G.obscured]: l,
                                }),
                                responsive: !0,
                              }),
                        l &&
                          (0, s.jsx)("div", {
                            className: G.obscuredTagContainer,
                            children: (0, s.jsx)(F.default, {
                              obscureReason: i,
                              iconClassname: G.obscuredTag,
                            }),
                          }),
                      ],
                    },
                    e.src
                  );
                }),
              [o, c, d, a, C, S, x, u, _]
            );
          return (0, s.jsxs)("div", {
            className: G.bodyMedia,
            style: { width: l, height: i },
            children: [
              (0, s.jsx)(s.Fragment, { children: T }),
              (c || d) &&
                (0, s.jsxs)("div", {
                  className: G.mediaIconsRow,
                  children: [
                    d &&
                      (0, s.jsx)(v.default, {
                        width: "22px",
                        height: "22px",
                        className: G.mediaIcon,
                      }),
                    c && (0, s.jsx)(N.default, { className: G.mediaIcon }),
                  ],
                }),
              t.length > P.MOSAIC_MAX_IMAGE_COUNT &&
                (0, s.jsx)(Z, {
                  text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
                  icon: M.default,
                  pillClassName: G.moreImagesPill,
                  iconClassName: G.moreImagesPillIcon,
                  textClassName: G.moreImagesPillText,
                }),
            ],
          });
        });
      function Z(e) {
        let {
          text: t,
          icon: a,
          pillClassName: n,
          iconClassName: l,
          textClassName: r,
        } = e;
        return (0, s.jsxs)("div", {
          className: n,
          children: [
            (0, s.jsx)(a, { className: l }),
            (0, s.jsxs)(d.Text, {
              variant: "text-xs/medium",
              className: r,
              children: ["+", t],
            }),
          ],
        });
      }
      function q(e) {
        let {
            channel: t,
            firstMessage: a,
            isFirstMessageLoaded: l,
            containerWidth: i,
            hasUnreads: o,
          } = e,
          [u, c] = (0, L.getFrameDimensions)(i - 2 * L.IMAGE_PADDING),
          { content: m } = (0, j.useForumPostFirstMessageMarkup)({
            firstMessage: a,
            formatInline: !1,
            noStyleAndInteraction: !0,
          }),
          { shouldRenderTagsRow: h } = (0, D.useTagsRowHooks)({
            channel: t,
            isNew: !1,
          }),
          f = n.useMemo(() => ({ width: u, height: c }), [u, c]),
          g = o ? G.textContentUnread : G.textContentRead;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: G.contentPreview,
            style: f,
            children: [
              (0, s.jsxs)("div", {
                className: G.content,
                children: [
                  l &&
                    null == a &&
                    (0, s.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: o ? "header-secondary" : "text-muted",
                      children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED,
                    }),
                  l &&
                    null != a &&
                    (0, s.jsx)(A.default, {
                      message: a,
                      content: m,
                      className: g,
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                className: r(G.textContentFooter, { [G.noTags]: !h }),
                children: h
                  ? (0, s.jsx)(D.default, {
                      channel: t,
                      tagsClassName: G.tagPill,
                      className: G.row,
                    })
                  : null,
              }),
            ],
          }),
        });
      }
    },
    968462: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ForumPostMediaPreviewPlaceholder: function () {
            return l;
          },
          ForumPostContentPlaceholder: function () {
            return r;
          },
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("195069");
      function l() {
        return (0, s.jsx)("div", { className: n.bodyMedia });
      }
      function r() {
        return (0, s.jsxs)("div", {
          className: n.content,
          children: [
            (0, s.jsxs)("div", {
              className: n.titleAndMessage,
              children: [
                (0, s.jsxs)("div", {
                  className: n.header,
                  children: [
                    (0, s.jsxs)("div", {
                      className: n.tags,
                      children: [
                        (0, s.jsx)("div", { className: n.tag }),
                        (0, s.jsx)("div", { className: n.tag }),
                        (0, s.jsx)("div", { className: n.tag }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: n.seperator }),
                  ],
                }),
                (0, s.jsx)("div", { className: n.time }),
                (0, s.jsx)("div", { className: n.title }),
                (0, s.jsx)("div", { className: n.firstMessage }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: n.engagement,
              children: [
                (0, s.jsx)("div", { className: n.reactions }),
                (0, s.jsx)("div", { className: n.replies }),
              ],
            }),
          ],
        });
      }
      function i() {
        return (0, s.jsx)("div", {
          className: n.card,
          children: (0, s.jsxs)("div", {
            className: n.body,
            children: [(0, s.jsx)(r, {}), (0, s.jsx)(l, {})],
          }),
        });
      }
    },
    823968: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("482402"),
        l = a("335710"),
        r = a("77078"),
        i = a("339792"),
        o = a("867965"),
        u = a("782340"),
        d = a("932723");
      function c(e) {
        let { channel: t, closePopout: a } = e,
          { sortOrder: c, layoutType: m } = (0, i.useForumChannelStore)(t.id),
          h = (0, i.useForumChannelStoreApi)(),
          f = t.isMediaChannel(),
          g = e => {
            (0, o.trackForumSortOrderUpdated)({
              guildId: t.guild_id,
              channelId: t.id,
              sortOrder: e,
            }),
              h.getState().setSortOrder(t.id, e),
              a();
          },
          x = e => {
            (0, o.trackForumLayoutUpdated)({
              guildId: t.guild_id,
              channelId: t.id,
              forumLayout: e,
            }),
              h.getState().setLayoutType(t.id, e),
              a();
          };
        return (0, s.jsx)("div", {
          className: d.container,
          children: (0, s.jsxs)(r.Menu, {
            navId: "sort-and-view",
            "aria-label": f
              ? u.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL
              : u.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: [
              (0, s.jsxs)(r.MenuGroup, {
                label: u.default.Messages.FORUM_CHANNEL_SORT_BY,
                children: [
                  (0, s.jsx)(r.MenuRadioItem, {
                    id: "sort-by-recent-activity",
                    group: "sort-by",
                    label:
                      u.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                    action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
                    checked: c === l.ThreadSortOrder.LATEST_ACTIVITY,
                  }),
                  (0, s.jsx)(r.MenuRadioItem, {
                    id: "sort-by-date-posted",
                    group: "sort-by",
                    label: u.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                    action: () => g(l.ThreadSortOrder.CREATION_DATE),
                    checked: c === l.ThreadSortOrder.CREATION_DATE,
                  }),
                ],
              }),
              !t.isMediaChannel() &&
                (0, s.jsxs)(r.MenuGroup, {
                  label: u.default.Messages.FORUM_CHANNEL_VIEW_AS,
                  children: [
                    (0, s.jsx)(r.MenuRadioItem, {
                      id: "view-as-list",
                      group: "view-as",
                      label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                      action: () => x(n.ForumLayout.LIST),
                      checked: m === n.ForumLayout.LIST,
                    }),
                    (0, s.jsx)(r.MenuRadioItem, {
                      id: "view-as-grid",
                      group: "view-as",
                      label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                      action: () => x(n.ForumLayout.GRID),
                      checked: m === n.ForumLayout.GRID,
                    }),
                  ],
                }),
              (0, s.jsx)(r.MenuGroup, {
                children: (0, s.jsx)(r.MenuItem, {
                  id: "reset-all",
                  className: d.clearText,
                  label: (0, s.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: u.default.Messages.FORUM_CHANNEL_RESET_ALL,
                  }),
                  action: () => {
                    g(t.getDefaultSortOrder()), x(t.getDefaultLayout());
                  },
                }),
              }),
            ],
          }),
        });
      }
    },
    363622: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GRID_POST_CONTROLS_MARGIN: function () {
            return r;
          },
          GridLayout: function () {
            return i;
          },
          ForumListLayoutRenderOptions: function () {
            return o;
          },
          getFrameDimensions: function () {
            return u;
          },
          IMAGE_PADDING: function () {
            return d;
          },
          getGridPostHeight: function () {
            return c;
          },
        });
      var s = a("627445"),
        n = a.n(s);
      let l = 2 / 3,
        r = 12;
      class i {
        getWidth(e) {
          return this.getRenderOptions(e).columnWidth;
        }
        getRenderOptions(e) {
          if (e <= this.minWidth)
            return { columns: 1, columnWidth: this.minWidth };
          let t = e / this.maxWidth,
            a = e / this.minWidth,
            s = Math.max(Math.floor(t + (a - t) / 2), 1),
            n = this.gap * (s - 1);
          return { columns: s, columnWidth: (e - n) / s };
        }
        constructor({ minWidth: e, maxWidth: t, gap: a }) {
          n(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = a);
        }
      }
      let o = { columns: 1, columnWidth: 450 },
        u = e => {
          let t = e - 2;
          return [t, Math.ceil(t * l)];
        },
        d = 12,
        c = e => 60 + u(e - 2 * d)[1] + 24 + 3 * r;
    },
    193695: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function () {
            return eA;
          },
          default: function () {
            return eR;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("627445"),
        o = a.n(i),
        u = a("866227"),
        d = a.n(u),
        c = a("974667"),
        m = a("335710"),
        h = a("446674"),
        f = a("669491"),
        g = a("77078"),
        x = a("125667"),
        C = a("731898"),
        S = a("419135"),
        _ = a("206230"),
        T = a("651693"),
        p = a("605160"),
        E = a("875978"),
        N = a("70845"),
        M = a("913491"),
        v = a("95045"),
        A = a("574073"),
        I = a("359132"),
        j = a("836943"),
        R = a("933629"),
        O = a("592707"),
        F = a("350134"),
        b = a("232259"),
        L = a("144491"),
        P = a("208021"),
        y = a("582713"),
        D = a("300322"),
        U = a("845579"),
        w = a("982108"),
        k = a("42203"),
        H = a("957255"),
        B = a("660478"),
        G = a("27618"),
        V = a("471671"),
        z = a("738107"),
        W = a("952368"),
        K = a("491605"),
        Y = a("505684"),
        X = a("109264"),
        Z = a("566998"),
        q = a("93427"),
        Q = a("956089"),
        J = a("888400"),
        $ = a("299039"),
        ee = a("700097"),
        et = a("670902"),
        ea = a("339792"),
        es = a("680986"),
        en = a("612278"),
        el = a("791234"),
        er = a("994810"),
        ei = a("867965"),
        eo = a("43836"),
        eu = a("512630"),
        ed = a("152637"),
        ec = a("578198"),
        em = a("968462"),
        eh = a("136460"),
        ef = a("601016"),
        eg = a("810758"),
        ex = a("390083"),
        eC = a("49111"),
        eS = a("724210"),
        e_ = a("648564"),
        eT = a("719347"),
        ep = a("782340"),
        eE = a("38050"),
        eN = a("649809"),
        eM = a("919163");
      let ev = 26,
        eA = 162 + ev,
        eI = async () => {
          let { default: e } = await a
            .el("170206")
            .then(a.t.bind(a, "170206", 19));
          return e;
        };
      function ej(e) {
        let { shouldAnimate: t = !1 } = e,
          a = (0, h.useStateFromStores)(
            [_.default],
            () => _.default.useReducedMotion
          );
        return (0, s.jsxs)("div", {
          className: eE.startTheConversation,
          children: [
            (0, s.jsx)(K.default, {
              importData: eI,
              shouldAnimate: t && !a,
              className: eE.wavingHand,
            }),
            (0, s.jsx)(g.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: ep.default.Messages.FORUM_START_THE_CONVERSATION_HEADER,
            }),
          ],
        });
      }
      var eR = n.memo(function (e) {
        let {
            className: t,
            threadId: a,
            goToThread: l,
            observePostVisibilityAnalytics: i,
          } = e,
          u = n.useRef(null),
          {
            channel: d,
            isOpen: m,
            messageCount: f,
            unreadCount: x,
            firstMessage: S,
            firstMessageLoaded: _,
            firstMedia: T,
            firstMediaIsEmbed: p,
          } = (function (e) {
            let { threadId: t } = e,
              a = (0, h.useStateFromStores)([k.default], () =>
                k.default.getChannel(t)
              );
            o(
              null != a,
              "the thread should not be null here, a store must have missed an update"
            );
            let s = (0, h.useStateFromStores)(
                [w.default],
                () => w.default.getCurrentSidebarChannelId(a.parent_id) === a.id
              ),
              { loaded: n, firstMessage: l } = (0, en.useFirstForumPostMessage)(
                a
              ),
              {
                content: r,
                firstMedia: i,
                firstMediaIsEmbed: u,
              } = (0, es.useForumPostFirstMessageMarkup)({ firstMessage: l }),
              { messageCount: d, unreadCount: c } = (0, es.useMessageCount)(a);
            return {
              channel: a,
              isOpen: s,
              messageCount: d,
              unreadCount: c,
              firstMessage: l,
              firstMessageLoaded: n,
              firstMedia: i,
              firstMediaIsEmbed: u,
              content: r,
            };
          })({ threadId: a }),
          E = (0, h.useStateFromStores)([k.default], () =>
            k.default.getChannel(d.parent_id)
          ),
          { ref: N, height: M } = (0, C.default)(),
          v = (0, ec.useForumPostComposerStore)(e => e.setCardHeight),
          [A, I] = n.useState(162);
        n.useEffect(() => {
          null != M && (v(a, M + ev), I(M));
        }, [N, M, v, a, I, _]),
          n.useEffect(() => {
            null == i || i(u.current, a);
          }, [i, a, _]);
        let j = n.useRef(null),
          { handleLeftClick: R, handleRightClick: O } = (0, ex.default)({
            facepileRef: j,
            goToThread: l,
            channel: d,
          }),
          { role: F, onFocus: b, ...L } = (0, c.useListItem)(a),
          { handleFocus: P, handleBlur: y } = (0, eg.default)(b);
        return (0, s.jsxs)("div", {
          ref: u,
          "data-item-id": a,
          onClick: R,
          onContextMenu: O,
          className: r(eE.container, t, { [eE.isOpen]: m }),
          children: [
            (0, s.jsx)(g.Clickable, {
              onClick: R,
              focusProps: { ringTarget: u },
              onContextMenu: O,
              "aria-label": ep.default.Messages.FORUM_POST_ARIA_LABEL.format({
                title: d.name,
                count: f,
              }),
              className: eE.focusTarget,
              onFocus: P,
              onBlur: y,
              ...L,
            }),
            (0, s.jsxs)("div", {
              className: eE.body,
              children: [
                (0, s.jsx)("div", {
                  ref: N,
                  className: eE.contentContainer,
                  children: _
                    ? (0, s.jsx)(eO, {
                        parentChannel: E,
                        channel: d,
                        firstMessage: S,
                        messageCount: f,
                        unreadCount: x,
                        facepileRef: j,
                        onClick: R,
                      })
                    : (0, s.jsx)(em.ForumPostContentPlaceholder, {}),
                }),
                _
                  ? (null == S ? void 0 : S.blocked) || null == T
                    ? null
                    : (0, s.jsx)(eH, {
                        channel: d,
                        firstMedia: T,
                        firstMessage: S,
                        isEmbed: p,
                        contentHeight: A,
                      })
                  : (0, s.jsx)(em.ForumPostMediaPreviewPlaceholder, {}),
              ],
            }),
          ],
        });
      });
      function eO(e) {
        let {
            parentChannel: t,
            channel: a,
            firstMessage: n,
            messageCount: l,
            unreadCount: r,
            facepileRef: i,
            onClick: o,
          } = e,
          { isNew: u } = (0, es.useForumPostReadStates)(a),
          { forumPostContainsTags: d } = (0, ef.useTagsRowHooks)({
            channel: a,
            isNew: u,
          });
        return (0, s.jsxs)("div", {
          className: eE.content,
          children: [
            (0, s.jsxs)("div", {
              className: eE.titleAndMessage,
              children: [
                d &&
                  (0, s.jsx)(ef.IncreasedActivityTagsRow, {
                    channel: a,
                    className: eE.tagsRow,
                    tagsClassName: eE.tags,
                  }),
                d && (0, s.jsx)("hr", { className: eE.separator }),
                (0, s.jsx)(ek, {
                  channel: a,
                  firstMessage: n,
                  isNew: u,
                  containsTags: d,
                }),
                (0, s.jsx)(g.HeadingLevel, {
                  children: (0, s.jsx)(eP, { channel: a, onClick: o }),
                }),
                null != n && (0, s.jsx)(eF, { firstMessage: n }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eE.engagement,
              children: [
                null != n && (0, s.jsx)(eD, { channel: a, firstMessage: n }),
                (0, s.jsx)(eb, {
                  parentChannel: t,
                  channel: a,
                  messageCount: l,
                  unreadCount: r,
                  facepileRef: i,
                }),
              ],
            }),
          ],
        });
      }
      function eF(e) {
        let { firstMessage: t } = e,
          a = (0, h.useStateFromStores)(
            [G.default],
            () => null != t && G.default.isBlocked(t.author.id)
          ),
          { content: l } = n.useMemo(
            () =>
              (null == t ? void 0 : t.content) != null && "" !== t.content
                ? (0, v.default)(t, {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0,
                  })
                : { content: null },
            [t]
          );
        return (0, s.jsx)(g.FocusBlock, {
          "aria-hidden": !0,
          className: eE.firstMessageContent,
          children: a
            ? ep.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
            : null == l
              ? ep.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
              : l,
        });
      }
      function eb(e) {
        let {
            parentChannel: t,
            channel: a,
            messageCount: n,
            unreadCount: l,
            facepileRef: i,
          } = e,
          o = (0, es.useTypingUserIds)(a),
          { mostRecentMessage: u } = (0, en.useMostRecentForumMessage)(t, a),
          d = (0, h.useStateFromStores)([H.default], () =>
            H.default.can(eC.Permissions.SEND_MESSAGES_IN_THREADS, a)
          ),
          { hasUnreads: c } = (0, es.useForumPostReadStates)(a),
          m = (0, h.useStateFromStores)([et.default], () =>
            et.default.getFirstNoReplyThreadId()
          ),
          f = (0, D.useIsNonModInLockedThread)(a),
          x = (0, A.useNullableMessageAuthor)(u);
        if (n > 0) {
          var C, S;
          return (0, s.jsxs)(g.Clickable, {
            onClick: e => {
              null != u &&
                null != a.parent_id &&
                (e.stopPropagation(),
                (0, ei.trackForumPostClicked)({
                  guildId: a.guild_id,
                  channelId: a.parent_id,
                  postId: a.id,
                  location: {
                    page: eC.AnalyticsPages.GUILD_CHANNEL,
                    section: eC.AnalyticsSections.FORUM_CHANNEL_POST,
                  },
                }),
                e.shiftKey
                  ? (0, L.transitionToThreadMessage)(
                      a,
                      u.id,
                      e_.OpenThreadAnalyticsLocations.BROWSER
                    )
                  : P.default.openThreadAsSidebar({
                      guildId: a.guild_id,
                      channelId: a.id,
                      baseChannelId: a.parent_id,
                      flash: !0,
                      details: {
                        type: y.SidebarOpenDetailsType.THREAD,
                        initialMessageId: u.id,
                      },
                    }));
            },
            children: [
              (0, s.jsxs)(g.HiddenVisually, {
                children: [
                  "Latest message:",
                  null != x
                    ? null !== (C = x.nick) && void 0 !== C
                      ? C
                      : ep.default.Messages.UNKNOWN_USER
                    : null,
                  " ",
                  null == (S = null == u ? void 0 : u.content)
                    ? ""
                    : S.length > 120
                      ? "".concat(S.substring(0, 120), "...")
                      : S,
                ],
              }),
              (0, s.jsxs)(g.FocusBlock, {
                className: eE.replies,
                children: [
                  (0, s.jsx)(eU, {
                    messageCount: n,
                    unreadCount: l,
                    iconSize: 16,
                  }),
                  o.length > 0
                    ? (0, s.jsx)(eL, {
                        channel: a,
                        typingUserIds: o,
                        facepileRef: i,
                      })
                    : (0, s.jsx)(ey, {
                        channel: a,
                        mostRecentMessage: u,
                        hasUnreads: c,
                      }),
                ],
              }),
            ],
          });
        }
        return f
          ? (0, s.jsx)("div", {
              className: eE.replies,
              children: (0, s.jsx)(g.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                className: r(
                  eE.mostRecentMessageContent,
                  eE.nonUserMessage,
                  eE.lockedMessage
                ),
                children:
                  ep.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED,
              }),
            })
          : d && 0 === n
            ? (0, s.jsx)(g.FocusBlock, {
                "aria-hidden": !0,
                className: eE.replies,
                children:
                  o.length > 0
                    ? (0, s.jsx)(eL, {
                        channel: a,
                        typingUserIds: o,
                        facepileRef: i,
                      })
                    : (0, s.jsx)(ej, { shouldAnimate: m === a.id }),
              })
            : null;
      }
      function eL(e) {
        let { channel: t, typingUserIds: a, facepileRef: n } = e;
        return (0, s.jsxs)("div", {
          className: eE.typing,
          children: [
            (0, s.jsx)(ed.Facepile, { channel: t, userIds: a, facepileRef: n }),
            (0, s.jsx)("div", {
              className: eE.dots,
              children: (0, s.jsx)(g.Dots, { themed: !0, dotRadius: 2 }),
            }),
            (0, s.jsx)(x.default, {
              channel: t,
              className: eE.typingUsers,
              renderDots: !1,
            }),
          ],
        });
      }
      function eP(e) {
        let { channel: t, onClick: a } = e,
          { hasUnreads: l } = (0, es.useForumPostReadStates)(t),
          r = (function (e) {
            let t = (0, h.useStateFromStores)([er.default], () =>
                er.default.getHasSearchResults(e.parent_id)
              ),
              a = (0, h.useStateFromStores)([er.default], () =>
                er.default.getSearchQuery(e.parent_id)
              ),
              s = n.useMemo(
                () => (0, S.createASTHighlighter)(t && null != a ? a : ""),
                [t, a]
              ),
              l = n.useMemo(
                () =>
                  (0, v.default)(
                    { content: e.name, embeds: [] },
                    { postProcessor: s }
                  ).content,
                [e.name, s]
              );
            return l;
          })(t);
        return (0, s.jsx)(g.Heading, {
          variant: "heading-lg/semibold",
          color: l ? "header-primary" : "text-muted",
          className: eE.title,
          children: (0, s.jsx)(g.Clickable, { onClick: a, children: r }),
        });
      }
      let ey = n.memo(function (e) {
        var t;
        let { channel: a, mostRecentMessage: l, hasUnreads: i } = e,
          o = (0, A.useNullableMessageAuthor)(l),
          u = (0, h.useStateFromStores)(
            [G.default],
            () => null != l && G.default.isBlocked(l.author.id)
          ),
          d = (0, h.useStateFromStores)([H.default], () =>
            H.default.can(eC.Permissions.MANAGE_MESSAGES, a)
          ),
          c = U.RenderSpoilers.useSetting(),
          m = (0, eo.useIsRecentMessageDeleted)(a),
          { content: f } = n.useMemo(
            () =>
              (null == l ? void 0 : l.content) != null && "" !== l.content
                ? (0, v.default)(l, {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                  })
                : { content: null },
            [l]
          ),
          x = null != l && (0, M.default)(l),
          C = null;
        if (u)
          C = (0, s.jsx)(g.Text, {
            className: eE.nonUserMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children:
              ep.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE,
          });
        else {
          let { contentPlaceholder: e, renderedContent: t } =
            null == l
              ? { contentPlaceholder: null, renderedContent: null }
              : x
                ? {
                    contentPlaceholder: null,
                    renderedContent: ee.default.stringify(l, a),
                  }
                : (0, q.renderSingleLineMessage)(
                    l,
                    f,
                    u,
                    r(
                      eE.mostRecentMessageContent,
                      eM.inlineFormat,
                      eM.smallFontSize
                    ),
                    {
                      iconClass: eE.messageContentIcon,
                      iconSize: eT.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
                    }
                  );
          C =
            null != t
              ? (0, s.jsx)(g.Text, {
                  variant: "text-sm/semibold",
                  color: i ? "header-secondary" : "text-muted",
                  className: eE.mostRecentMessageContent,
                  children: t,
                })
              : null != e
                ? (0, s.jsx)(g.Text, {
                    variant: "text-sm/semibold",
                    color: i ? "header-secondary" : "text-muted",
                    className: eE.mostRecentMessageContent,
                    children: e,
                  })
                : m
                  ? (0, s.jsx)(g.Text, {
                      variant: "text-sm/semibold",
                      color: i ? "header-secondary" : "text-muted",
                      className: r(
                        eE.mostRecentMessageContent,
                        eE.nonUserMessage
                      ),
                      children:
                        ep.default.Messages
                          .FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED,
                    })
                  : null;
        }
        let S =
            null != o
              ? null !== (t = o.nick) && void 0 !== t
                ? t
                : ep.default.Messages.UNKNOWN_USER
              : null,
          _ = (0, b.useUsernameHook)({
            user: null == l ? void 0 : l.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: null == l ? void 0 : l.id,
            stopPropagation: !0,
          })(null != o ? o : void 0)(
            (0, s.jsxs)(s.Fragment, {
              children: [null != S ? S : "", null != l ? ":" : ""],
            }),
            a.id
          );
        return (0, s.jsx)(Y.ObscuredDisplayContext.Provider, {
          value: (0, N.default)(c, d),
          children: (0, s.jsxs)("div", {
            className: eE.mostRecentMessage,
            children: [
              null == S || x
                ? null
                : (0, s.jsx)("div", {
                    className: eE.mostRecentMessageAuthor,
                    children: (0, s.jsx)(g.Text, {
                      tag: "span",
                      variant: "text-sm/semibold",
                      children: _,
                    }),
                  }),
              (0, s.jsx)(g.FocusBlock, { children: C }),
            ],
          }),
        });
      });
      function eD(e) {
        let { channel: t, firstMessage: a } = e,
          l = (0, h.useStateFromStores)([k.default], () =>
            k.default.getChannel(t.parent_id)
          ),
          i = (0, es.useDefaultReactionEmoji)(l),
          {
            disableReactionUpdates: o,
            disableReactionCreates: u,
            isLurking: d,
            isPendingMember: c,
          } = (0, I.default)(t),
          m = (0, O.findReactionIndex)(a.reactions, i) >= 0,
          f = !m && !u,
          { ref: g, width: x } = (0, C.default)(),
          [S, _] = n.useState(10),
          [T, p] = n.useState(!0);
        return (
          n.useEffect(() => {
            if (null != x) _(Math.floor((x - 78) / 66)), p(!1);
          }, [x, a.reactions, i]),
          (0, s.jsxs)("div", {
            className: r(eE.reactionRow, { [eE.loading]: T }),
            ref: g,
            children: [
              f && null != i
                ? (0, s.jsx)(F.Reaction, {
                    className: eE.defaultReaction,
                    message: a,
                    readOnly: !1,
                    useChatFontScaling: !0,
                    isLurking: d,
                    isPendingMember: c,
                    emoji: i,
                    type: E.ReactionTypes.NORMAL,
                    hideCount: !0,
                    count: 0,
                    me: !1,
                    burst_count: 0,
                    me_burst: !1,
                  })
                : null,
              (0, s.jsx)(O.default, {
                message: a,
                channel: t,
                disableReactionCreates: u,
                disableReactionUpdates: o,
                useChatFontScaling: !0,
                className: eE.messageReactions,
                reactionClassName: eE.reaction,
                hoistReaction: i,
                forceHideReactionCreates: !0,
                maxReactions: S,
              }),
              (0, s.jsx)("div", {
                className: eE.addReactionContainer,
                children:
                  !u &&
                  (0, s.jsx)(j.ButtonAddReaction, {
                    type: E.ReactionTypes.NORMAL,
                    message: a,
                    channel: t,
                    useChatFontScaling: !0,
                    className: eE.addReactButton,
                    isForumToolbar: !1,
                  }),
              }),
            ],
          })
        );
      }
      function eU(e) {
        let { messageCount: t, unreadCount: a, iconSize: n } = e;
        return (0, s.jsxs)("div", {
          className: eE.messageCountBox,
          children: [
            (0, s.jsx)("span", {
              className: eE.messageCountIcon,
              children: (0, s.jsx)(X.default, { width: n, height: n }),
            }),
            "number" == typeof t
              ? (0, s.jsx)(z.default, {
                  value: t,
                  className: eE.messageCountText,
                })
              : (0, s.jsx)("div", {
                  className: eE.messageCountText,
                  children: t,
                }),
            null == a
              ? null
              : (0, s.jsx)(g.Text, {
                  className: eE.unreadMessagesCount,
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  children:
                    ep.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format(
                      { count: a }
                    ),
                }),
          ],
        });
      }
      function ew(e) {
        var t;
        let { channel: a } = e,
          { sortOrder: n } = (0, ea.useForumChannelStore)(a.parent_id),
          l = (0, es.useLastActiveTimestamp)(a, n),
          r = (0, h.useStateFromStores)([B.default], () =>
            B.default.lastMessageId(a.id)
          ),
          i = null != r ? $.default.extractTimestamp(r) : null,
          o =
            null === (t = a.threadMetadata) || void 0 === t
              ? void 0
              : t.createTimestamp,
          u =
            null == l
              ? null
              : n === m.ThreadSortOrder.CREATION_DATE
                ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: l,
                  })
                : l,
          c =
            n === m.ThreadSortOrder.CREATION_DATE && null != o
              ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                  timestamp: (0, J.dateFormat)(d(o), "LLLL"),
                })
              : null != i
                ? (0, J.dateFormat)(d(i), "LLLL")
                : null;
        return null == c || null == u
          ? null
          : (0, s.jsx)(g.Tooltip, {
              text: c,
              tooltipClassName: eE.timestampTooltip,
              "aria-label":
                ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
              children: e =>
                (0, s.jsx)(g.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  ...e,
                  children: u,
                }),
            });
      }
      function ek(e) {
        let { channel: t, firstMessage: a, isNew: n, containsTags: l } = e,
          r = t.hasFlag(eS.ChannelFlags.PINNED),
          i = (0, h.useStateFromStores)(
            [G.default],
            () => null != a && G.default.isBlocked(a.author.id)
          );
        return (0, s.jsxs)("div", {
          className: eE.header,
          children: [
            !l &&
              r &&
              (0, s.jsx)("div", {
                className: eE.pinIcon,
                children: (0, s.jsx)(g.Tooltip, {
                  text: ep.default.Messages.PINNED_POST,
                  children: e =>
                    (0, s.jsx)(Z.default, {
                      ...e,
                      width: ef.PIN_ICON_SIZE,
                      height: ef.PIN_ICON_SIZE,
                      color: "white",
                    }),
                }),
              }),
            !i && (0, s.jsx)(eh.default, { channel: t, message: a }),
            (0, s.jsx)(ew, { channel: t }),
            n &&
              (0, s.jsx)(Q.TextBadge, {
                className: eE.newBadge,
                color: f.default.unsafe_rawColors.BRAND_260.css,
                text: ep.default.Messages.NEW,
              }),
          ],
        });
      }
      function eH(e) {
        let {
            channel: t,
            firstMedia: a,
            firstMessage: n,
            isEmbed: l,
            contentHeight: i,
          } = e,
          o = (0, h.useStateFromStores)([V.default], () =>
            V.default.isFocused()
          ),
          u = (0, T.isAnimatedImageUrl)(a.src),
          d = U.GifAutoPlay.useSetting(),
          { src: c, width: m, height: f, alt: x } = a,
          [C, S] = (0, p.useShouldObscure)({ media: a, channel: t }),
          _ = (0, p.getObscuredAlt)(S);
        return (0, s.jsx)(g.FocusBlock, {
          enabled: !0,
          children: (0, s.jsxs)("div", {
            className: r(eE.bodyMedia, { [eN.embedFull]: l }),
            style: { height: i, borderColor: (0, el.getEmbedColor)(n, C) },
            onClick: e => e.stopPropagation(),
            children: [
              c.startsWith("data:")
                ? (0, s.jsx)(W.default, {
                    src: c,
                    width: m,
                    height: f,
                    minWidth: 143,
                    minHeight: i,
                    maxHeight: i,
                    alt: null != x && C ? _ : x,
                    imageClassName: r({ [eE.obscured]: C }),
                  })
                : (0, R.renderImageComponent)({
                    src: c,
                    width: m,
                    height: f,
                    minWidth: 143,
                    minHeight: i,
                    maxHeight: i,
                    alt: null != x && C ? _ : x,
                    autoPlay: d,
                    animated: u && !C && o,
                    imageContainerClassName: r({ [eE.obscured]: C }),
                  }),
              C &&
                (0, s.jsx)(eu.default, {
                  iconClassname: eE.obscuredTag,
                  obscureReason: S,
                }),
            ],
          }),
        });
      }
    },
    855455: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MOSAIC_MIN_INDEX: function () {
            return r;
          },
          MOSAIC_MAX_INDEX: function () {
            return i;
          },
          MOSAIC_MAX_IMAGE_COUNT: function () {
            return o;
          },
          useImageContainerStyles: function () {
            return m;
          },
          useImageDimensionStyles: function () {
            return f;
          },
        });
      var s = a("884691"),
        n = a("693566"),
        l = a.n(n);
      let r = 0,
        i = 4,
        o = 4,
        u = "absolute",
        d = (e, t, a, s) => {
          if (0 === a) return [];
          if (1 === a)
            return [{ width: e, height: t, top: 0, left: 0, position: u }];
          if (2 === a) {
            let a = Math.ceil((e - s) / 2);
            return [
              { top: 0, left: 0, position: u, width: a, height: t },
              { top: 0, left: a + s, position: u, width: a, height: t },
            ];
          }
          if (3 === a) {
            let a = Math.ceil((e - s) / 2),
              n = Math.ceil((t - s) / 2);
            return [
              { top: 0, left: 0, position: u, width: a, height: t },
              { top: 0, left: a + s, position: u, width: a, height: n },
              { top: n + s, left: a + s, position: u, width: a, height: n },
            ];
          } else {
            let a = Math.ceil((e - s) / 2),
              n = Math.ceil((t - s) / 2);
            return [
              { top: 0, left: 0, position: u, width: a, height: n },
              { top: n + s, left: 0, position: u, width: a, height: n },
              { top: 0, left: a + s, position: u, width: a, height: n },
              { top: n + s, left: a + s, position: u, width: a, height: n },
            ];
          }
        },
        c = new l({ max: 100 });
      function m(e) {
        let { numAttachments: t, containerWidth: a, containerHeight: n } = e;
        return s.useMemo(
          () =>
            (function (e) {
              var t, a, s;
              let {
                numAttachments: n,
                containerWidth: l,
                containerHeight: r,
              } = e;
              let i =
                  ((t = n),
                  (a = l),
                  (s = r),
                  "".concat(t, "-").concat(a, "-").concat(s)),
                o = c.get(i);
              if (null != o) return o;
              {
                let e = d(l, r, n, 4);
                return c.set(i, e), e;
              }
            })({ numAttachments: t, containerWidth: a, containerHeight: n }),
          [t, a, n]
        );
      }
      function h(e) {
        return e.map((t, a) => ({
          minWidth: 2 * e[a].width,
          minHeight: 2 * e[a].height,
          maxWidth: 2 * e[a].width,
          maxHeight: 2 * e[a].height,
        }));
      }
      function f(e) {
        let {
            imageContainerStyles: t,
            containerWidth: a,
            containerHeight: n,
          } = e,
          l = s.useRef(h(t)),
          r = s.useRef(a),
          i = s.useRef(n),
          o = a > r.current + 100,
          u = n > i.current + 100;
        return (o || u) && (l.current = h(t)), l.current;
      }
    },
    337113: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        l = a.n(n),
        r = a("866227"),
        i = a.n(r),
        o = a("77078"),
        u = a("32238"),
        d = a("718517"),
        c = a("782340"),
        m = a("704194"),
        h = e => {
          let {
              rateLimitPerUser: t,
              slowmodeCooldownGuess: a,
              isBypassSlowmode: n,
              leadingIcon: r = !1,
            } = e,
            h = "",
            f = "";
          if (t >= d.default.Seconds.HOUR) {
            let e = Math.floor(t / d.default.Seconds.HOUR),
              a = Math.floor(
                (t - e * d.default.Seconds.HOUR) / d.default.Seconds.MINUTE
              ),
              s = t - e * d.default.Seconds.HOUR - a * d.default.Seconds.MINUTE;
            f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
              hours: e,
              minutes: a,
              seconds: s,
            });
          } else if (t >= 60) {
            let e = Math.floor(t / 60);
            f = c.default.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
              minutes: e,
              seconds: t - 60 * e,
            });
          } else
            f = c.default.Messages.FORUM_SLOWMODE_DESC.format({ seconds: t });
          if (!n && a > 0) {
            let e = i.duration(a);
            if (a > d.default.Millis.HOUR) {
              let t = "".concat(e.minutes()).padStart(2, "0"),
                a = "".concat(e.seconds()).padStart(2, "0");
              h = "".concat(e.hours(), ":").concat(t, ":").concat(a);
            } else {
              let t = "".concat(e.seconds()).padStart(2, "0");
              h = "".concat(e.minutes(), ":").concat(t);
            }
          } else
            h = n
              ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE
              : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
          let g = (0, s.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h,
            }),
            x = (0, s.jsx)(u.default, {
              className: l(m.slowModeIcon, { [m.leadingIcon]: r }),
            });
          return (0, s.jsx)(o.Tooltip, {
            text: f,
            children: e =>
              (0, s.jsx)("div", {
                className: m.cooldownWrapper,
                ...e,
                children: r
                  ? (0, s.jsxs)(s.Fragment, { children: [x, g] })
                  : (0, s.jsxs)(s.Fragment, { children: [g, x] }),
              }),
          });
        };
    },
    552683: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("974667"),
        r = a("446674"),
        i = a("77078"),
        o = a("206230"),
        u = a("339792"),
        d = a("680986"),
        c = a("867965"),
        m = a("90625"),
        h = a("49111"),
        f = a("782340"),
        g = a("282078");
      function x() {
        return Promise.resolve();
      }
      function C(e) {
        let { channel: t, closePopout: a, setPopoutRef: C } = e,
          S = (0, d.useVisibleForumTags)(t),
          { tagFilter: _ } = (0, u.useForumChannelStore)(t.id),
          T = (0, u.useForumChannelStoreApi)(),
          p = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.keyboardModeEnabled
          ),
          E = n.useCallback(
            e => {
              (0, c.trackForumTagFilterClicked)({
                guildId: t.guild_id,
                channelId: t.id,
                tagId: e,
                filterTagIds: Array.from(_),
                added: !_.has(e),
                location: {
                  page: h.AnalyticsPages.GUILD_CHANNEL,
                  section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
                  object: h.AnalyticsObjects.CHANNEL_TAG,
                },
              }),
                T.getState().toggleTagFilter(t.id, e);
            },
            [t, _, T]
          ),
          N = n.useCallback(() => {
            T.getState().setTagFilter(t.id, new Set()), !p && a();
          }, [T, t.id, p, a]),
          M = (0, l.default)({
            id: "".concat(t.id, "-all-tags-dropdown-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: x,
            scrollToEnd: x,
          }),
          v = n.useRef(null);
        return (
          n.useEffect(() => {
            requestAnimationFrame(() => {
              if (null != v.current) {
                let e = v.current.querySelector(".".concat(g.tag));
                null != e && e.focus();
              }
            });
          }, []),
          (0, s.jsxs)(i.Dialog, {
            ref: C,
            "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
            className: g.container,
            children: [
              (0, s.jsx)("div", {
                className: g.header,
                children: (0, s.jsxs)("div", {
                  className: g.headerLeft,
                  children: [
                    (0, s.jsx)(i.Heading, {
                      color: "interactive-normal",
                      variant: "text-xs/bold",
                      className: g.headerText,
                      children: f.default.Messages.FORUM_TAG_POST_SELECT,
                    }),
                    (0, s.jsx)("div", {
                      className: g.countContainer,
                      children: (0, s.jsx)(i.Text, {
                        className: g.countText,
                        color: "none",
                        variant: "text-xs/medium",
                        children: _.size,
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(l.ListNavigatorProvider, {
                navigator: M,
                children: (0, s.jsx)(l.ListNavigatorContainer, {
                  children: e => {
                    let { ref: t, ...a } = e;
                    return (0, s.jsx)("div", {
                      ref: e => {
                        (t.current = e), (v.current = e);
                      },
                      ...a,
                      className: g.tagContainer,
                      children: S.map(e =>
                        (0, s.jsx)(
                          m.default,
                          {
                            className: g.tag,
                            tag: e,
                            selected: _.has(e.id),
                            onClick: () => E(e.id),
                          },
                          e.id
                        )
                      ),
                    });
                  },
                }),
              }),
              (0, s.jsx)("div", { className: g.separator }),
              (0, s.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                size: i.Button.Sizes.MIN,
                color: i.Button.Colors.CUSTOM,
                className: g.clear,
                "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
                onClick: N,
                children: (0, s.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: f.default.Messages.FORUM_CLEAR_ALL,
                }),
              }),
            ],
          })
        );
      }
    },
    589455: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        }),
        a("222007");
      var s = a("884691"),
        n = a("405665"),
        l = a("77078");
      let r =
          "undefined" == typeof ResizeObserver
            ? n.ResizeObserver
            : ResizeObserver,
        i = new Map(),
        o = new r(e => {
          e.forEach(e => {
            var t;
            let { target: a } = e;
            null === (t = i.get(a)) || void 0 === t || t(e);
          });
        });
      var u = () => {
        let e = s.useRef(null),
          [t, a] = s.useState(400),
          n = s.useCallback(() => {
            null !== e.current && a(e.current.clientWidth);
          }, [a, e]);
        return (
          (0, l.useResizeObserverSubscription)({
            ref: e,
            key: "forum-container",
            onUpdate: n,
            resizeObserver: o,
            listenerMap: i,
          }),
          { containerRef: e, containerWidth: t }
        );
      };
    },
    485055: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
          useForumGridItem: function () {
            return C;
          },
          GridNavigatorProvider: function () {
            return S;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("909283"),
        r = a("942367"),
        i = a("74139");
      let o = "data-grid-item-id",
        u = "data-grid-section",
        d = "data-grid-prev-section-boundary",
        c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);
      function m(e) {
        let { section: t, column: a, row: s } = e,
          n = "[".concat(u, '="').concat(t, '"]'),
          l = "[".concat("aria-colindex", '="').concat(a, '"]'),
          r = "[".concat("aria-rowindex", '="').concat(s, '"]');
        return "".concat(n).concat(l).concat(r);
      }
      function h(e) {
        let { id: t, isEnabled: a, setFocus: s } = e,
          u = n.useRef(null),
          h = n.useRef(!1),
          f = n.useRef(null),
          g = n.useRef(a);
        n.useLayoutEffect(() => {
          g.current = a;
        }, [a]);
        let x = n.useCallback(e => {
            var t;
            return (
              null !== (t = f.current) && void 0 !== t ? t : document
            ).querySelector(e);
          }, []),
          C = n.useCallback(
            (e, t) => {
              g.current && s(e, t);
            },
            [s]
          ),
          S = n.useCallback(e => {
            if (g.current) {
              var t;
              null === (t = document.querySelector(e)) ||
                void 0 === t ||
                t.focus();
            }
          }, []),
          _ = n.useCallback(
            e => {
              u.current = e;
              let a = (0, i.createSelector)(e, o),
                s = (0, i.getItemId)(e);
              C(a, s), (0, l.notifyFocusSubscribers)(t, s, !0);
            },
            [t, C]
          ),
          [T, p] = n.useState(!1),
          E = n.useRef(T);
        n.useLayoutEffect(() => {
          E.current = T;
        }, [T]),
          n.useLayoutEffect(() => {
            let e = f.current;
            if (null != e)
              return (
                e.addEventListener("focusin", a),
                e.addEventListener("focusout", s),
                e.addEventListener("focus", n),
                e.addEventListener("scroll", l, { passive: !0 }),
                () => {
                  e.removeEventListener("focusin", a),
                    e.removeEventListener("focusout", s),
                    e.removeEventListener("focus", n),
                    e.removeEventListener("scroll", l);
                }
              );
            function a() {
              p(!0);
            }
            function s(e) {
              !e.currentTarget.contains(e.relatedTarget) &&
                (p(!1),
                requestAnimationFrame(() => {
                  let e = u.current;
                  if (null !== e) {
                    let a = (0, i.createSelector)(e, o);
                    null == x(a) && S((0, i.createSelector)(t, "data-grid-id"));
                  }
                }));
            }
            function n() {
              let e = f.current,
                t = E.current;
              if (t || null == e) return;
            }
            function l() {
              h.current = !0;
            }
          }, [t, C, S, _, x]);
        let N = n.useCallback(
            e => {
              var t, a;
              if (!g.current) return;
              let s = u.current,
                n = f.current;
              if (null == s) return;
              let l = (0, i.createSelector)(s, o),
                h = null == n ? void 0 : n.querySelector(l);
              if (null == h) return;
              let C = parseInt(
                  null !== (t = h.getAttribute("data-grid-section")) &&
                    void 0 !== t
                    ? t
                    : ""
                ),
                S = parseInt(h.getAttribute("aria-rowindex")),
                T = parseInt(h.getAttribute("aria-colindex"));
              switch (
                (c.has(e.key) && (e.stopPropagation(), e.preventDefault()),
                e.key)
              ) {
                case r.Keys.RIGHT: {
                  let e = x(m({ section: C, row: S, column: T + 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && _(t);
                  }
                  return;
                }
                case r.Keys.LEFT: {
                  let e = x(m({ section: C, row: S, column: T - 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && _(t);
                  }
                  return;
                }
                case r.Keys.DOWN: {
                  let e = x(m({ section: C, row: S + 1, column: T }));
                  if (
                    (null == e &&
                      (e = x(m({ section: C + 1, row: 0, column: T }))),
                    null != e)
                  ) {
                    let t = e.getAttribute(o);
                    null != t && _(t);
                  }
                  return;
                }
                case r.Keys.UP: {
                  let e;
                  if (0 === S) {
                    let t = parseInt(h.getAttribute(d));
                    null == (e = x(m({ section: C - 1, row: t, column: T }))) &&
                      (e = x(m({ section: C - 1, row: t - 1, column: T })));
                  } else e = x(m({ section: C, row: S - 1, column: T }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && _(t);
                  }
                  return;
                }
                case r.Keys.SPACE:
                case r.Keys.ENTER: {
                  if (e.repeat) return;
                  let t = u.current;
                  if (null != t) {
                    let s = (0, i.createSelector)(t, o),
                      n = x(s),
                      l =
                        null !== (a = null == n ? void 0 : n.ownerDocument) &&
                        void 0 !== a
                          ? a
                          : document,
                      r = n === l.activeElement;
                    null != n &&
                      r &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      null == n || n.click());
                  }
                }
              }
            },
            [x, _]
          ),
          M = n.useCallback(
            e => {
              let a = null != e ? (0, i.createListItemId)(t, e) : null;
              u.current = a;
            },
            [t]
          );
        return n.useMemo(
          () => ({
            id: t,
            containerProps: { onKeyDown: N, ref: f },
            setFocus: M,
          }),
          [t, N, M]
        );
      }
      let f = { id: "NO_LIST", onKeyDown() {}, ref: n.createRef() },
        g = n.createContext({ id: "NO_LIST", setFocus() {} }),
        x = n.createContext(f);
      function C(e) {
        let { id: t, section: a, row: s, column: r, boundaries: c } = e,
          [m, h] = n.useState(0 === s && 0 === r ? 0 : -1),
          f = n.useContext(g),
          { id: x, setFocus: C } = f,
          S = n.useCallback(() => C(t), [t, C]);
        return (
          n.useLayoutEffect(
            () =>
              (0, l.addFocusSubscriber)(x, e => {
                h(e === t ? 0 : -1);
              }),
            [t, x]
          ),
          {
            [o]: (0, i.createListItemId)(x, t),
            [u]: a,
            [d]: c[a],
            role: "gridcell",
            "aria-rowindex": s,
            "aria-colindex": r,
            tabIndex: m,
            onFocus: S,
          }
        );
      }
      function S(e) {
        let { children: t, navigator: a } = e,
          {
            id: l,
            setFocus: r,
            containerProps: { onKeyDown: i, ref: o },
          } = a,
          u = n.useMemo(() => ({ id: l, setFocus: r }), [l, r]),
          d = n.useMemo(() => ({ onKeyDown: i, ref: o, id: l }), [i, o, l]);
        return (0, s.jsx)(x.Provider, {
          value: d,
          children: (0, s.jsx)(g.Provider, { value: u, children: t }),
        });
      }
    },
    219840: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var s = a("884691"),
        n = a("974667");
      function l(e) {
        let { listRef: t, padding: a, channel: l, isEnabled: r } = e,
          i = s.useCallback(
            e => {
              let s = t.current,
                n = document.querySelector(e);
              null != n &&
                (null == s ||
                  s.scrollIntoViewNode({
                    node: n,
                    padding: a,
                    callback: () => {
                      var t;
                      null === (t = document.querySelector(e)) ||
                        void 0 === t ||
                        t.focus({ preventScroll: !0 });
                    },
                  }));
            },
            [a]
          ),
          o = s.useCallback(
            () =>
              new Promise(e => {
                let a = t.current;
                null == a ||
                  a.scrollToTop({ callback: () => requestAnimationFrame(e) });
              }),
            []
          ),
          u = s.useCallback(
            () =>
              new Promise(e => {
                let a = t.current;
                null == a ||
                  a.scrollToBottom({
                    callback: () => requestAnimationFrame(e),
                  });
              }),
            []
          );
        return (0, n.default)({
          id: "forum-channel-list-".concat(l.id),
          isEnabled: r,
          scrollToStart: o,
          scrollToEnd: u,
          setFocus: i,
        });
      }
    },
    891475: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useExtractEmbedPreview: function () {
            return o;
          },
        }),
        a("222007"),
        a("424973");
      var s = a("884691"),
        n = a("917351"),
        l = a("253981"),
        r = a("639440"),
        i = a("856220");
      function o(e, t, a) {
        let o = s.useRef(new Map()),
          [, u] = s.useState(null),
          [d, c] = s.useState(null),
          m = s.useMemo(
            () =>
              n.debounce((e, a) => {
                if (null == a || e || 0 === t) return;
                let s = a.match(l.default.URL_REGEX);
                if (null == s || 0 === s.length) {
                  (o.current = new Map()), c(null);
                  return;
                }
                let r = n.uniq(s).slice(0, i.MAX_THUMBNAIL_COUNT);
                c(r);
              }, 1e3),
            [t, o]
          );
        s.useEffect(() => {
          m(e, a);
        }, [m, a, e]),
          s.useEffect(() => {
            (async function e(e, t) {
              if (null == t) return;
              let a = e.current,
                s = new Set(a.keys()),
                n = t.filter(e => !(null == s ? void 0 : s.has(e)));
              if (0 !== n.length)
                try {
                  let t = await r.unfurlEmbedUrl(n);
                  (e.current = (function (e, t, a) {
                    return (
                      null == a ||
                        a.forEach(a => {
                          let s = (function (e, t) {
                            return e.find(
                              e =>
                                (null == t ? void 0 : t.url) != null &&
                                e.startsWith(t.url)
                            );
                          })(t, a);
                          if (null == s) return;
                          let n = e.get(s);
                          null == n ? e.set(s, [a]) : n.push(a);
                        }),
                      e
                    );
                  })(new Map(a), n, null == t ? void 0 : t.embeds)),
                    u({});
                } catch (e) {}
            })(o, d);
          }, [d]);
        let h = o.current,
          f = s.useMemo(() => {
            let e = [];
            return (
              null == d ||
                d.forEach(t => {
                  let a = h.get(t);
                  null != a && e.push(...a);
                }),
              e.length > 0 ? e : null
            );
          }, [d, h]);
        return { embeds: e ? null : f };
      }
    },
    781555: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return U;
          },
        });
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("146606"),
        o = a("446674"),
        u = a("819855"),
        d = a("77078"),
        c = a("841098"),
        m = a("206230"),
        h = a("526812"),
        f = a("404607"),
        g = a("258039"),
        x = a("291444"),
        C = a("592407"),
        S = a("305961"),
        _ = a("181114"),
        T = a("191814"),
        p = a("109264"),
        E = a("945330"),
        N = a("68238"),
        M = a("758710"),
        v = a("58608"),
        A = a("701909"),
        I = a("753582"),
        j = a("49111"),
        R = a("782340"),
        O = a("559553"),
        F = a("112545"),
        b = a("600310"),
        L = a("129185"),
        P = a("338283");
      function y(e) {
        let { handleHide: t } = e;
        return (0, s.jsx)(d.Clickable, {
          onClick: t,
          className: O.closeButton,
          "aria-label": R.default.Messages.DISMISS,
          children: (0, s.jsx)(E.default, { className: O.closeIcon }),
        });
      }
      function D(e) {
        let {
          username: t,
          title: a,
          videoSrc: n,
          messageCount: l,
          reaction: i,
          reactionCount: o,
          classname: u,
        } = e;
        return (0, s.jsxs)("div", {
          className: r(O.videoPreview, u),
          children: [
            (0, s.jsx)("div", {
              className: O.authorRow,
              children: (0, s.jsxs)("div", {
                className: O.rowGroup,
                children: [
                  (0, s.jsx)(d.Text, {
                    tag: "span",
                    className: O.author,
                    variant: "text-sm/semibold",
                    children: t,
                  }),
                  (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: O.postCreationTimestamp,
                    children:
                      R.default.Messages
                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP,
                  }),
                ],
              }),
            }),
            (0, s.jsx)(d.Heading, {
              variant: "heading-md/extrabold",
              className: O.title,
              color: "header-primary",
              "aria-hidden": !0,
              children: a,
            }),
            (0, s.jsx)(T.default, { size: 10 }),
            (0, s.jsx)(v.default, {
              className: O.video,
              src: n,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            }),
            (0, s.jsx)(T.default, { size: 10 }),
            (0, s.jsx)("div", {
              className: O.footer,
              children: (0, s.jsxs)("div", {
                className: O.forumPostControls,
                children: [
                  (0, s.jsxs)("div", {
                    className: O.messageCountBox,
                    children: [
                      (0, s.jsx)("span", {
                        className: O.messageCountIcon,
                        children: (0, s.jsx)(p.default, {
                          width: 16,
                          height: 16,
                        }),
                      }),
                      (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: l,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: O.reactionBox,
                    children: [
                      (0, s.jsx)("span", {
                        role: "img",
                        "aria-label": "",
                        children: i,
                      }),
                      (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: o,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var U = e => {
        var t, a;
        let { channel: l } = e,
          p = (0, c.default)(),
          E = (0, u.isThemeDark)(p),
          v = (0, o.useStateFromStores)([S.default], () =>
            S.default.getGuild(l.guild_id)
          ),
          U = (0, o.useStateFromStores)(
            [m.default],
            () => m.default.useReducedMotion
          ),
          w = (0, o.useStateFromStores)([h.default], () =>
            h.default.hasHidden(l.id)
          ),
          k = (0, x.useSubscriptionListingsForChannel)({
            guildId: l.guild_id,
            channelId: l.id,
          }),
          { transitions: H, setVisible: B } = (0, I.useShowAnimation)(U),
          G = n.useCallback(() => {
            B(!1), f.default.hideAdminOnboarding(l.id, !0);
          }, [l, B]);
        n.useEffect(() => {
          let e = (0, g.isOnboardingDismissed)(l.id);
          !e && B(!w);
        }, [l, B, w]);
        let V = n.useMemo(
            () => [
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG,
            ],
            []
          ),
          z = n.useMemo(
            () => [
              R.default.Messages
                .MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG,
              R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG,
            ],
            []
          ),
          W = () => {
            C.default.open(
              l.guild_id,
              j.GuildSettingsSections.ROLE_SUBSCRIPTIONS
            );
          },
          K =
            null !==
              (t =
                null == v
                  ? void 0
                  : v.hasFeature(
                      j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE
                    )) &&
            void 0 !== t &&
            t,
          Y = K
            ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA
            : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
          X =
            null !==
              (a =
                (null == v
                  ? void 0
                  : v.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) ||
                (null == v
                  ? void 0
                  : v.hasFeature(
                      j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL
                    ))) &&
            void 0 !== a &&
            a,
          Z = X
            ? R.default.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE
            : R.default.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
          q = X
            ? R.default.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE
            : R.default.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
        return (0, s.jsx)(s.Fragment, {
          children: H((e, t) =>
            t
              ? (0, s.jsxs)(i.animated.div, {
                  style: e,
                  className: O.container,
                  children: [
                    (0, s.jsxs)("div", {
                      className: r(O.wrapper, O.headerRow),
                      children: [
                        (0, s.jsxs)(d.Text, {
                          variant: "text-xs/normal",
                          className: O.visibilityInfo,
                          children: [
                            (0, s.jsx)(N.default, {
                              width: 12,
                              height: 12,
                              className: O.icon,
                            }),
                            R.default.Messages
                              .FORUM_CHANNEL_ONBOARDING_VISIBILITY,
                          ],
                        }),
                        (0, s.jsx)(y, { handleHide: G }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: O.contentContainer,
                      children: [
                        (0, s.jsxs)("div", {
                          className: r(O.contentRow, X && O.contentRowOne),
                          children: [
                            (0, s.jsx)("div", {
                              className: r(O.contentMediaContainer),
                              children: (0, s.jsxs)("div", {
                                className: O.contentVideoContainer,
                                children: [
                                  (0, s.jsx)(D, {
                                    username:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                    title:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                    messageCount: "34",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: O.backgroundVideo,
                                  }),
                                  (0, s.jsx)(D, {
                                    username:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                    title:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                    messageCount: "34",
                                    reactionCount: "84",
                                    reaction: "\uD83D\uDC9E",
                                    classname: r(
                                      O.backgroundVideo,
                                      O.secondaryVideo
                                    ),
                                  }),
                                  (0, s.jsx)(D, {
                                    username:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                    title:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                    messageCount: "7,103",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: O.highlightVideo,
                                  }),
                                ],
                              }),
                            }),
                            (0, s.jsxs)("article", {
                              className: O.contentTextContainer,
                              children: [
                                (0, s.jsx)(d.Heading, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  children: Z,
                                }),
                                (0, s.jsx)(T.default, { size: 8 }),
                                (0, s.jsx)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: q,
                                }),
                                (0, s.jsx)(T.default, { size: 16 }),
                                (0, s.jsxs)(d.Clickable, {
                                  onClick: () =>
                                    open(
                                      A.default.getCreatorSupportArticleURL(
                                        j.HelpdeskArticles.MEDIA_CHANNEL
                                      )
                                    ),
                                  className: O.helpCenterLink,
                                  children: [
                                    (0, s.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-link",
                                      className: O.helpCenterLinkText,
                                      children:
                                        R.default.Messages
                                          .MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER,
                                    }),
                                    (0, s.jsx)(M.default, {
                                      width: 16,
                                      height: 16,
                                      className: O.helpCenterLinkIcon,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(T.default, { size: 16 }),
                                (0, s.jsx)("div", {
                                  className: O.mediaChannelTagsContainer,
                                  children: V.map(e =>
                                    (0, s.jsx)(
                                      d.Text,
                                      {
                                        variant: "text-sm/medium",
                                        color: "text-normal",
                                        className: O.mediaChannelTag,
                                        children: e,
                                      },
                                      e
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        X &&
                          (0, s.jsxs)("div", {
                            className: r(O.contentRow, O.contentRowTwo),
                            children: [
                              (0, s.jsx)("div", {
                                className: r(O.contentMediaContainer),
                                children: (0, s.jsxs)("div", {
                                  className: O.contentImageContainer,
                                  children: [
                                    (0, s.jsx)("img", {
                                      src: E ? L : P,
                                      alt: "",
                                      className: r(
                                        O.previewEmbedImage,
                                        O.secondaryImage
                                      ),
                                    }),
                                    (0, s.jsx)("img", {
                                      src: E ? F : b,
                                      alt: "",
                                      className: O.previewEmbedImage,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)("article", {
                                className: O.contentTextContainer,
                                children: [
                                  (0, s.jsxs)(d.Text, {
                                    variant: "text-xxs/bold",
                                    className: O.serverSubPill,
                                    children: [
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL,
                                      " ",
                                      (0, s.jsx)("span", {
                                        role: "img",
                                        "aria-label": "",
                                        children: "\uD83D\uDD25",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(T.default, { size: 10 }),
                                  (0, s.jsx)(d.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE,
                                  }),
                                  (0, s.jsx)(T.default, { size: 8 }),
                                  (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children:
                                      R.default.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE,
                                  }),
                                  (0, s.jsx)(T.default, { size: 16 }),
                                  (0, s.jsx)("div", {
                                    className: O.mediaChannelTagsContainer,
                                    children: z.map(e =>
                                      (0, s.jsx)(
                                        d.Text,
                                        {
                                          variant: "text-sm/medium",
                                          color: "text-normal",
                                          className: O.mediaChannelTag,
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                  (0, s.jsx)(T.default, { size: 16 }),
                                  0 === k.length &&
                                    (0, s.jsx)(_.default, {
                                      size: d.Button.Sizes.MEDIUM,
                                      pauseAnimation: U,
                                      onClick: W,
                                      className: O.addChannelButton,
                                      color: d.Button.Colors.CUSTOM,
                                      children: Y,
                                    }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : null
          ),
        });
      };
    },
    236003: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("65597"),
        l = a("77078"),
        r = a("850391"),
        i = a("271972"),
        o = a("761354"),
        u = a("1999"),
        d = a("585722"),
        c = a("782340"),
        m = a("229726");
      function h(e) {
        let { parentChannel: t } = e,
          a = (0, n.useStateFromStoresArray)([d.default], () => {
            let e = d.default.getUploads(
              t.id,
              r.ChatInputTypes.CREATE_FORUM_POST.drafts.type
            );
            return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail);
          });
        return (0, s.jsxs)("div", {
          className: m.container,
          children: [
            (0, s.jsx)(l.Text, {
              variant: "text-md/semibold",
              color: "text-muted",
              children:
                c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE,
            }),
            (0, s.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children:
                c.default.Messages
                  .MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION,
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(l.ScrollerThin, {
                className: m.uploadsContainer,
                orientation: "horizontal",
                paddingFix: !1,
                fade: !0,
                children: (0, s.jsxs)("div", {
                  className: m.uploads,
                  children: [
                    a.map(e =>
                      (0, s.jsx)(
                        o.default,
                        {
                          channelId: t.id,
                          draftType:
                            r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                          upload: e,
                          keyboardModeEnabled: !0,
                          hideFileName: !0,
                          size: i.AttachmentListItemSizes.SMALL,
                        },
                        e.id
                      )
                    ),
                    (0, s.jsx)(u.ComposerUploadButton, { channelId: t.id }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    549558: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MediaPostThumbnail: function () {
            return b;
          },
        });
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("627445"),
        o = a.n(i),
        u = a("65597"),
        d = a("77078"),
        c = a("81594"),
        m = a("206230"),
        h = a("850391"),
        f = a("9560"),
        g = a("271972"),
        x = a("578198"),
        C = a("855455"),
        S = a("476765"),
        _ = a("857171"),
        T = a("832132"),
        p = a("808404"),
        E = a("987772"),
        N = a("228220"),
        M = a("58608"),
        v = a("412861"),
        A = a("42418"),
        I = a("782340"),
        j = a("632324");
      let R = [
          {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
          },
        ],
        O = (0, S.uid)();
      function F(e) {
        let { mediaAttachments: t, containerWidth: a, containerHeight: n } = e,
          l = (0, C.useImageContainerStyles)({
            numAttachments: t.length,
            containerWidth: a,
            containerHeight: n,
          });
        return (0, s.jsx)(s.Fragment, {
          children: t.map((e, t) => {
            var a;
            return (0, s.jsx)(
              "div",
              {
                style: l[t],
                children:
                  !0 === e.isVideo
                    ? (0, s.jsx)(M.default, {
                        src: e.src,
                        className: j.thumbnail,
                        "aria-hidden": !0,
                      })
                    : (0, s.jsx)("img", {
                        src: e.src,
                        className: j.thumbnail,
                        "aria-hidden": !0,
                        alt:
                          null !== (a = null == e ? void 0 : e.alt) &&
                          void 0 !== a
                            ? a
                            : "",
                      }),
              },
              e.src
            );
          }),
        });
      }
      let b = e => {
        var t;
        let { parentChannel: l } = e,
          { textAreaState: i } = (0, x.useForumPostComposerStore)(e => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
          }),
          C = (0, u.default)([m.default], () => m.default.keyboardModeEnabled),
          S = (0, A.default)(
            l,
            null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()
          ),
          M = n.useMemo(() => S.find(e => e.isThumbnail), [S]),
          b = null != S && S.length > 0,
          L = n.useMemo(() => {
            let e = (null == S ? void 0 : S.length) > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
          }, [S]),
          P = n.useCallback(
            e => {
              null != M &&
                c.default.remove(
                  l.id,
                  M.id,
                  h.ChatInputTypes.CREATE_FORUM_POST.drafts.type
                ),
                (0, v.promptToUpload)(
                  e.currentTarget.files,
                  l,
                  h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                  { requireConfirm: !0, isThumbnail: !0 }
                ),
                (e.currentTarget.value = null);
            },
            [l, M]
          ),
          y = e => {
            e.stopPropagation(),
              (null == M ? void 0 : M.upload) != null &&
                (0, d.openModalLazy)(async () => {
                  let e = M.upload;
                  o(null != e, "upload should not be null");
                  let { default: t } = await a
                    .el("467339")
                    .then(a.bind(a, "467339"));
                  return a =>
                    (0, s.jsx)(t, {
                      ...a,
                      upload: e,
                      channelId: l.id,
                      draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                      onSubmit: t => {
                        let { name: a, description: s, spoiler: n } = t;
                        c.default.update(
                          l.id,
                          e.id,
                          h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                          { filename: a, description: s, spoiler: n }
                        );
                      },
                      disableSpoiler: !0,
                    });
                });
          },
          D = (0, s.jsx)(_.default, {
            color: d.ButtonColors.CUSTOM,
            className: r(j.uploadFileInputContainer),
            innerClassName: j.uploadThumbnailContainer,
            onChange: P,
            multiple: !1,
            "aria-hidden": !0,
            filters: R,
            "aria-describedby": O,
            "aria-label": b
              ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
              : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
            children: b
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(F, {
                      mediaAttachments: S,
                      containerWidth: L.width,
                      containerHeight: L.height,
                    }),
                    (0, s.jsxs)("div", {
                      className: r(j.changeThumbnailLabelContainer, {
                        [j.changeThumbnailLabelOverflow]:
                          (null == S ? void 0 : S.length) > 2,
                      }),
                      children: [
                        (0, s.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "header-secondary",
                          children:
                            I.default.Messages
                              .MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL,
                        }),
                        null == M &&
                          (0, s.jsx)(T.default, {
                            className: j.editIcon,
                            width: 16,
                            height: 16,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(p.default, { className: j.uploadIcon }),
                    (0, s.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children:
                        I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    }),
                  ],
                }),
          });
        return (0, s.jsx)("div", {
          className: j.thumbnailContainer,
          style: L,
          children:
            null != M
              ? (0, s.jsx)(g.default, {
                  actions: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(f.default, {
                        className: j.action,
                        tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                        onClick: y,
                        children: (0, s.jsx)(E.default, {}),
                      }),
                      (0, s.jsx)(f.default, {
                        className: j.action,
                        tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                        onClick: () =>
                          c.default.remove(
                            l.id,
                            M.id,
                            h.ChatInputTypes.CREATE_FORUM_POST.drafts.type
                          ),
                        dangerous: !0,
                        children: (0, s.jsx)(N.default, {}),
                      }),
                    ],
                  }),
                  draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                  id: M.id,
                  channelId: l.id,
                  handleEditModal: y,
                  keyboardModeEnabled: C,
                  size: g.AttachmentListItemSizes.SMALL,
                  className: j.attachmentListItem,
                  children: D,
                })
              : (0, s.jsx)(s.Fragment, { children: D }),
        });
      };
    },
    42418: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        }),
        a("881410"),
        a("222007"),
        a("424973"),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660");
      var s = a("884691"),
        n = a("65597"),
        l = a("850391"),
        r = a("585722"),
        i = a("856220"),
        o = a("891475");
      function u(e, t) {
        var a, u;
        let { mediaAttachments: d, hasThumbnail: c } = (function (e) {
            let [t, a] = s.useState(null),
              o = (0, n.useStateFromStoresArray)([r.default], () => {
                let t = r.default.getUploads(
                    e.id,
                    l.ChatInputTypes.CREATE_FORUM_POST.drafts.type
                  ),
                  a = t.find(e => e.isThumbnail);
                return null != a ? [a] : t.filter(e => e.isVideo || e.isImage);
              }),
              u = s.useMemo(() => o.some(e => e.isThumbnail), [o]);
            return (
              s.useEffect(() => {
                let e = [],
                  t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
                    var a;
                    let s =
                      null == t
                        ? void 0
                        : null === (a = t.item) || void 0 === a
                          ? void 0
                          : a.file;
                    if (null == s) return [];
                    let n = URL.createObjectURL(s);
                    return (
                      e.push(n),
                      {
                        id: t.id,
                        src: n,
                        spoiler: t.spoiler,
                        alt: t.description,
                        isThumbnail: t.isThumbnail,
                        upload: !0 === t.isThumbnail ? t : void 0,
                        isVideo: t.isVideo,
                      }
                    );
                  });
                return (
                  a(t),
                  () => {
                    a(null), e.forEach(e => URL.revokeObjectURL(e));
                  }
                );
              }, [o]),
              { mediaAttachments: t, hasThumbnail: u }
            );
          })(e),
          m = Math.max(
            i.MAX_THUMBNAIL_COUNT -
              (null !== (a = null == d ? void 0 : d.length) && void 0 !== a
                ? a
                : 0),
            0
          ),
          { embeds: h } = (0, o.useExtractEmbedPreview)(c, m, t),
          f = s.useMemo(
            () =>
              null == h
                ? void 0
                : h.flatMap(e => {
                    let t = (0, i.getEmbedPreviewImageUrl)(e);
                    return null == t
                      ? []
                      : { id: t, src: t, spoiler: !1, alt: e.title };
                  }),
            [h]
          ),
          g = [...(null != d ? d : [])];
        return (
          !c &&
            m > 0 &&
            g.push(
              ...(null !== (u = null == f ? void 0 : f.slice(0, m)) &&
              void 0 !== u
                ? u
                : [])
            ),
          g
        );
      }
    },
    753582: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useShowAnimation: function () {
            return l;
          },
        }),
        a("222007");
      var s = a("884691"),
        n = a("146606");
      function l(e) {
        let [t, a] = s.useState(!0),
          l = (0, n.useTransition)(t, {
            keys: e => (e ? "shown" : "hidden"),
            config: r,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0,
            immediate: e,
          });
        return { transitions: l, setVisible: a };
      }
      let r = { mass: 1, tension: 250, friction: 18, clamp: !0 };
    },
    857171: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        l = a.n(n),
        r = a("77078"),
        i = a("371642");
      function o(e) {
        let {
          children: t,
          className: a,
          innerClassName: n,
          onChange: o,
          "aria-label": u,
          "aria-describedby": d,
          filters: c,
          multiple: m = !1,
          disabled: h = !1,
          submitting: f = !1,
          ...g
        } = e;
        return (0, s.jsx)(r.FocusRing, {
          within: !0,
          children: (0, s.jsxs)("div", {
            className: l(
              a,
              (0, r.getButtonStyle)({ ...g, submitting: f, disabled: h })
            ),
            "aria-disabled": h,
            children: [
              (0, s.jsx)("span", {
                "aria-hidden": !0,
                className: n,
                children: t,
              }),
              (0, s.jsx)(i.default, {
                tabIndex: 0,
                onChange: o,
                filters: c,
                multiple: m,
                "aria-label": u,
                "aria-describedby": d,
                disabled: h,
              }),
            ],
          }),
        });
      }
    },
    673078: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        l = a("159190"),
        r = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 16 16",
              children: [
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M1.93944 14.6655H6.18191C6.51646 14.6655 6.78797 14.394 6.78797 14.0594C6.78797 13.7249 6.51646 13.4534 6.18191 13.4534H3.40249L7.21646 9.63937C7.45313 9.40271 7.45313 9.01906 7.21646 8.7824C7.09828 8.66391 6.94313 8.60482 6.78797 8.60482C6.63282 8.60482 6.47767 8.66391 6.35948 8.7824L2.54551 12.5964V9.81695C2.54551 9.4824 2.27399 9.21089 1.93944 9.21089C1.60489 9.21089 1.33337 9.4824 1.33337 9.81695V14.0594C1.33337 14.394 1.60489 14.6655 1.93944 14.6655Z",
                }),
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M8.78362 7.21512C9.02029 7.45179 9.40393 7.45179 9.6406 7.21512L13.4546 3.40114V6.18056C13.4546 6.51511 13.7261 6.78663 14.0606 6.78663C14.3952 6.78663 14.6667 6.51511 14.6667 6.18056V1.9381C14.6667 1.60355 14.3952 1.33203 14.0606 1.33203L9.81818 1.33203C9.48363 1.33203 9.21211 1.60355 9.21211 1.9381C9.21211 2.27265 9.48363 2.54416 9.81818 2.54416H12.5976L8.78362 6.35814C8.54695 6.59481 8.54695 6.97845 8.78362 7.21512Z",
                }),
              ],
            });
          },
          l.MaximizeIcon,
          void 0,
          { size: 16 }
        );
    },
    887718: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        l = a("666031"),
        r = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 29,
              height: a = 22,
              color: n = "currentColor",
              backgroundColor: l,
              ...i
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 29 22",
              children: (0, s.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, s.jsx)("rect", {
                    width: t,
                    height: a,
                    fill: l,
                    fillOpacity: ".8",
                    rx: "3",
                  }),
                  (0, s.jsx)("path", {
                    d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                    fill: n,
                  }),
                  (0, s.jsx)("path", {
                    d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                    fill: n,
                  }),
                  (0, s.jsx)("path", {
                    d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                    fill: n,
                  }),
                ],
              }),
            });
          },
          l.GifIcon,
          void 0,
          { size: 29 }
        );
    },
    808404: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        l = a("851298"),
        r = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 39,
              height: a = 27,
              color: n = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 39 27",
              fill: n,
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  className: l,
                  d: "M26.4909 2.76514H5.78906C3.20886 2.76514 1.11719 4.79342 1.11719 7.29544V20.8863C1.11719 23.3884 3.20886 25.4167 5.78906 25.4167H31.9922C34.5724 25.4167 36.6641 23.3884 36.6641 20.8863V12.63C35.9239 12.8436 35.1398 12.9583 34.3281 12.9583C29.8128 12.9583 26.1523 9.40882 26.1523 5.03029C26.1523 4.24318 26.2706 3.48286 26.4909 2.76514ZM13 7.29544C14.2885 7.29544 15.3359 8.30932 15.3359 9.56059C15.3359 10.8128 14.2885 11.8257 13 11.8257C11.7087 11.8257 10.6641 10.8128 10.6641 9.56059C10.6641 8.30932 11.7087 7.29544 13 7.29544ZM10.6641 20.8863L14.168 16.356L16.5039 18.6212L21.1758 12.9583L24.6797 20.8863H17.6719H10.6641Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M35.4961 0.5V3.89773H39V6.16288H35.4961V9.56061H33.1602V6.16288H29.6562V3.89773H33.1602V0.5H35.4961Z",
                  fill: n,
                }),
              ],
            });
          },
          l.ImagePlusIcon,
          void 0,
          { size: 39 }
        );
    },
    891152: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        l = a("620000"),
        r = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M12.1803 4.66659L12.1803 14.6666H10.4701L10.4701 4.66659L8.53289 6.63325L7.33329 5.40825L11.3292 1.33325L15.3333 5.40825L14.1337 6.65825L12.1803 4.66659Z",
                }),
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M3.81962 11.3333L3.81962 1.33325L5.52983 1.33325L5.52985 11.3333L7.46703 9.36658L8.66663 10.5916L4.67068 14.6666L0.666626 10.5916L1.86622 9.34158L3.81962 11.3333Z",
                }),
              ],
            });
          },
          l.ArrowsUpDownIcon,
          void 0,
          { size: 16 }
        );
    },
    192779: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArrowsUpDownIcon: function () {
            return r;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("669491"),
        l = a("82169");
      let r = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=21bc08a0f66d400010b7.js.map

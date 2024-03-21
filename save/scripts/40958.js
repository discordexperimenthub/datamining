(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40958"],
  {
    940159: function (e, t, s) {
      "use strict";
      e.exports = s.p + "ab941e3bb3e2e650927a.svg";
    },
    517790: function (e, t, s) {
      "use strict";
      e.exports = s.p + "6f222b93b4b971e68613.svg";
    },
    642995: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("913144"),
        a = s("599110"),
        l = s("49111"),
        i = {
          dismissForApplicationId(e) {
            n.default.dispatch({
              type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
              key: e,
              value: !0,
            }),
              a.default.track(l.AnalyticEvents.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
              });
          },
        };
    },
    125667: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return V;
          },
        }),
        s("424973"),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        i = s.n(l),
        r = s("917351"),
        o = s.n(r),
        u = s("866227"),
        d = s.n(u),
        c = s("458960"),
        h = s("509043"),
        f = s("446674"),
        m = s("669491"),
        g = s("77078"),
        p = s("642995"),
        S = s("656723"),
        v = s("299285"),
        x = s("384997"),
        C = s("943551"),
        T = s("630485"),
        N = s("478025"),
        E = s("271938"),
        I = s("305961"),
        _ = s("957255"),
        A = s("27618"),
        M = s("101125"),
        F = s("401848"),
        j = s("191542"),
        O = s("697218"),
        w = s("471671"),
        L = s("32238"),
        y = s("599110"),
        R = s("659500"),
        b = s("718517"),
        P = s("449008"),
        D = s("387111"),
        U = s("49111"),
        H = s("782340"),
        k = s("189209");
      let B = [];
      class z extends a.PureComponent {
        componentDidMount() {
          this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }),
              (this.timeout = null),
              this.logShownEventIfNeeded();
          }, 100);
        }
        componentDidUpdate() {
          this.logShownEventIfNeeded();
        }
        logShownEventIfNeeded() {
          let e = this.props.activity.application_id;
          null != e &&
            -1 === B.indexOf(e) &&
            (y.default.track(U.AnalyticEvents.SHOW_TUTORIAL, {
              tutorial: "activity-invite-nux-inline",
              application_id: e,
            }),
            B.push(e));
        }
        componentWillUnmount() {
          null !== this.timeout && clearTimeout(this.timeout);
        }
        render() {
          let { activity: e } = this.props;
          return (0, n.jsxs)("div", {
            className: i(k.activityInviteEducation, {
              [k.activityInviteEducationFadeIn]: this.state.fadeIn,
            }),
            children: [
              (0, n.jsx)("div", { className: k.activityInviteEducationArrow }),
              (0, n.jsx)("span", {
                children:
                  H.default.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format(
                    {
                      game: e.name,
                      dismissOnClick: this.handleDismissInviteEducation,
                    }
                  ),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { fadeIn: !1 }),
            (this.timeout = null),
            (this.handleDismissInviteEducation = () => {
              let { activity: e } = this.props;
              null != e &&
                null != e.application_id &&
                p.default.dismissForApplicationId(e.application_id);
            });
        }
      }
      function G(e) {
        let { channel: t, guild: s } = e;
        return (0, n.jsx)(x.default, {
          contentTypes: [],
          children: e => {
            let { visibleContent: t, markAsDismissed: s } = e;
            return null;
          },
        });
      }
      class W extends a.PureComponent {
        componentDidMount() {
          R.ComponentDispatch.subscribe(
            U.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN,
            this.emphasizeSlowmodeCooldown
          );
        }
        componentWillUnmount() {
          R.ComponentDispatch.unsubscribe(
            U.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN,
            this.emphasizeSlowmodeCooldown
          );
        }
        getCooldownTextStyle() {
          let { color: e } = this.state,
            { baseTextColor: t, activeTextColor: s } = this.props,
            n = {
              color: e.interpolate({
                inputRange: [0, 1],
                outputRange: [t, (0, h.hex2rgb)(s, 0.9)],
              }),
            };
          return n;
        }
        render() {
          let e;
          let {
              guildId: t,
              activity: s,
              showInviteEducation: a,
              isFocused: l,
              typingUsers: r,
              className: u,
              slowmodeCooldownGuess: h,
              isBypassSlowmode: f,
              channel: m,
              isThreadCreation: p,
              renderDots: S,
              poggermodeEnabled: v,
              isComboing: x,
            } = this.props,
            { rateLimitPerUser: C } = m,
            N = O.default.getCurrentUser(),
            E = I.default.getGuild(t),
            _ = C > 0,
            M = p
              ? []
              : o(r)
                  .keys()
                  .filter(e => e !== (null == N ? void 0 : N.id))
                  .reject(e => A.default.isBlocked(e))
                  .map(e => O.default.getUser(e))
                  .filter(P.isNotNullish)
                  .map(e => D.default.getName(t, this.props.channel.id, e))
                  .value();
          if (0 === M.length && !_ && !x)
            return a && null != s
              ? (0, n.jsx)(z, { activity: s, isFocused: l })
              : (0, n.jsx)(G, { channel: m, guild: E });
          let F = "",
            j = null,
            w = "";
          if (_) {
            if (
              ((j = (0, n.jsx)(L.default, {
                className: k.slowModeIcon,
                width: 16,
                height: 16,
              })),
              C >= b.default.Seconds.HOUR)
            ) {
              let e = Math.floor(C / b.default.Seconds.HOUR),
                t = Math.floor(
                  (C - e * b.default.Seconds.HOUR) / b.default.Seconds.MINUTE
                ),
                s =
                  C - e * b.default.Seconds.HOUR - t * b.default.Seconds.MINUTE;
              w = H.default.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
                hours: e,
                minutes: t,
                seconds: s,
              });
            } else if (C >= 60) {
              let e = Math.floor(C / 60);
              w = H.default.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
                minutes: e,
                seconds: C - 60 * e,
              });
            } else
              w = H.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                seconds: C,
              });
            if (!f && h > 0) {
              let e = d.duration(h);
              if (h > b.default.Millis.HOUR) {
                let t = "".concat(e.minutes()).padStart(2, "0"),
                  s = "".concat(e.seconds()).padStart(2, "0");
                F = "".concat(e.hours(), ":").concat(t, ":").concat(s);
              } else {
                let t = "".concat(e.seconds()).padStart(2, "0");
                F = "".concat(e.minutes(), ":").concat(t);
              }
            } else
              0 === M.length &&
                (F = f
                  ? H.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE
                  : H.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
          }
          let [y, R, U] = M;
          return (
            (e =
              0 === M.length
                ? ""
                : 1 === M.length
                  ? H.default.Messages.ONE_USER_TYPING.format({ a: y })
                  : 2 === M.length
                    ? H.default.Messages.TWO_USERS_TYPING.format({ a: y, b: R })
                    : 3 === M.length
                      ? H.default.Messages.THREE_USERS_TYPING.format({
                          a: y,
                          b: R,
                          c: U,
                        })
                      : H.default.Messages.SEVERAL_USERS_TYPING),
            (0, n.jsxs)("div", {
              className: i(
                k.typing,
                { "stop-animation": !l, [k.isComboing]: v && x },
                u
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: k.typingDots,
                  children: [
                    M.length > 0 &&
                      !1 !== S &&
                      (0, n.jsx)(g.Dots, {
                        className: k.ellipsis,
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    (0, n.jsx)("span", {
                      className: k.text,
                      "aria-live": "polite",
                      "aria-atomic": !0,
                      children: e,
                    }),
                  ],
                }),
                _ &&
                  (0, n.jsx)(g.Tooltip, {
                    text: w,
                    children: e =>
                      (0, n.jsxs)(c.default.div, {
                        style: this.getCooldownTextStyle(),
                        className: k.cooldownWrapper,
                        ...e,
                        children: [F, j],
                      }),
                  }),
                v && x && (0, n.jsx)(T.default, { channelId: m.id }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = { color: new c.default.Value(0) }),
            (this.emphasizeSlowmodeCooldown = () => {
              let { color: e } = this.state;
              c.default
                .sequence([
                  c.default.timing(e, {
                    toValue: 1,
                    duration: 100,
                    easing: c.default.Easing.quad,
                  }),
                  c.default.timing(e, {
                    delay: 250,
                    toValue: 0,
                    duration: 100,
                    easing: c.default.Easing.quad,
                  }),
                ])
                .start();
            });
        }
      }
      function V(e) {
        let { channel: t, isThreadCreation: s = !1, ...a } = e,
          l = (0, f.useStateFromStores)([M.default], () =>
            M.default.findActivity(e => null != e.application_id)
          ),
          i = (0, f.useStateFromStores)([C.default, E.default], () =>
            C.default.getUserCombo(E.default.getId(), t.id)
          ),
          r = (0, f.useStateFromStores)([N.default, v.default], () =>
            (0, S.default)(t, l, N.default, v.default)
          ),
          o = (0, f.useStateFromStores)([F.default], () =>
            F.default.getSlowmodeCooldownGuess(
              t.id,
              s ? F.SlowmodeType.CreateThread : F.SlowmodeType.SendMessage
            )
          ),
          u = (0, f.useStateFromStores)([_.default], () =>
            s
              ? _.default.can(U.Permissions.MANAGE_THREADS, t)
              : _.default.can(U.Permissions.MANAGE_CHANNELS, t) ||
                _.default.can(U.Permissions.MANAGE_MESSAGES, t)
          ),
          d = {
            ...a,
            baseTextColor: (0, g.useToken)(
              m.default.colors.INTERACTIVE_NORMAL
            ).hex(),
            activeTextColor: (0, g.useToken)(
              m.default.colors.INTERACTIVE_NORMAL
            ).hex(),
            showInviteEducation: r,
            activity: l,
            typingUsers: (0, f.useStateFromStores)([j.default], () =>
              j.default.getTypingUsers(t.id)
            ),
            isFocused: (0, f.useStateFromStores)([w.default], () =>
              w.default.isFocused()
            ),
            guildId: t.guild_id,
            slowmodeCooldownGuess: o,
            isComboing: null != i,
            isBypassSlowmode: u,
            channel: t,
            isThreadCreation: s,
          };
        return (0, n.jsx)(W, { ...d });
      }
    },
    373803: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("335802");
      s.es(n, t);
    },
    419135: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          createASTHighlighter: function () {
            return h;
          },
        }),
        s("222007"),
        s("781738"),
        s("424973");
      var n = s("917351"),
        a = s.n(n),
        l = s("111633"),
        i = s.n(l);
      let r = new Set([
        "a",
        "an",
        "and",
        "are",
        "as",
        "at",
        "be",
        "but",
        "by",
        "for",
        "if",
        "in",
        "into",
        "is",
        "it",
        "no",
        "not",
        "of",
        "on",
        "or",
        "such",
        "that",
        "the",
        "their",
        "then",
        "there",
        "these",
        "they",
        "this",
        "to",
        "was",
        "will",
        "with",
      ]);
      function o(e) {
        return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
      }
      function u(e) {
        return e.toLowerCase();
      }
      function d(e) {
        return r.has(e);
      }
      function c(e) {
        return 0 === e.length;
      }
      function h(e) {
        let t = new Set(
          a(e.split(/\W+/)).map(o).reject(c).map(u).reject(d).map(i).value()
        );
        return e =>
          (function e(t, s) {
            if (Array.isArray(t)) t.forEach(t => e(t, s));
            else if ("string" == typeof t.content && "codeBlock" !== t.type) {
              let e = [],
                n = "";
              t.content.split(/(\W+)/g).forEach(t => {
                var a, l;
                if (
                  ((a = t), (l = s), !c((a = u(o(a)))) && !d(a) && l.has(i(a)))
                )
                  n.length > 0 && e.push({ type: "text", content: n }),
                    e.push({ type: "highlight", content: t }),
                    (n = "");
                else n += t;
              }),
                e.length > 0 &&
                  (n.length > 0 && e.push({ type: "text", content: n }),
                  "text" === t.type
                    ? (t.content = e)
                    : (t.content = [{ type: "text", content: e }]));
            } else null != t.content && e(t.content, s);
            return t;
          })(e, t);
      }
    },
    656723: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        }),
        s("702976");
      var n = s("568734"),
        a = s("871388"),
        l = s("49111");
      function i(e, t, s, i) {
        let r = null == t ? void 0 : t.application_id;
        if (
          null == e ||
          null == t ||
          !(0, a.default)(t, l.ActivityFlags.JOIN) ||
          null == r
        )
          return !1;
        let o = i.getApplication(r);
        return (
          !(
            null == o || (0, n.hasFlag)(o.flags, l.ApplicationFlags.EMBEDDED)
          ) && s.shouldShowEducation(r)
        );
      }
    },
    339792: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useForumChannelStore: function () {
            return g;
          },
          useForumChannelStoreApi: function () {
            return p;
          },
        }),
        s("222007");
      var n = s("627445"),
        a = s.n(n),
        l = s("308503"),
        i = s("482402"),
        r = s("335710"),
        o = s("446674"),
        u = s("42203"),
        d = s("446480");
      let c = new Set(),
        h = {
          layoutType: i.ForumLayout.LIST,
          sortOrder: r.ThreadSortOrder.CREATION_DATE,
          tagFilter: c,
          scrollPosition: 0,
        };
      class f {
        constructor(e, t) {
          (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
              let s = this.get(),
                n = this.getChannelState(e),
                a = { ...s.channelStates };
              (a[e] = { ...n, ...t }), this.set({ channelStates: a });
            }),
            (this.getChannelState = e => {
              if (null == e) return h;
              let { channelStates: t } = this.get(),
                s = t[e];
              if (null == s) {
                let t = u.default.getChannel(e);
                a(
                  null != t,
                  "[Forum Channel Store] The channel should not be missing."
                ),
                  (s = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: c,
                    scrollPosition: 0,
                  });
              }
              return s;
            }),
            (this.toggleTagFilter = (e, t) => {
              let s = this.getChannelState(e),
                n = new Set(s.tagFilter);
              n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
            }),
            (this.setTagFilter = (e, t) => {
              this.setChannelState(e, { tagFilter: t }),
                d.default.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
              this.setChannelState(e, { sortOrder: t }),
                d.default.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
              this.setChannelState(e, { layoutType: t }),
                d.default.setLayout(t);
            }),
            (this.setScrollPosition = (e, t) => {
              this.setChannelState(e, { scrollPosition: t });
            });
        }
      }
      let m = (0, l.default)((e, t) => new f(e, t)),
        g = e => {
          let t = m(),
            s = (0, o.useStateFromStores)([u.default], () =>
              u.default.getChannel(e)
            );
          return null == s ? h : t.getChannelState(e);
        },
        p = () => m;
    },
    512630: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s("794252");
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        l = s.n(a),
        i = s("506838"),
        r = s("681187"),
        o = s("605160"),
        u = s("265363"),
        d = s("902558"),
        c = e => {
          let { obscureReason: t, iconClassname: s } = e;
          return (0, i.match)(t)
            .with(o.ObscureReason.EXPLICIT_CONTENT, () =>
              (0, n.jsx)(r.ImageWarningIcon, {
                className: l(s, d.obscuredIcon),
                color: "white",
              })
            )
            .with(o.ObscureReason.SPOILER, () =>
              (0, n.jsx)(u.default, { className: s })
            )
            .otherwise(() => null);
        };
    },
    152637: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MAX_THUMBNAIL_HEIGHT: function () {
            return en;
          },
          MAX_THUMBNAIL_WIDTH: function () {
            return ea;
          },
          default: function () {
            return el;
          },
          useHighlightedChannelName: function () {
            return er;
          },
          MessageCount: function () {
            return ed;
          },
          DefaultReaction: function () {
            return ec;
          },
          MostUsedReaction: function () {
            return eh;
          },
          Facepile: function () {
            return em;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        i = s.n(l),
        r = s("627445"),
        o = s.n(r),
        u = s("866227"),
        d = s.n(u),
        c = s("974667"),
        h = s("446674"),
        f = s("669491"),
        m = s("77078"),
        g = s("125667"),
        p = s("731898"),
        S = s("419135"),
        v = s("651693"),
        x = s("605160"),
        C = s("875978"),
        T = s("70845"),
        N = s("95045"),
        E = s("359132"),
        I = s("933629"),
        _ = s("350134"),
        A = s("845579"),
        M = s("982108"),
        F = s("42203"),
        j = s("957255"),
        O = s("27618"),
        w = s("471671"),
        L = s("738107"),
        y = s("594098"),
        R = s("505684"),
        b = s("109264"),
        P = s("93427"),
        D = s("956089"),
        U = s("811305"),
        H = s("888400"),
        k = s("339792"),
        B = s("680986"),
        z = s("612278"),
        G = s("430475"),
        W = s("994810"),
        V = s("512630"),
        Y = s("578198"),
        Z = s("136460"),
        q = s("601016"),
        K = s("810758"),
        X = s("251432"),
        Q = s("390083"),
        J = s("49111"),
        $ = s("719347"),
        ee = s("782340"),
        et = s("304696"),
        es = s("919163");
      let en = 72,
        ea = 72;
      var el = a.memo(function (e) {
        let {
            threadId: t,
            goToThread: s,
            observePostVisibilityAnalytics: l,
            overrideMedia: r,
            className: u,
            containerWidth: d,
          } = e,
          {
            channel: f,
            isOpen: g,
            messageCount: S,
            firstMessage: v,
            content: x,
            media: C,
          } = (function (e) {
            let { threadId: t, overrideMedia: s } = e,
              n = (0, h.useStateFromStores)([F.default], () =>
                F.default.getChannel(t)
              );
            o(
              null != n,
              "the thread should not be null here, a store must have missed an update"
            );
            let a = (0, h.useStateFromStores)(
                [M.default],
                () => M.default.getCurrentSidebarChannelId(n.parent_id) === n.id
              ),
              { firstMessage: l } = (0, z.useFirstForumPostMessage)(n),
              { content: i, firstMedia: r } = (0,
              B.useForumPostFirstMessageMarkup)({ firstMessage: l }),
              { messageCountText: u } = (0, B.useMessageCount)(n);
            return {
              channel: n,
              isOpen: a,
              messageCount: u,
              firstMessage: l,
              content: i,
              media: null != s ? s : r,
            };
          })({ threadId: t, overrideMedia: r }),
          { ref: T, height: N } = (0, p.default)(),
          E = (0, Y.useForumPostComposerStore)(e => e.setCardHeight);
        a.useEffect(() => {
          null != N && E(t, N);
        }, [N, E, t]),
          a.useEffect(() => {
            null == l || l(T.current, t);
          }, [T, l, t]);
        let I = a.useRef(null),
          { handleLeftClick: _, handleRightClick: A } = (0, Q.default)({
            facepileRef: I,
            goToThread: s,
            channel: f,
          }),
          { role: j, onFocus: O, ...w } = (0, c.useListItem)(t),
          { isFocused: L, handleFocus: y, handleBlur: R } = (0, K.default)(O);
        return (0, n.jsxs)("div", {
          ref: T,
          "data-item-id": t,
          onClick: _,
          onContextMenu: A,
          className: i(et.container, u, { [et.isOpen]: g }),
          children: [
            (0, n.jsx)(m.Clickable, {
              onClick: _,
              focusProps: { ringTarget: T },
              onContextMenu: A,
              "aria-label": ee.default.Messages.FORUM_POST_ARIA_LABEL.format({
                title: f.name,
                count: S,
              }),
              className: et.focusTarget,
              onFocus: y,
              onBlur: R,
              ...w,
            }),
            (0, n.jsxs)("div", {
              className: et.left,
              children: [
                (0, n.jsx)(m.HeadingLevel, {
                  children: (0, n.jsx)(ei, {
                    channel: f,
                    firstMessage: v,
                    content: x,
                    hasMediaAttachment: null != C,
                    containerWidth: d,
                  }),
                }),
                (0, n.jsx)(m.FocusBlock, {
                  enabled: !L,
                  children: (0, n.jsx)(eu, {
                    channel: f,
                    firstMessage: v,
                    facepileRef: I,
                  }),
                }),
              ],
            }),
            (null == v ? void 0 : v.blocked) || null == C
              ? null
              : (0, n.jsx)(eg, { channel: f, firstMedia: C }),
          ],
        });
      });
      function ei(e) {
        let {
            channel: t,
            firstMessage: s,
            content: a,
            hasMediaAttachment: l,
            containerWidth: r,
          } = e,
          { isNew: o, hasUnreads: u } = (0, B.useForumPostReadStates)(t),
          d = er(t),
          { postTitleRef: c, isNewBadgeOverflow: h } = (0,
          X.useNewBadgeOverflowAware)(o, 24, r);
        return (0, n.jsxs)("div", {
          className: et.body,
          children: [
            (0, n.jsx)(q.default, { channel: t }),
            (0, n.jsx)("div", {
              className: i(et.header, { [et.withNewBadgeOverflow]: h }),
              children: (0, n.jsxs)("div", {
                className: et.headerText,
                children: [
                  (0, n.jsx)(m.Heading, {
                    variant: "heading-lg/semibold",
                    color: u ? "header-primary" : "text-muted",
                    lineClamp: 2,
                    className: et.postTitleText,
                    children: (0, n.jsxs)("span", {
                      ref: c,
                      children: [
                        d,
                        o &&
                          (0, n.jsx)("span", {
                            className: et.newBadgeWrapper,
                            children: (0, n.jsx)(D.TextBadge, {
                              className: et.newBadge,
                              color: f.default.unsafe_rawColors.BRAND_260.css,
                              text: ee.default.Messages.NEW,
                            }),
                          }),
                      ],
                    }),
                  }),
                  o &&
                    h &&
                    (0, n.jsx)(D.TextBadge, {
                      className: et.newBadge,
                      color: f.default.unsafe_rawColors.BRAND_260.css,
                      text: ee.default.Messages.NEW,
                    }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: et.message,
              children: (0, n.jsx)(eo, {
                channel: t,
                message: s,
                content: a,
                hasMediaAttachment: l,
                hasUnreads: u,
              }),
            }),
          ],
        });
      }
      function er(e) {
        let t = (0, h.useStateFromStores)([W.default], () =>
            W.default.getHasSearchResults(e.parent_id)
          ),
          s = (0, h.useStateFromStores)([W.default], () =>
            W.default.getSearchQuery(e.parent_id)
          ),
          n = a.useMemo(
            () => (0, S.createASTHighlighter)(t && null != s ? s : ""),
            [t, s]
          ),
          l = a.useMemo(
            () =>
              (0, N.default)(
                { content: e.name, embeds: [] },
                { postProcessor: n }
              ).content,
            [e.name, n]
          );
        return l;
      }
      let eo = a.memo(function (e) {
        let {
            message: t,
            channel: s,
            content: a,
            hasMediaAttachment: l,
            hasUnreads: r,
          } = e,
          o = (0, h.useStateFromStores)(
            [O.default],
            () => null != t && O.default.isBlocked(t.author.id)
          ),
          u = (0, h.useStateFromStores)([G.default], () =>
            G.default.isLoading(s.id)
          ),
          d = (0, h.useStateFromStores)([j.default], () =>
            j.default.can(J.Permissions.MANAGE_MESSAGES, s)
          ),
          c = A.RenderSpoilers.useSetting(),
          f = null;
        if (o)
          f = (0, n.jsx)(m.Text, {
            className: et.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ee.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE,
          });
        else {
          let { contentPlaceholder: e, renderedContent: s } =
            null == t
              ? { contentPlaceholder: null, renderedContent: null }
              : (0, P.renderSingleLineMessage)(
                  t,
                  a,
                  o,
                  i(et.messageContent, es.inlineFormat, es.smallFontSize),
                  {
                    iconClass: et.messageContentIcon,
                    iconSize: $.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
                  }
                );
          f =
            null != s
              ? (0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  color: r ? "header-secondary" : "text-muted",
                  children: s,
                })
              : l
                ? null
                : (0, n.jsx)(m.Text, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: r ? "header-secondary" : "text-muted",
                    className: et.messageContent,
                    children:
                      null == t
                        ? u
                          ? null
                          : ee.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        : e,
                  });
        }
        return (0, n.jsxs)(R.ObscuredDisplayContext.Provider, {
          value: (0, T.default)(c, d),
          children: [
            !o &&
              (0, n.jsx)(Z.default, {
                channel: s,
                message: t,
                renderColon: null != f,
                hasUnreads: r,
              }),
            (0, n.jsx)(m.FocusBlock, {
              className: et.messageFocusBlock,
              children: f,
            }),
          ],
        });
      });
      function eu(e) {
        let { channel: t, facepileRef: s, firstMessage: a } = e,
          l = (0, B.useTypingUserIds)(t),
          i =
            (null == a ? void 0 : a.reactions) != null &&
            a.reactions.length > 0;
        return (0, n.jsxs)("div", {
          className: et.footer,
          children: [
            i || null == a
              ? null
              : (0, n.jsx)(ec, { firstMessage: a, channel: t }),
            null == a ? null : (0, n.jsx)(eh, { firstMessage: a, channel: t }),
            (0, n.jsx)(ed, { channel: t, iconSize: 14 }),
            (0, n.jsx)("span", { className: et.bullet, children: "•" }),
            l.length > 0
              ? (0, n.jsxs)("div", {
                  className: et.typing,
                  children: [
                    (0, n.jsx)(em, { channel: t, userIds: l, facepileRef: s }),
                    (0, n.jsx)("div", {
                      className: et.dots,
                      children: (0, n.jsx)(m.Dots, {
                        themed: !0,
                        dotRadius: 2,
                      }),
                    }),
                    (0, n.jsx)(g.default, {
                      channel: t,
                      className: et.typingUsers,
                      renderDots: !1,
                    }),
                  ],
                })
              : (0, n.jsx)(ef, { channel: t }),
          ],
        });
      }
      function ed(e) {
        let { channel: t, iconSize: s, showReadState: a = !1 } = e,
          { messageCountText: l, unreadCount: r } = (0, B.useMessageCount)(t);
        return (0, n.jsxs)("div", {
          className: i(et.messageCountBox, { [et.hasRead]: a && null == r }),
          children: [
            (0, n.jsx)("span", {
              className: et.messageCountIcon,
              children: (0, n.jsx)(b.default, { width: s, height: s }),
            }),
            "number" == typeof l
              ? (0, n.jsx)(L.default, {
                  value: l,
                  digitWidth: 9,
                  className: et.messageCountText,
                })
              : (0, n.jsx)("div", {
                  className: et.messageCountText,
                  children: l,
                }),
            null == r
              ? null
              : (0, n.jsxs)(m.Text, {
                  className: et.newMessageCount,
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  children: [
                    "(",
                    ee.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
                      count: r,
                    }),
                    ")",
                  ],
                }),
          ],
        });
      }
      function ec(e) {
        let { firstMessage: t, channel: s } = e,
          a = (0, h.useStateFromStores)([F.default], () =>
            F.default.getChannel(s.parent_id)
          ),
          l = (0, B.useDefaultReactionEmoji)(a),
          {
            disableReactionCreates: i,
            isLurking: r,
            isPendingMember: o,
          } = (0, E.default)(s);
        return null == l || i
          ? null
          : (0, n.jsx)(_.Reaction, {
              className: et.updateReactionButton,
              message: t,
              readOnly: s.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: o,
              emoji: l,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: C.ReactionTypes.NORMAL,
              emojiSize: "reaction",
            });
      }
      function eh(e) {
        var t;
        let { firstMessage: s, channel: a } = e,
          l = (0, B.useMostUsedReaction)(s),
          {
            disableReactionUpdates: i,
            isLurking: r,
            isPendingMember: o,
          } = (0, E.default)(a);
        return null == l
          ? null
          : (0, n.jsx)(
              _.Reaction,
              {
                className: et.updateReactionButton,
                message: s,
                readOnly: i || a.isArchivedLockedThread(),
                isLurking: r,
                isPendingMember: o,
                useChatFontScaling: !1,
                type:
                  l.burst_count >= l.count
                    ? C.ReactionTypes.BURST
                    : C.ReactionTypes.NORMAL,
                emojiSize: "reaction",
                ...l,
              },
              ""
                .concat(null !== (t = l.emoji.id) && void 0 !== t ? t : 0, ":")
                .concat(l.emoji.name)
            );
      }
      function ef(e) {
        var t;
        let { channel: s } = e,
          { sortOrder: a } = (0, k.useForumChannelStore)(s.parent_id),
          l = (0, B.useLastActiveTimestamp)(s, a),
          i =
            null === (t = s.threadMetadata) || void 0 === t
              ? void 0
              : t.createTimestamp,
          r =
            null == i
              ? null
              : ee.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                  timestamp: (0, H.dateFormat)(d(i), "LLLL"),
                });
        return (0, n.jsx)(m.Tooltip, {
          text: r,
          tooltipClassName: et.timestampTooltip,
          children: e =>
            (0, n.jsx)(m.Text, {
              className: et.activityText,
              variant: "text-sm/normal",
              color: "header-secondary",
              ...e,
              children: l,
            }),
        });
      }
      function em(e) {
        let { channel: t, userIds: s, facepileRef: a } = e,
          l = (0, B.useFacepileUsers)(t, s);
        return (0, n.jsx)("div", {
          ref: a,
          children: (0, n.jsx)(U.default, {
            className: et.facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: l,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
          }),
        });
      }
      function eg(e) {
        let t,
          s,
          { channel: a, firstMedia: l } = e,
          r = (0, h.useStateFromStores)([w.default], () =>
            w.default.isFocused()
          ),
          o = (0, v.isAnimatedImageUrl)(l.src),
          u = A.GifAutoPlay.useSetting(),
          [d, c] = (0, x.useShouldObscure)({ media: l, channel: a }),
          f = (0, x.getObscuredAlt)(c),
          { src: g, width: p, height: S, alt: C } = l;
        return (
          S > p ? (s = ea) : (t = en),
          (0, n.jsx)(m.FocusBlock, {
            enabled: !0,
            children: (0, n.jsxs)("div", {
              className: et.bodyMedia,
              onClick: e => e.stopPropagation(),
              children: [
                g.startsWith("data:")
                  ? (0, n.jsx)(y.default, {
                      src: g,
                      maxHeight: t,
                      maxWidth: s,
                      width: p,
                      height: S,
                      alt: null != C && d ? f : C,
                      className: et.thumbnailContainer,
                      imageClassName: i({
                        [et.obscured]: d,
                        [et.thumbnailOverride]: !0,
                      }),
                    })
                  : (0, I.renderImageComponent)({
                      src: g,
                      maxHeight: t,
                      maxWidth: s,
                      width: p,
                      height: S,
                      alt: null != C && d ? f : C,
                      autoPlay: u,
                      animated: o && !d && r,
                      containerClassName: et.thumbnailContainer,
                      imageClassName: i({ [et.obscured]: d }),
                    }),
                d &&
                  (0, n.jsx)(V.default, {
                    iconClassname: et.obscuredTag,
                    obscureReason: c,
                  }),
              ],
            }),
          })
        );
      }
    },
    578198: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ForumPostComposerStoreProvider: function () {
            return h;
          },
          useForumPostComposerStore: function () {
            return f;
          },
          useForumPostComposerStoreApi: function () {
            return m;
          },
          createForumPostComposerStore: function () {
            return g;
          },
        }),
        s("222007");
      var n = s("308503"),
        a = s("949041"),
        l = s("295426"),
        i = s("149022"),
        r = s("42203"),
        o = s("474643"),
        u = s("404607"),
        d = s("867965");
      class c {
        constructor(e, t, s) {
          var n, a, c;
          (this.channelId = e),
            (this.set = t),
            (this.get = s),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ""),
            (this.textAreaState = (0, i.createState)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.setEditorHeight = e => {
              this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = e => {
              this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
              let { listViewCardHeights: s, cardHeightVersion: n } = this.get();
              s[e] !== t &&
                ((s[e] = t), this.set({ cardHeightVersion: n + 1 }));
            }),
            (this.setNameError = e => {
              this.set({ nameError: e });
            }),
            (this.setMessageError = e => {
              this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = e => {
              let { appliedTags: t } = this.get();
              (t = new Set(t)).has(e) ? t.delete(e) : t.add(e),
                this.set({ appliedTags: t }),
                l.default.changeThreadSettings(this.channelId, {
                  appliedTags: t,
                });
            }),
            (this.setPopoutOpen = e => {
              this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = e => {
              this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = e => {
              this.set({ previewing: e });
            }),
            (this.setSubmitting = e => {
              this.set({ submitting: e });
            }),
            (this.setFormOpen = e => {
              this.set({ formOpen: e }),
                u.default.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = e => {
              this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = e => {
              this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = e => {
              this.set({ bodyFocused: e });
            }),
            (this.setName = e => {
              this.set({ name: e }),
                l.default.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = e => {
              this.set({ textAreaState: e }),
                l.default.saveDraft(
                  this.channelId,
                  e.textValue,
                  o.DraftType.FirstThreadMessage
                );
            }),
            (this.setHasClickedForm = e => {
              this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
              let e = r.default.getChannel(this.channelId),
                t =
                  null == e ? "" : null == e.template ? "" : e.template.trim();
              this.set({
                name: "",
                textAreaState: (0, i.createState)(t),
                appliedTags: new Set(),
                hasClickedForm: !1,
              }),
                u.default.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
              if (this.hasClickedForm) return;
              let e = r.default.getChannel(this.channelId);
              null != e &&
                (0, d.trackForumCreateNewPostStarted)({
                  guildId: e.guild_id,
                  channelId: this.channelId,
                }),
                this.set({ hasClickedForm: !0, formOpen: !0 }),
                u.default.clearForumSearch(this.channelId);
            });
          let h = r.default.getChannel(e);
          if (null == h) return;
          let f =
              null !== (n = o.default.getThreadSettings(h.id)) && void 0 !== n
                ? n
                : {},
            m = null == h.template ? "" : h.template.trim(),
            g = o.default.getDraft(h.id, o.DraftType.FirstThreadMessage),
            p = (0, i.createState)(null != g && "" !== g.trim() ? g : m);
          (this.name = null !== (a = f.name) && void 0 !== a ? a : ""),
            (c = new Set(f.appliedTags)),
            (this.appliedTags = void 0 !== c ? c : new Set()),
            (this.formOpen = this.name.length > 0),
            (this.textAreaState = p);
        }
      }
      let { Provider: h, useStore: f, useStoreApi: m } = (0, a.default)();
      function g(e) {
        return (0, n.default)((t, s) => new c(e.id, t, s));
      }
    },
    136460: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        l = s.n(a),
        i = s("77078"),
        r = s("232259"),
        o = s("680986"),
        u = s("782340"),
        d = s("159177"),
        c = e => {
          var t, s;
          let { message: a, channel: c, renderColon: h, hasUnreads: f } = e,
            { user: m, author: g } = (0, o.useForumPostAuthor)(c),
            p =
              null !==
                (s =
                  null !== (t = null == g ? void 0 : g.nick) && void 0 !== t
                    ? t
                    : null == m
                      ? void 0
                      : m.username) && void 0 !== s
                ? s
                : "",
            S = (0, r.useUsernameHook)({
              user: null == a ? void 0 : a.author,
              channelId: c.id,
              guildId: c.guild_id,
              messageId: null == a ? void 0 : a.id,
              stopPropagation: !0,
              ariaLabel: u.default.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format(
                { name: p }
              ),
            })(null != g ? g : void 0)(
              (0, n.jsx)(n.Fragment, { children: p }),
              c.id
            );
          return (0, n.jsxs)(i.Text, {
            tag: "span",
            className: l(d.author, { [d.hasUnreads]: f }),
            variant: "text-sm/semibold",
            children: [S, !0 === h ? ": " : null],
          });
        };
    },
    601016: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PIN_ICON_SIZE: function () {
            return C;
          },
          useTagsRowHooks: function () {
            return T;
          },
          IncreasedActivityTagsRow: function () {
            return N;
          },
          default: function () {
            return E;
          },
        });
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        i = s.n(l),
        r = s("669491"),
        o = s("77078"),
        u = s("120027"),
        d = s("566998"),
        c = s("956089"),
        h = s("339792"),
        f = s("680986"),
        m = s("90625"),
        g = s("724210"),
        p = s("782340"),
        S = s("304696"),
        v = s("38050"),
        x = s("258791");
      let C = 16;
      function T(e) {
        let { channel: t, isNew: s } = e,
          n = (0, f.useAppliedTags)(t),
          a = n.slice(void 0, 3),
          l = n.slice(3),
          i = n.length > 3 ? n.length - 3 : 0,
          r = t.hasFlag(g.ChannelFlags.PINNED),
          o = a.length > 0 || r || s,
          u = n.length > 0;
        return {
          shownTags: a,
          remainingTags: l,
          moreTagsCount: i,
          isPinned: r,
          shouldRenderTagsRow: o,
          forumPostContainsTags: u,
        };
      }
      function N(e) {
        let { channel: t, isNew: s, tagsClassName: l, className: r } = e,
          {
            shownTags: c,
            remainingTags: f,
            moreTagsCount: g,
            isPinned: S,
            shouldRenderTagsRow: N,
          } = T({ channel: t, isNew: s }),
          { tagFilter: E } = (0, h.useForumChannelStore)(t.id);
        return N
          ? (0, n.jsxs)("div", {
              className: i(x.increasedActivityTags, r),
              children: [
                S &&
                  (0, n.jsx)("div", {
                    className: v.pinIcon,
                    children: (0, n.jsx)(o.Tooltip, {
                      text: p.default.Messages.PINNED_POST,
                      children: e =>
                        (0, n.jsx)(d.default, {
                          ...e,
                          width: C,
                          height: C,
                          color: "white",
                        }),
                    }),
                  }),
                c.map((e, t) =>
                  (0, n.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, n.jsx)(m.IncreasedActivityForumTagPill, {
                          tag: e,
                          size: m.default.Sizes.SMALL,
                          className: i(l, { [x.tagFiltered]: E.has(e.id) }),
                        }),
                        (t < c.length - 1 || g > 0) &&
                          (0, n.jsx)(
                            u.default,
                            {
                              height: 4,
                              width: 4,
                              "aria-hidden": "true",
                              className: x.increasedActivityDotIcon,
                            },
                            e.id.concat(t.toString())
                          ),
                      ],
                    },
                    e.id
                  )
                ),
                g > 0
                  ? (0, n.jsx)(m.IncreasedActivityForumTagOverflow, {
                      tags: f,
                      count: g,
                      size: m.default.Sizes.SMALL,
                    })
                  : null,
              ],
            })
          : null;
      }
      function E(e) {
        let { channel: t, isNew: s, tagsClassName: a, className: l } = e,
          {
            shownTags: u,
            remainingTags: f,
            moreTagsCount: g,
            isPinned: v,
            shouldRenderTagsRow: N,
          } = T({ channel: t, isNew: s }),
          { tagFilter: E } = (0, h.useForumChannelStore)(t.id);
        return N
          ? (0, n.jsxs)("div", {
              className: i(x.tags, l),
              children: [
                s
                  ? (0, n.jsx)(c.TextBadge, {
                      className: i(S.newBadge, S.inTagsRow),
                      color: r.default.unsafe_rawColors.BRAND_260.css,
                      text: p.default.Messages.NEW,
                    })
                  : null,
                v &&
                  (0, n.jsx)("div", {
                    className: x.pinIcon,
                    children: (0, n.jsx)(o.Tooltip, {
                      text: p.default.Messages.PINNED_POST,
                      children: e =>
                        (0, n.jsx)(d.default, {
                          ...e,
                          width: C,
                          height: C,
                          color: "white",
                        }),
                    }),
                  }),
                u.map(e =>
                  (0, n.jsx)(
                    m.default,
                    {
                      tag: e,
                      size: m.default.Sizes.SMALL,
                      className: i(a, { [x.tagFiltered]: E.has(e.id) }),
                    },
                    e.id
                  )
                ),
                g > 0
                  ? (0, n.jsx)(m.ForumTagOverflow, {
                      tags: f,
                      count: g,
                      size: m.default.Sizes.SMALL,
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    810758: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        }),
        s("222007");
      var n = s("884691"),
        a = e => {
          let [t, s] = n.useState(!1),
            a = n.useCallback(
              t => {
                e(t), s(!0);
              },
              [e, s]
            );
          return {
            isFocused: t,
            handleFocus: a,
            handleBlur: () => {
              s(!1);
            },
          };
        };
    },
    251432: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useNewBadgeOverflowAware: function () {
            return a;
          },
        }),
        s("222007");
      var n = s("884691");
      function a(e, t, s) {
        let a = n.useRef(null),
          [l, i] = n.useState(!1),
          r = n.useCallback(() => {
            if (e && null !== a.current) {
              var s;
              i(
                (null === (s = a.current) || void 0 === s
                  ? void 0
                  : s.offsetHeight) >
                  2.5 * t
              );
            }
          }, [i, e, t]);
        return (
          n.useLayoutEffect(() => {
            r();
          }, [r, e, s]),
          { postTitleRef: a, isNewBadgeOverflow: l }
        );
      }
    },
    390083: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("118810"),
        l = s("272030"),
        i = e => {
          let { facepileRef: t, goToThread: i, channel: r } = e;
          return {
            handleLeftClick: e => {
              var s;
              !(
                (0, a.isElement)(e.target) &&
                (null === (s = t.current) || void 0 === s
                  ? void 0
                  : s.contains(e.target))
              ) && i(r, e.shiftKey);
            },
            handleRightClick: e =>
              (0, l.openContextMenuLazy)(e, async () => {
                let { default: e } = await s
                  .el("994827")
                  .then(s.bind(s, "994827"));
                return t => (0, n.jsx)(e, { ...t, channel: r });
              }),
          };
        };
    },
    359132: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var n = s("446674"),
        a = s("406043"),
        l = s("267567"),
        i = s("300322"),
        r = s("26989"),
        o = s("88093"),
        u = s("957255"),
        d = s("583022"),
        c = s("49111");
      function h(e) {
        let t = (0, n.useStateFromStores)(
            [o.default],
            () =>
              (null == e ? void 0 : e.guild_id) == null ||
              o.default.canChatInGuild(e.guild_id),
            [e]
          ),
          s = (0, n.useStateFromStores)(
            [l.default],
            () =>
              (null == e ? void 0 : e.guild_id) != null &&
              l.default.isLurking(e.guild_id),
            [e]
          ),
          h = (0, n.useStateFromStores)(
            [r.default],
            () =>
              (null == e ? void 0 : e.guild_id) != null &&
              r.default.isCurrentUserGuest(e.guild_id),
            [e]
          ),
          f = (0, n.useStateFromStores)(
            [u.default],
            () => t && u.default.can(c.Permissions.ADD_REACTIONS, e),
            [t, e]
          ),
          [, m] = (0, a.useCurrentUserCommunicationDisabled)(
            null == e ? void 0 : e.guild_id
          ),
          g = (0, i.useIsActiveChannelOrUnarchivableThread)(e);
        if (null == e)
          return {
            disableReactionReads: !0,
            disableReactionCreates: !0,
            disableReactionUpdates: !0,
            isLurking: !1,
            isGuest: !1,
            isPendingMember: !1,
          };
        let p = (0, d.default)({
          channel: e,
          canChat: t,
          renderReactions: !0,
          canAddNewReactions: f,
          isLurking: s,
          isGuest: h,
          communicationDisabled: m,
          isActiveChannelOrUnarchivableThread: g,
        });
        return { ...p, isLurking: s, isGuest: h, isPendingMember: !1 };
      }
    },
    65626: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var n = s("446674"),
        a = s("271938"),
        l = s("880731"),
        i = s("943551");
      function r(e, t) {
        return (
          e === t ||
          ((null == e ? void 0 : e.channelId) ===
            (null == t ? void 0 : t.channelId) &&
            (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
            (null == e ? void 0 : e.multiplier) ===
              (null == t ? void 0 : t.multiplier) &&
            !0)
        );
      }
      function o(e) {
        let t = (0, n.useStateFromStores)(
          [l.default],
          () => !!l.default.isEnabled() && l.default.combosEnabled
        );
        return (0, n.useStateFromStores)(
          [i.default, a.default],
          () => (t ? i.default.getUserCombo(a.default.getId(), e) : void 0),
          [e, t],
          r
        );
      }
    },
    630485: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        l = s("449918"),
        i = s("119035"),
        r = s("65626"),
        o = s("782340"),
        u = s("608980");
      function d(e) {
        let { channelId: t } = e,
          s = (0, r.default)(t),
          d =
            null != s &&
            (s.value > 0 || (null == s ? void 0 : s.multiplier) > 1);
        if (!d) return null;
        let { multiplier: c } = s,
          { color: h } = (0, i.getComboStyles)(c);
        return (0, n.jsxs)("div", {
          className: u.container,
          children: [
            (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: o.default.Messages.POGGERMODE_COMBO_BAR,
            }),
            (0, n.jsx)(a.Progress, {
              foregroundColor: (0, l.getColor)(h),
              className: u.progress,
              size: a.Progress.Sizes.LARGE,
              percent: 100 * (0, i.getComboPercentage)(s),
              animate: !0,
            }),
          ],
        });
      }
    },
    478025: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("446674"),
        a = s("913144");
      let l = {};
      class i extends n.default.PersistedStore {
        initialize(e) {
          Object.assign(l, e);
        }
        getState() {
          return l;
        }
        shouldShowEducation(e) {
          return !0 !== l[e];
        }
      }
      (i.displayName = "ActivityInviteEducationStore"),
        (i.persistKey = "ActivityInviteEducationExperimentStore");
      var r = new i(a.default, {
        ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
          return (l[e.key] = e.value), !0;
        },
      });
    },
    566998: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("469563"),
        l = s("281862"),
        i = s("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: l,
                fill: a,
                d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z",
              }),
            });
          },
          l.PinIcon,
          void 0,
          { size: 24 }
        );
    },
    32238: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("469563"),
        l = s("373803"),
        i = s("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: (0, n.jsx)("path", {
                  className: l,
                  fill: a,
                  fillRule: "nonzero",
                  d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
                }),
              }),
            });
          },
          l.TimerIcon,
          void 0,
          { size: 16 }
        );
    },
    335802: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          TimerIcon: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("669491"),
        l = s("82169");
      let i = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=c68f22034dfd5225fc74.js.map

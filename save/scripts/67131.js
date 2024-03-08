(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67131"],
  {
    277064: function (e, t, i) {
      "use strict";
      e.exports = i.p + "b7cfbc1104ec3593f753.gif";
    },
    748301: function (e, t, i) {
      "use strict";
      e.exports = i.p + "45266c5a3e03cba8884e.svg";
    },
    57155: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return et;
          },
        }),
        i("222007"),
        i("424973"),
        i("860677"),
        i("70102");
      var n = i("37983"),
        a = i("884691"),
        l = i("414456"),
        o = i.n(l),
        s = i("627445"),
        r = i.n(s),
        u = i("917351"),
        c = i.n(u),
        d = i("509043"),
        h = i("446674"),
        m = i("819855"),
        f = i("77078"),
        p = i("430568"),
        T = i("145079"),
        R = i("87657"),
        g = i("206230"),
        E = i("867805"),
        I = i("584375"),
        N = i("430475"),
        _ = i("390236"),
        S = i("185014"),
        v = i("875978"),
        C = i("512306"),
        j = i("941723"),
        O = i("166257"),
        A = i("432173"),
        x = i("300322"),
        M = i("161778"),
        b = i("42203"),
        y = i("26989"),
        P = i("486996"),
        L = i("377253"),
        U = i("957255"),
        B = i("27618"),
        k = i("697218"),
        D = i("145131"),
        w = i("945330"),
        V = i("315102"),
        F = i("402671"),
        G = i("387111"),
        H = i("299039"),
        z = i("441823"),
        K = i("49111"),
        W = i("782340"),
        J = i("726347"),
        Y = i("890957");
      function X(e) {
        return null == e.id
          ? E.default.convertSurrogateToName(e.name)
          : ":".concat(e.name, ":");
      }
      let Z = e => {
        let { emoji: t, channelId: i, messageId: l } = e,
          [s, r] = a.useState(!0),
          [u, c] = a.useState([]),
          d = a.useMemo(() => {
            if (null == u || u.length < 1) return;
            let e = (0, j.buildEffect)(t, u[0], i, {
              emojiSize: C.BurstReactionSize.LARGE,
              messageId: l,
            });
            return (0, n.jsx)(C.default, {
              className: J.effect,
              effect: e,
              emojiSize: C.BurstReactionSize.LARGE,
              onComplete: () => r(!1),
            });
          }, [u, t, i, l]);
        return (
          a.useEffect(() => {
            let e = !1;
            return (
              r(!0),
              !(async function () {
                let i = await (0, F.getEmojiColors)(t);
                Array.isArray(i) && i.length > 0 && !e && c(i);
              })(),
              () => {
                e = !0;
              }
            );
          }, [t]),
          (0, n.jsxs)("div", {
            className: J.burstEmojiSection,
            children: [
              d,
              (0, n.jsx)(p.default, {
                className: o(J.burstEmoji, { [J.hideEmoji]: s }),
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated,
                size: "reaction",
              }),
              (0, n.jsx)(f.Text, { variant: "text-md/medium", children: X(t) }),
            ],
          })
        );
      };
      class q extends a.PureComponent {
        render() {
          let {
              emoji: e,
              count: t,
              isSelected: i,
              setSelected: a,
              reactionType: l,
              colors: s,
            } = this.props,
            r = X(e),
            u = (function (e, t, i, a) {
              let l =
                null == e.id
                  ? F.default.getURL(e.name)
                  : V.default.getEmojiURL({
                      id: e.id,
                      animated: e.animated,
                      size: 24,
                    });
              return null != l && "" !== l
                ? (0, n.jsx)("img", { className: i, src: l, alt: e.name })
                : (0, n.jsx)("span", { className: a, children: e.name });
            })(e, 24, J.emoji, o(J.emoji, J.emojiText)),
            c = l === v.ReactionTypes.BURST,
            h = c
              ? W.default.Messages.BURST_REACTION_REACTORS_A11Y
              : W.default.Messages.REACTION_REACTORS_A11Y,
            m = h.format({ name: r, n: t }),
            p = {},
            T = {};
          if (c) {
            let {
              backgroundColor: e = "",
              opacity: t = 1,
              accentColor: n = "",
            } = null != s ? s : {};
            if (((T.color = n), i)) {
              var R;
              p.background =
                null !== (R = (0, d.hex2rgb)(e, t)) && void 0 !== R ? R : "";
            }
          }
          return (0, n.jsx)(f.Tooltip, {
            position: "left",
            text: r,
            children: s => {
              let { onMouseEnter: r, onMouseLeave: c } = s;
              return (0, n.jsxs)(f.Clickable, {
                className: o({
                  [J.reactionDefault]: !i,
                  [J.reactionSelected]: i,
                }),
                "aria-label": m,
                onClick: () => a({ emoji: e, reactionType: l }),
                onMouseEnter: r,
                onMouseLeave: c,
                style: p,
                children: [
                  u,
                  (0, n.jsx)(f.Text, {
                    variant: "text-sm/bold",
                    style: T,
                    children: t,
                  }),
                ],
              });
            },
          });
        }
      }
      function Q(e) {
        let {
            emoji: t,
            user: i,
            message: a,
            channel: l,
            guildId: o,
            reactionType: s,
            onRemoveReactor: u,
            disableManage: c = !1,
          } = e,
          d = k.default.getCurrentUser(),
          m = (0, h.useStateFromStores)(
            [k.default],
            () => k.default.getUser(i.id),
            [i]
          );
        r(null != d, "Reactor: currentUser cannot be undefined");
        let p = (0, x.useIsActiveChannelOrUnarchivableThread)(l),
          g = (0, h.useStateFromStores)(
            [U.default],
            () => U.default.can(K.Permissions.MANAGE_MESSAGES, l) && p
          ),
          E = g || d.id === i.id,
          I = (0, h.useStateFromStores)([y.default, b.default, B.default], () =>
            G.default.getName(o, l.id, i)
          );
        return (0, n.jsxs)(D.default, {
          className: J.reactorDefault,
          onContextMenu: e => (0, z.openUserContextMenu)(e, i, l),
          align: D.default.Align.CENTER,
          children: [
            (0, n.jsx)(D.default.Child, {
              wrap: !0,
              grow: 0,
              shrink: 0,
              className: Y.marginReset,
              children: (0, n.jsx)(R.default, {
                user: null != m ? m : i,
                size: f.AvatarSizes.SIZE_24,
              }),
            }),
            (0, n.jsx)(D.default.Child, {
              children: (0, n.jsxs)(f.Text, {
                tag: "strong",
                variant: "text-md/normal",
                className: J.name,
                children: [
                  null != I &&
                    "" !== I &&
                    (0, n.jsx)("span", {
                      className: i.isPomelo() ? "" : J.nickname,
                      children: I,
                    }),
                  (0, n.jsx)(T.default, {
                    user: i,
                    className: null != I && "" !== I ? J.tagFaded : null,
                    usernameClass: J.username,
                    discriminatorClass: J.discriminator,
                    forceUsername: !0,
                  }),
                ],
              }),
            }),
            !c &&
              E &&
              (0, n.jsx)(f.Clickable, {
                onClick: function () {
                  O.removeReactionWithConfirmation({
                    emoji: t,
                    userId: i.id,
                    channelId: l.id,
                    messageId: a.id,
                    reactionType: s,
                    isMe: (null == d ? void 0 : d.id) === i.id,
                  }),
                    null == u || u();
                },
                children: (0, n.jsx)(w.default, {
                  width: 16,
                  height: 16,
                  className: J.remove,
                }),
              }),
          ],
        });
      }
      class $ extends a.PureComponent {
        componentDidMount() {
          this.loadMore();
        }
        componentDidUpdate(e) {
          (!c.isEqual(this.props.reaction, e.reaction) ||
            this.props.reactionType !== e.reactionType) &&
            this.setState({ lastId: null, loadingMore: !1 }, () =>
              this.loadMore()
            );
        }
        loadMore() {
          let { message: e, reaction: t, reactionType: i } = this.props,
            { lastId: n } = this.state;
          this.setState({ loadingMore: !0 }),
            O.getReactors({
              channelId: e.getChannelId(),
              messageId: e.id,
              emoji: t.emoji,
              limit: K.DEFAULT_NUM_REACTION_USERS,
              after: n,
              type: i,
            }).then(e => {
              var t;
              return this.setState({
                loadingMore: !1,
                lastId:
                  null === (t = e[e.length - 1]) || void 0 === t
                    ? void 0
                    : t.id,
              });
            });
        }
        renderSection() {
          return null;
        }
        render() {
          let {
              hasMore: e,
              reactors: t,
              reaction: i,
              message: a,
              reactionType: l,
            } = this.props,
            o = [];
          return (
            0 === t.length && this.state.loadingMore
              ? o.push(length)
              : (o.push(t.length), e && o.push(1)),
            (0, n.jsxs)("div", {
              className: J.reactorsContainer,
              children: [
                l === v.ReactionTypes.BURST &&
                  (0, n.jsx)(Z, {
                    emoji: i.emoji,
                    channelId: a.getChannelId(),
                    messageId: a.id,
                  }),
                (0, n.jsx)(f.List, {
                  className: J.reactors,
                  fade: !0,
                  ref: this.scrollerRef,
                  sections: o,
                  sectionHeight: 0,
                  rowHeight: this.getRowHeight,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                  onScroll: e ? this.handleScroll : void 0,
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.scrollerRef = a.createRef()),
            (this.state = { lastId: null, loadingMore: !1 }),
            (this.handleScroll = () => {
              let { current: e } = this.scrollerRef;
              if (null == e) return;
              let t = e.getScrollerState();
              t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 &&
                this.props.hasMore &&
                !this.state.loadingMore &&
                this.loadMore();
            }),
            (this.getRowHeight = (e, t) => {
              let { reactors: i } = this.props;
              if (1 === e) return 0 === t ? 44 : 0;
              if (0 === e) {
                if (0 === t && 0 === i.length) return 440;
                if (null != this.props.reactors[t]) return 44;
              }
              return 0;
            }),
            (this.renderRow = e => {
              let { section: t, row: i } = e,
                {
                  message: a,
                  guildId: l,
                  channel: o,
                  reaction: s,
                  reactors: r,
                  reactionType: u,
                  disableManage: c,
                } = this.props,
                d = r[i];
              if (1 === t)
                return 0 === i
                  ? (0, n.jsx)(
                      f.Spinner,
                      { className: J.spinnerMore },
                      "hasMore"
                    )
                  : null;
              return 0 === r.length && this.state.loadingMore
                ? (0, n.jsx)(f.Spinner, { className: J.spinner }, "loadingMore")
                : null != d &&
                    (0, n.jsx)(
                      Q,
                      {
                        message: a,
                        emoji: s.emoji,
                        guildId: l,
                        channel: o,
                        user: d,
                        reaction: s,
                        reactionType: u,
                        disableManage: c,
                      },
                      d.id
                    );
            });
        }
      }
      let ee = h.default.connectStores([P.default], e => {
        let { message: t, reaction: i, reactionType: n } = e,
          a = P.default.getReactions(
            t.getChannelId(),
            t.id,
            i.emoji,
            K.DEFAULT_NUM_REACTION_USERS,
            n
          );
        if (null == a) return { reactors: [], hasMore: !1 };
        let l = Object.values(a),
          o = n === v.ReactionTypes.BURST ? i.burst_count : i.count,
          s = o > l.length;
        return { reactors: l, hasMore: s };
      })($);
      function et(e) {
        var t;
        let {
            message: i,
            selectedReaction: l,
            disableManage: o = !1,
            disableTabs: s = !1,
            onClose: r,
            transitionState: u,
            "aria-label": c = W.default.Messages.REACTIONS,
          } = e,
          d = (0, h.useStateFromStores)([b.default], () =>
            b.default.getChannel(i.getChannelId())
          ),
          p = null == d ? void 0 : d.getGuildId(),
          T = (0, h.useStateFromStores)(
            [L.default, N.default, S.default],
            () => {
              var e, t, n;
              let a =
                null !==
                  (n =
                    null !==
                      (t = L.default.getMessage(i.getChannelId(), i.id)) &&
                    void 0 !== t
                      ? t
                      : null ===
                            (e = N.default.getMessage(
                              H.default.castMessageIdAsChannelId(i.id)
                            )) || void 0 === e
                        ? void 0
                        : e.firstMessage) && void 0 !== n
                  ? n
                  : null != p
                    ? S.default.getCachedMessage(p, i.getChannelId(), i.id)
                    : void 0;
              return null != a ? a.reactions : [];
            },
            [i, p]
          );
        let R =
            ((t = T),
            a.useMemo(() => {
              let e = [];
              return (
                t.forEach(t => {
                  t.burst_count > 0 && e.push({ ...t, count: 0 }),
                    t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                  let i = e.burst_count > 0 ? e.burst_count : e.count,
                    n = t.burst_count > 0 ? t.burst_count : t.count;
                  return n - i;
                }),
                e
              );
            }, [t])),
          E = R[0],
          C =
            null != E
              ? {
                  emoji: E.emoji,
                  reactionType:
                    E.burst_count > 0
                      ? v.ReactionTypes.BURST
                      : v.ReactionTypes.NORMAL,
                }
              : null,
          [j, O] = (function (e, t, i) {
            let [n, l] = a.useState(null != e ? e : t);
            return (
              a.useEffect(() => {
                if (null != n) {
                  let e = i.find(e => {
                    let t =
                      null != e.me_vote
                        ? v.ReactionTypes.VOTE
                        : e.burst_count > 0
                          ? v.ReactionTypes.BURST
                          : v.ReactionTypes.NORMAL;
                    return (
                      (0, A.emojiEquals)(e.emoji, n.emoji) &&
                      t === n.reactionType
                    );
                  });
                  null == e && l(t);
                }
              }, [n, l, i, t]),
              [n, l]
            );
          })(l, C, T),
          x = a.useMemo(() => {
            var e;
            return null == j
              ? null
              : null !==
                    (e = T.find(e => (0, A.emojiEquals)(e.emoji, j.emoji))) &&
                  void 0 !== e
                ? e
                : null;
          }, [T, j]),
          y = (0, h.useStateFromStores)(
            [g.default],
            () => g.default.saturation
          ),
          P = (0, h.useStateFromStores)([M.default], () =>
            (0, m.isThemeDark)(M.default.theme)
          );
        if (
          (a.useEffect(() => {
            (0 === T.length || (null == j && null == x)) && setImmediate(r);
          }, [r, T.length, x, j]),
          null == j || null == x)
        )
          return (0, n.jsx)(f.Spinner, {});
        if (null == d)
          throw Error(
            "MessageReactions.render: Message does not have a channelId"
          );
        return (0, n.jsx)(_.default.Provider, {
          value: null != p ? p : void 0,
          children: (0, n.jsxs)(f.ModalRoot, {
            "aria-label": c,
            transitionState: u,
            size: f.ModalSize.DYNAMIC,
            className: J.container,
            children: [
              s
                ? null
                : (0, n.jsx)(f.Scroller, {
                    className: J.scroller,
                    fade: !0,
                    children: R.map(e => {
                      var t;
                      let i = e.burst_count > 0;
                      return (0, n.jsx)(
                        q,
                        {
                          isSelected: ei(
                            j,
                            e,
                            i ? v.ReactionTypes.BURST : v.ReactionTypes.NORMAL
                          ),
                          setSelected: O,
                          reactionType: i
                            ? v.ReactionTypes.BURST
                            : v.ReactionTypes.NORMAL,
                          emoji: e.emoji,
                          count: i ? e.burst_count : e.count,
                          colors:
                            null != e.burst_colors
                              ? (0, I.buildEmojiColorPalette)(
                                  e.burst_colors,
                                  y,
                                  P
                                )
                              : void 0,
                        },
                        ""
                          .concat(i ? "burst-" : "normal-")
                          .concat(
                            null !== (t = e.emoji.id) && void 0 !== t ? t : "",
                            ":"
                          )
                          .concat(e.emoji.name)
                      );
                    }),
                  }),
              (0, n.jsx)(ee, {
                message: i,
                reaction: x,
                guildId: p,
                channel: d,
                reactionType: j.reactionType,
                disableManage: o,
              }),
            ],
          }),
        });
      }
      let ei = (e, t, i) => c.isEqual(e.emoji, t.emoji) && e.reactionType === i;
    },
    281862: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("211162");
      i.es(n, t);
    },
    58533: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return R;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("516555"),
        o = i("907002"),
        s = i("458960"),
        r = i("430568"),
        u = i("526887"),
        c = i("140708"),
        d = i("983782"),
        h = i("315102"),
        m = i("402671"),
        f = i("172858"),
        p = i("62688");
      let T = [];
      function R(e) {
        let { messageId: t, emoji: i, startPosition: R, targetPosition: g } = e,
          [E, I] = a.useState(0),
          [N, _] = a.useState(0),
          [S, v] = a.useState(null),
          { confettiCanvas: C } = a.useContext(u.ConfettiCannonContext),
          j = (0, l.useConfettiCannon)(C, S),
          O = a.useMemo(() => {
            let e =
              null == i.id
                ? m.default.getURL(i.name)
                : h.default.getEmojiURL({ id: i.id, animated: !1, size: 22 });
            return [{ src: e, colorize: !1 }];
          }, [i.name, i.id]),
          A = g.x - (g.width / 2) * 0.5,
          x = g.y - (g.height / 2) * 0.5,
          M = (0, o.useSpring)({
            from: { y: R.y },
            to: { y: x },
            config: {
              duration: 450,
              easing: s.default.Easing.in(s.default.Easing.exp),
            },
            onChange: e => {
              let { y: t } = e;
              _(t);
            },
          }),
          b = (0, o.useSpring)({
            from: { x: R.x, scale: 1, opacity: 1 },
            to: { x: A, scale: 0.5, opacity: 0.4 },
            config: {
              duration: 450,
              easing: s.default.Easing.in(s.default.Easing.ease),
            },
            onRest: () => {
              (0, c.clearReactionPickerAnimation)(t, i.name, i.id);
            },
            onChange: e => {
              let { x: t } = e;
              I(t);
            },
          });
        return (
          a.useEffect(() => {
            E > 0 &&
              N > 0 &&
              j.createConfetti({
                ...f.COMMON_CONFETTI_BASE_CONFIG,
                position: { type: "static", value: { x: E, y: N } },
              });
          }, [j, E, N]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(l.SpriteCanvas, {
                ref: v,
                sprites: O,
                colors: T,
                spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              }),
              (0, n.jsx)(d.default, {
                children: (0, n.jsx)(o.animated.div, {
                  style: { ...M },
                  className: p.emojiContainer,
                  children: (0, n.jsx)(o.animated.div, {
                    style: { ...b, opacity: b.opacity },
                    children: (0, n.jsx)(r.default, {
                      className: p.emoji,
                      emojiId: i.id,
                      emojiName: i.name,
                      animated: i.animated,
                      size: "jumbo",
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    102873: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useEmojiColorPalette: function () {
            return r;
          },
        });
      var n = i("446674"),
        a = i("819855"),
        l = i("206230"),
        o = i("161778"),
        s = i("584375");
      let r = e => {
        let t = (0, n.useStateFromStores)(
            [l.default],
            () => l.default.saturation
          ),
          i = (0, n.useStateFromStores)([o.default], () =>
            (0, a.isThemeDark)(o.default.theme)
          );
        return (0, s.buildEmojiColorPalette)(e, t, i);
      };
    },
    13066: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          LurkerModeUpsellPopoutTypes: function () {
            return n;
          },
          default: function () {
            return T;
          },
        }),
        i("222007");
      var n,
        a,
        l = i("37983"),
        o = i("884691"),
        s = i("446674"),
        r = i("77078"),
        u = i("851387"),
        c = i("476765"),
        d = i("449008"),
        h = i("267567"),
        m = i("49111"),
        f = i("782340"),
        p = i("194627");
      ((a = n || (n = {}))[(a.CHAT = 0)] = "CHAT"),
        (a[(a.REACTIONS = 1)] = "REACTIONS");
      var T = e => {
        let { type: t, guild: n, closePopout: a, ctaRef: T } = e,
          R = (0, c.useUID)(),
          [g, E] = o.useState(!1),
          I = (0, s.useStateFromStores)(
            [h.default],
            () => h.default.isLurking(n.id),
            [n.id]
          );
        o.useEffect(() => {
          g && !I && a();
        }, [g, I, a]);
        let N = null,
          _ = f.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
        switch (t) {
          case 0:
            N = f.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
            break;
          case 1:
            N = f.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
            break;
          default:
            return (0, d.assertNever)(t);
        }
        if (null == N) return null;
        let S = async () => {
          E(!0);
          try {
            await u.default.joinGuild(n.id, {
              source: m.JoinGuildSources.CHAT_INPUT_BLOCKER,
            }),
              a();
          } catch {
            E(!1);
          }
        };
        return (0, l.jsxs)(r.Dialog, {
          className: p.container,
          "aria-labelledby": R,
          children: [
            (0, l.jsx)("img", {
              alt: "",
              className: p.image,
              src: i("748301"),
            }),
            (0, l.jsxs)("div", {
              className: p.content,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: R,
                  children: N,
                }),
                (0, l.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: _,
                }),
                (0, l.jsxs)("div", {
                  className: p.buttonContainer,
                  children: [
                    (0, l.jsx)(r.Button, {
                      buttonRef: T,
                      onClick: S,
                      submitting: g,
                      children: f.default.Messages.LURKER_MODE_POPOUT_JOIN,
                    }),
                    (0, l.jsx)(r.Button, {
                      onClick: a,
                      look: r.Button.Looks.BLANK,
                      className: p.cancel,
                      children: f.default.Messages.LURKER_MODE_POPOUT_CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    15935: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          BurstReactionEffectSource: function () {
            return n;
          },
          default: function () {
            return m;
          },
        }),
        i("222007");
      var n,
        a,
        l = i("446674"),
        o = i("913144");
      ((a = n || (n = {})).HOVER = "HOVER"),
        (a.EXTERNAL = "EXTERNAL"),
        (a.RANDOM = "RANDOM");
      let s = {},
        r = {},
        u = {},
        c = (e, t) => {
          let i = null != t.id ? t.id : t.name;
          return "".concat(e, ":").concat(i);
        },
        d = (e, t) => {
          var i;
          let n;
          switch (e) {
            case "HOVER":
              n = "HOVER";
              break;
            case "RANDOM":
              n = "RANDOM";
              break;
            default:
              n = "EXTERNAL";
          }
          let a = Object.entries(null !== (i = r[t]) && void 0 !== i ? i : {}),
            l = a.filter(e => {
              let [, t] = e;
              return t === n;
            }),
            o = Object.fromEntries(l);
          if (Object.keys(o).length >= 5 && "EXTERNAL" === e) {
            for (let e in o)
              if (null == u[t] || null == u[t][e]) {
                delete r[t][e], delete o[e];
                break;
              }
          }
          return Object.keys(o).length;
        };
      class h extends l.default.Store {
        getReactionPickerAnimation(e, t, i) {
          return s[
            ""
              .concat(e, ":")
              .concat(t, ":")
              .concat(null != i ? i : "")
          ];
        }
        getEffectForEmojiId(e, t, i) {
          var n;
          let a = c(t, i);
          return null === (n = r[e]) || void 0 === n ? void 0 : n[a];
        }
      }
      h.displayName = "BurstReactionEffectsStore";
      var m = new h(o.default, {
        BURST_REACTION_EFFECT_CLEAR: e => {
          var t;
          let { channelId: i, messageId: n, emoji: a } = e,
            l = c(n, a);
          null === (t = r[i]) || void 0 === t || delete t[l];
        },
        BURST_REACTION_EFFECT_PLAY: e => {
          var t, i, n;
          let { channelId: a, messageId: l, emoji: o, key: s } = e,
            h = c(l, o);
          if (d(s, a) >= 5) return;
          let m = null !== (t = r[a]) && void 0 !== t ? t : {},
            f = null !== (i = u[a]) && void 0 !== i ? i : {},
            p = f[h],
            T = m[h];
          if ("HOVER" !== s || null == T) {
            "HOVER" === T &&
              "EXTERNAL" === s &&
              null != p &&
              ("function" == typeof p.destroy && p.destroy(),
              null === (n = u[a]) || void 0 === n || delete n[h],
              (T = void 0));
            null == T && (null != r[a] ? (r[a][h] = s) : (r[a] = { [h]: s }));
          }
        },
        BURST_REACTION_ANIMATION_ADD: e => {
          let { channelId: t, messageId: i, emoji: n, animation: a } = e,
            l = c(i, n);
          null == u[t] && (u[t] = {}), (u[t][l] = a);
        },
        BURST_REACTION_PICKER_ANIMATION_ADD: e => {
          let { messageId: t, emojiName: i, emojiId: n, startPosition: a } = e;
          s[
            ""
              .concat(t, ":")
              .concat(i, ":")
              .concat(null != n ? n : "")
          ] = a;
        },
        BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
          let { messageId: t, emojiName: i, emojiId: n } = e;
          delete s[
            ""
              .concat(t, ":")
              .concat(i, ":")
              .concat(null != n ? n : "")
          ];
        },
      });
    },
    103475: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          replaceAnimationColors: function () {
            return o;
          },
          getBurstAnimationHash: function () {
            return s;
          },
        }),
        i("781738");
      var n,
        a = i("917351"),
        l = i("284679");
      (n || (n = {})).OUT_OF_BURSTS = "out of burst reactions modal";
      let o = (e, t) => {
          let i = (0, l.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
          return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            "["
              .concat(i[0][0] / 255, ",")
              .concat(i[0][1] / 255, ",")
              .concat(i[0][2] / 255, ",")
          )).replace(
            /\[0,0,1,/g,
            "["
              .concat(i[1][0] / 255, ",")
              .concat(i[1][1] / 255, ",")
              .concat(i[1][2] / 255, ",")
          ));
        },
        s = (0, a.memoize)(e => {
          let t = 0;
          for (let i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i);
          return Math.abs(t);
        });
    },
    569512: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getBurstAnimation: function () {
            return l;
          },
        });
      var n = i("103475");
      let a = [
          { load: () => i.el("448779").then(i.t.bind(i, "448779", 19)) },
          { load: () => i.el("734436").then(i.t.bind(i, "734436", 19)) },
          { load: () => i.el("494925").then(i.t.bind(i, "494925", 19)) },
          { load: () => i.el("199777").then(i.t.bind(i, "199777", 19)) },
          { load: () => i.el("942466").then(i.t.bind(i, "942466", 19)) },
          { load: () => i.el("56957").then(i.t.bind(i, "56957", 19)) },
          { load: () => i.el("547173").then(i.t.bind(i, "547173", 19)) },
          { load: () => i.el("485996").then(i.t.bind(i, "485996", 19)) },
          { load: () => i.el("871996").then(i.t.bind(i, "871996", 19)) },
          { load: () => i.el("584037").then(i.t.bind(i, "584037", 19)) },
          { load: () => i.el("320512").then(i.t.bind(i, "320512", 19)) },
          { load: () => i.el("925536").then(i.t.bind(i, "925536", 19)) },
          { load: () => i.el("522373").then(i.t.bind(i, "522373", 19)) },
          { load: () => i.el("837366").then(i.t.bind(i, "837366", 19)) },
          { load: () => i.el("42949").then(i.t.bind(i, "42949", 19)) },
          { load: () => i.el("294705").then(i.t.bind(i, "294705", 19)) },
          { load: () => i.el("454599").then(i.t.bind(i, "454599", 19)) },
          { load: () => i.el("814738").then(i.t.bind(i, "814738", 19)) },
        ],
        l = async function (e, t, i) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let l = (0, n.getBurstAnimationHash)(
              "".concat(e).concat(t).concat(i)
            ),
            o = a[l % a.length];
          return await o.load();
        };
    },
    583022: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return n;
          },
        });
      var n = e => {
        let {
            channel: t,
            canChat: i,
            renderReactions: n,
            canAddNewReactions: a,
            isLurking: l,
            isGuest: o,
            communicationDisabled: s,
            isActiveChannelOrUnarchivableThread: r,
          } = e,
          u = t.isPrivate(),
          c = t.isSystemDM(),
          d = (i || u) && r;
        return {
          disableReactionReads: !n,
          disableReactionCreates: l || o || !d || !((!0 === a || u) && !c && r),
          disableReactionUpdates: l || o || !d || !0 === s,
        };
      };
    },
    331011: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getReactionTooltipText: function () {
            return h;
          },
        });
      var n = i("917351"),
        a = i.n(n),
        l = i("432173"),
        o = i("42203"),
        s = i("486996"),
        r = i("27618"),
        u = i("387111"),
        c = i("875978"),
        d = i("782340");
      function h(e, t) {
        var i;
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : c.ReactionTypes.NORMAL,
          h = arguments.length > 3 ? arguments[3] : void 0,
          m = s.default.getReactions(e.getChannelId(), e.id, t, 3, n),
          f = o.default.getChannel(e.getChannelId()),
          p = null == f || f.isPrivate() ? null : f.getGuildId(),
          T = e.getReaction(t),
          R = n === c.ReactionTypes.BURST,
          g = a(m)
            .reject(e => r.default.isBlocked(e.id))
            .take(3)
            .map(e => u.default.getName(p, null == f ? void 0 : f.id, e))
            .value();
        if (0 === g.length) return "";
        let E = {
            standard: {
              reactionTooltip1NInteractive:
                d.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: d.default.Messages.REACTION_TOOLTIP_1_N,
              reactionTooltip1: d.default.Messages.REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                d.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: d.default.Messages.REACTION_TOOLTIP_2_N,
              reactionTooltip2: d.default.Messages.REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                d.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: d.default.Messages.REACTION_TOOLTIP_3_N,
              reactionTooltip3: d.default.Messages.REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                d.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: d.default.Messages.REACTION_TOOLTIP_N,
            },
            burst: {
              reactionTooltip1NInteractive:
                d.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: d.default.Messages.BURST_REACTION_TOOLTIP_1_N,
              reactionTooltip1: d.default.Messages.BURST_REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                d.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: d.default.Messages.BURST_REACTION_TOOLTIP_2_N,
              reactionTooltip2: d.default.Messages.BURST_REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                d.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: d.default.Messages.BURST_REACTION_TOOLTIP_3_N,
              reactionTooltip3: d.default.Messages.BURST_REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                d.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: d.default.Messages.BURST_REACTION_TOOLTIP_N,
            },
          },
          I = R ? E.burst : E.standard,
          N =
            null !==
              (i = R
                ? null == T
                  ? void 0
                  : T.burst_count
                : null == T
                  ? void 0
                  : T.count) && void 0 !== i
              ? i
              : 0,
          _ = Math.max(0, N - g.length),
          S = (0, l.getReactionEmojiName)(t);
        if (1 === g.length)
          return _ > 0
            ? null != h
              ? I.reactionTooltip1NInteractive.format({
                  a: g[0],
                  n: _,
                  emojiName: S,
                  onClick: h,
                })
              : I.reactionTooltip1N.format({ a: g[0], n: _, emojiName: S })
            : I.reactionTooltip1.format({ a: g[0], emojiName: S });
        if (2 === g.length)
          return _ > 0
            ? null != h
              ? I.reactionTooltip2NInteractive.format({
                  a: g[0],
                  b: g[1],
                  n: _,
                  emojiName: S,
                  onClick: h,
                })
              : I.reactionTooltip2N.format({
                  a: g[0],
                  b: g[1],
                  n: _,
                  emojiName: S,
                })
            : I.reactionTooltip2.format({ a: g[0], b: g[1], emojiName: S });
        if (3 === g.length)
          return _ > 0
            ? null != h
              ? I.reactionTooltip3NInteractive.format({
                  a: g[0],
                  b: g[1],
                  c: g[2],
                  n: _,
                  emojiName: S,
                  onClick: h,
                })
              : I.reactionTooltip3N.format({
                  a: g[0],
                  b: g[1],
                  c: g[2],
                  n: _,
                  emojiName: S,
                })
            : I.reactionTooltip3.format({
                a: g[0],
                b: g[1],
                c: g[2],
                emojiName: S,
              });
        else
          return null != h
            ? I.reactionTooltipNInteractive.format({
                n: _,
                emojiName: S,
                onClick: h,
              })
            : I.reactionTooltipN.format({ n: _, emojiName: S });
      }
    },
    350134: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          REACTION_MIN_WIDTH_DIGITS: function () {
            return ea;
          },
          showReactionsModal: function () {
            return el;
          },
          isMeReaction: function () {
            return eo;
          },
          Reaction: function () {
            return er;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("414456"),
        o = i.n(l),
        s = i("748820"),
        r = i("458960"),
        u = i("509043"),
        c = i("446674"),
        d = i("862337"),
        h = i("130969"),
        m = i("77078"),
        f = i("430568"),
        p = i("57155"),
        T = i("206230"),
        R = i("716241"),
        g = i("58533"),
        E = i("385976"),
        I = i("858619"),
        N = i("102873"),
        _ = i("101263"),
        S = i("865453"),
        v = i("233322"),
        C = i("13066"),
        j = i("785621"),
        O = i("635956"),
        A = i("85589"),
        x = i("166257"),
        M = i("432173"),
        b = i("845579"),
        y = i("42203"),
        P = i("305961"),
        L = i("486996"),
        U = i("162771"),
        B = i("697218"),
        k = i("471671"),
        D = i("738107"),
        w = i("791106"),
        V = i("256170"),
        F = i("216422"),
        G = i("599110"),
        H = i("719923"),
        z = i("15935"),
        K = i("875978"),
        W = i("412745"),
        J = i("459698"),
        Y = i("933629"),
        X = i("331011"),
        Z = i("81924"),
        q = i("49111"),
        Q = i("646718"),
        $ = i("782340"),
        ee = i("325417"),
        et = i("159441"),
        ei = i("450076"),
        en = i("363454");
      let ea = 9;
      function el(e, t, i) {
        (0, m.openModal)(e =>
          (0, n.jsx)(p.default, { ...e, message: t, selectedReaction: i })
        );
      }
      function eo(e, t, i) {
        return (
          (i === K.ReactionTypes.BURST && t) ||
          (i === K.ReactionTypes.NORMAL && e)
        );
      }
      class es extends a.PureComponent {
        componentWillAppear(e) {
          this.animateIn(e);
        }
        componentWillEnter(e) {
          this.animateIn(e);
        }
        componentWillUnmount() {
          this.hideTooltip();
        }
        animateIn(e) {
          let { autoUnfurlReactionTooltip: t } = this.props;
          k.default.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              r.default
                .parallel([
                  r.default.timing(this.scale, {
                    toValue: 1,
                    duration: t ? 200 : 300,
                    easing: r.default.Easing.inOut(r.default.Easing.back()),
                  }),
                  r.default.timing(this.opacity, {
                    toValue: 1,
                    duration: t ? 200 : 300,
                  }),
                ])
                .start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
        }
        render() {
          let e, t;
          let {
              count: i,
              burst_count: a,
              colors: l,
              isBurstReaction: s,
              hideCount: c,
              emoji: d,
              readOnly: h,
              isLurking: p,
              isGuest: T,
              isPendingMember: R,
              className: E,
              useChatFontScaling: I,
              message: N,
              hideEmoji: _,
              animationStartPosition: S,
            } = this.props,
            {
              shouldShowTooltip: v,
              tooltipTextAria: C,
              reactionRef: O,
              tooltipPositionKey: A,
            } = this.state,
            x = I ? ei : et,
            b = { transform: [{ scale: this.scale }], opacity: this.opacity },
            y = s ? a : i;
          if (s && null != l) {
            var P;
            let { accentColor: i, backgroundColor: n, opacity: a } = l,
              o =
                null !== (P = (0, u.hex2rgb)(null != n ? n : "", a)) &&
                void 0 !== P
                  ? P
                  : "";
            this.isMe() && (b.borderColor = n),
              (b.background = o),
              (e = i),
              (t = i);
          }
          let L = null == O ? void 0 : O.getBoundingClientRect(),
            U = null != S && null != L,
            B = null == S;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(m.Popout, {
              shouldShow: v,
              "aria-label": null != C && C,
              renderPopout: this.renderTooltip,
              nudgeAlignIntoViewport: !0,
              position: "top",
              align: "center",
              positionKey: A,
              children: () =>
                (0, n.jsx)("div", {
                  onMouseEnter: this.handleEnter,
                  onMouseLeave: this.handleLeave,
                  ref: this.handleSetReactionRef,
                  children: (0, n.jsx)(r.default.div, {
                    className: o(x.reaction, E, {
                      [x.reactionMe]: this.isMe(),
                      [x.reactionReadOnly]: h && !p && !R && !T,
                      [x.shakeReaction]: _ && null == S,
                    }),
                    style: b,
                    children: (0, n.jsx)(m.Popout, {
                      renderPopout: this.renderLurkerModeUpsellPopout,
                      position: "top",
                      children: i =>
                        (0, n.jsxs)(m.Clickable, {
                          ...i,
                          className: x.reactionInner,
                          onClick: this.handleClick,
                          "aria-disabled": h,
                          "aria-label": (0, M.getAccessibleEmojiDisplayName)(
                            this.isMe(),
                            y,
                            d,
                            s
                          ),
                          "aria-pressed": this.isMe(),
                          children: [
                            (0, n.jsx)("div", {
                              className: o({ [x.burstGlow]: s }),
                              style: { boxShadow: "0 0 16px ".concat(t) },
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                s
                                  ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        U &&
                                          (0, n.jsx)(g.default, {
                                            messageId: N.id,
                                            emoji: d,
                                            startPosition: S,
                                            targetPosition: L,
                                          }),
                                        B &&
                                          (0, n.jsx)(Z.default, {
                                            count: a,
                                            emoji: d,
                                            channelId: N.getChannelId(),
                                            messageId: N.id,
                                            useChatFontScaling: I,
                                            color: t,
                                          }),
                                      ],
                                    })
                                  : null,
                                (0, n.jsx)(f.default, {
                                  className: o({ [x.hideEmoji]: _ }),
                                  emojiId: d.id,
                                  emojiName: d.name,
                                  size: "reaction",
                                  animated: d.animated,
                                }),
                              ],
                            }),
                            c
                              ? null
                              : (0, n.jsx)(D.default, {
                                  className: x.reactionCount,
                                  value: y,
                                  color: e,
                                  digitWidth: ea,
                                }),
                            (0, n.jsx)(j.default, { count: y, reactionRef: O }),
                          ],
                        }),
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.isReactionEventActive = !1),
            (this.isKeyboardNavigation = !1),
            (this.scale = new r.default.Value(1)),
            (this.opacity = new r.default.Value(1)),
            (this.timeout = new d.Timeout()),
            (this.hideTimeout = new d.Timeout()),
            (this.ctaRef = a.createRef()),
            (this.type = K.ReactionTypes.NORMAL),
            (this.colors = {
              backgroundColor: void 0,
              borderColor: void 0,
              textColor: void 0,
            }),
            (this.state = {
              shouldShowTooltip: !1,
              tooltipText: null,
              tooltipTextAria: null,
              reactionRef: null,
              tooltipPositionKey: void 0,
            }),
            (this.hasShownTooltip = !1),
            (this.nonce = (0, s.v4)()),
            (this.userCanBurstReact = () => this.props.userHasPremium),
            (this.handleClick = e => {
              e.stopPropagation();
              let {
                  message: t,
                  emoji: i,
                  readOnly: n,
                  isBurstReaction: a,
                  isPendingMember: l,
                  isLurking: o,
                  isGuest: s,
                  isForumToolbar: r,
                } = this.props,
                u = y.default.getChannel(t.getChannelId());
              if (o || s) {
                var c, d;
                null === (d = this.ctaRef) ||
                  void 0 === d ||
                  null === (c = d.current) ||
                  void 0 === c ||
                  c.focus();
                return;
              }
              let h = t.getChannelId(),
                m = r
                  ? x.ReactionLocations.FORUM_TOOLBAR
                  : x.ReactionLocations.MESSAGE;
              if (a && !this.userCanBurstReact()) {
                (0, A.openBurstReactionsUpsellModal)({
                  analytics: {
                    type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    page:
                      (null == u ? void 0 : u.getGuildId()) != null
                        ? q.AnalyticsPages.GUILD_CHANNEL
                        : q.AnalyticsPages.DM_CHANNEL,
                    section:
                      null != u ? (0, M.getBurstAnalyticsSection)(u) : void 0,
                    object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL,
                  },
                });
                return;
              }
              l
                ? this.handleShowVerificationGate()
                : !n &&
                  (this.isMe()
                    ? (0, x.removeReaction)(h, t.id, i, void 0, m, { burst: a })
                    : (0, x.addReaction)(h, t.id, i, m, { burst: a }));
            }),
            (this.handleEnter = e => {
              let {
                  emoji: t,
                  message: i,
                  type: n,
                  reduceMotion: a,
                  animateEmoji: l,
                  autoUnfurlReactionTooltip: o,
                } = this.props,
                s = n === K.ReactionTypes.BURST;
              s &&
                !this.isReactionEventActive &&
                !a &&
                l &&
                (0, x.playBurstReaction)({
                  channelId: i.getChannelId(),
                  messageId: i.id,
                  emoji: t,
                  key: z.BurstReactionEffectSource.HOVER,
                }),
                (this.isReactionEventActive = !0),
                (this.isKeyboardNavigation = "focus" === e.type),
                this.timeout.start(
                  s ? 750 : o ? 200 : 500,
                  this.showTooltip,
                  !1
                );
            }),
            (this.handleEnterTooltip = () => {
              (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            (this.handleShowTooltip = () => {
              this.hideTimeout.stop(),
                this.isReactionEventActive &&
                  (this.updateTooltipText(),
                  L.default.addChangeListener(this.updateTooltipText));
            }),
            (this.showTooltip = () => {
              this.handleShowTooltip(),
                this.isReactionEventActive && this.trackReactionTooltipViewed(),
                (this.hasShownTooltip = !0);
            }),
            (this.handleLeave = () => {
              (this.isReactionEventActive = !1),
                (this.isKeyboardNavigation = !1),
                this.timeout.stop(),
                L.default.removeChangeListener(this.updateTooltipText),
                this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            (this.hideTooltip = () => {
              this.setState({ shouldShowTooltip: !1 }),
                this.hasShownTooltip &&
                  G.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
                    nonce: this.nonce,
                  });
            }),
            (this.isMe = () => {
              let { me: e, me_burst: t, type: i } = this.props;
              return eo(e, t, i);
            }),
            (this.updateTooltipText = () => {
              let { message: e, emoji: t, type: i } = this.props,
                n = (0, X.getReactionTooltipText)(e, t, i),
                a = this.isKeyboardNavigation
                  ? n
                  : (0, X.getReactionTooltipText)(e, t, i, q.NOOP);
              this.setState({
                tooltipText: a,
                tooltipTextAria: n,
                shouldShowTooltip: null != a && "" !== a,
              });
            }),
            (this.renderLurkerModeUpsellPopout = e => {
              let { closePopout: t } = e,
                { message: i, isLurking: a } = this.props,
                l = y.default.getChannel(i.getChannelId()),
                o = P.default.getGuild(null == l ? void 0 : l.getGuildId());
              return a && null != o
                ? (0, n.jsx)(C.default, {
                    ctaRef: this.ctaRef,
                    type: C.LurkerModeUpsellPopoutTypes.REACTIONS,
                    guild: o,
                    closePopout: t,
                  })
                : (0, n.jsx)(n.Fragment, {});
            }),
            (this.renderEmojiDetails = () => {
              let e = this.props.emoji;
              return (
                null != e.id &&
                (0, n.jsx)(ec, {
                  emojiId: e.id,
                  refreshPositionKey: this.refreshTooltipPositionKey,
                  onClose: this.handleLeave,
                  nonce: this.nonce,
                })
              );
            }),
            (this.renderTooltip = () => {
              let {
                  emoji: e,
                  message: t,
                  type: i,
                  me_burst: a,
                  isBurstReaction: l = !1,
                } = this.props,
                { tooltipText: s } = this.state,
                r = i => {
                  let n = y.default.getChannel(t.getChannelId());
                  if (null == n) return;
                  this.handleLeave();
                  let a = l ? K.ReactionTypes.BURST : K.ReactionTypes.NORMAL;
                  el(n, t, { emoji: e, reactionType: a });
                },
                u = "string" == typeof s,
                c = u ? "" === s.trim() : null == s,
                d = () =>
                  c || null == s
                    ? null
                    : (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        className: en.reactionTooltipText,
                        "aria-label": s,
                        children: s,
                      });
              return i === K.ReactionTypes.BURST
                ? (0, n.jsxs)(h.Dialog, {
                    className: en.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, n.jsx)(m.Clickable, {
                        className: en.burstReactionTooltipInner,
                        onClick: r,
                        children: (0, n.jsxs)("div", {
                          className: en.burstReactionTooltipMessage,
                          children: [
                            (0, n.jsx)(f.default, {
                              className: en.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      (() => {
                        let e = B.default.getCurrentUser();
                        if (a)
                          return (0, n.jsxs)("div", {
                            className: o(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer
                            ),
                            children: [
                              (0, H.isPremium)(e) &&
                                (0, n.jsx)(F.default, {
                                  className: en.burstReactionTooltipNitroIcon,
                                  color: w.GradientCssUrls.PREMIUM_TIER_2,
                                }),
                              (0, n.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                className: en.reactionTooltipText,
                                "aria-label": "super reaction tooltip cta",
                                children:
                                  $.default.Messages
                                    .SUPER_REACTION_TOOLTIP_CTA_REACTED,
                              }),
                            ],
                          });
                        if (this.userCanBurstReact())
                          return (0, n.jsxs)("div", {
                            className: o(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer,
                              en.burstReactionTooltipPromptClickable
                            ),
                            children: [
                              (0, n.jsx)(F.default, {
                                className: en.burstReactionTooltipNitroIcon,
                                color: w.GradientCssUrls.PREMIUM_TIER_2,
                              }),
                              (0, n.jsx)(m.Clickable, {
                                onClick: this.handleClick,
                                children: (0, n.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  className: en.reactionTooltipText,
                                  "aria-label": "super reaction tooltip cta",
                                  children:
                                    $.default.Messages
                                      .SUPER_REACTION_TOOLTIP_CTA,
                                }),
                              }),
                            ],
                          });
                        if (
                          !this.userCanBurstReact() &&
                          !this.isKeyboardNavigation
                        )
                          return (0, n.jsx)("div", {
                            className: o(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer
                            ),
                            children: (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  "aria-label": "super reaction tooltip upsell",
                                  children:
                                    $.default.Messages
                                      .SUPER_REACTION_TOOLTIP_UPSELL,
                                }),
                                (0, n.jsx)(O.default, {
                                  subscriptionTier:
                                    Q.PremiumSubscriptionSKUs.TIER_2,
                                  buttonText:
                                    $.default.Messages
                                      .USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                  className: en.burstReactionTooltipUpsellCta,
                                  onClick: e => e.stopPropagation(),
                                }),
                              ],
                            }),
                          });
                        return null;
                      })(),
                      this.renderEmojiDetails(),
                    ],
                  })
                : (0, n.jsxs)(h.Dialog, {
                    className: en.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, n.jsx)(m.Clickable, {
                        onClick: r,
                        children: (0, n.jsxs)("div", {
                          className: en.reactionTooltipInner,
                          children: [
                            (0, n.jsx)(f.default, {
                              className: en.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      this.renderEmojiDetails(),
                    ],
                  });
            }),
            (this.refreshTooltipPositionKey = () => {
              this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            (this.handleShowVerificationGate = () => {
              let { message: e, isPendingMember: t } = this.props;
              if (!t) return null;
              let i = y.default.getChannel(e.getChannelId()),
                n = P.default.getGuild(null == i ? void 0 : i.getGuildId());
              null != n && (0, v.openMemberVerificationModal)(n.id);
            }),
            (this.handleSetReactionRef = e => {
              this.setState({ reactionRef: e });
            }),
            (this.trackReactionTooltipViewed = () => {
              let { emoji: e, message: t, type: i } = this.props,
                n = B.default.getCurrentUser(),
                a = y.default.getChannel(t.getChannelId()),
                l = i === K.ReactionTypes.BURST,
                o = (0, H.isPremium)(n),
                s = l
                  ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER
                  : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
              l &&
                !this.userCanBurstReact() &&
                !o &&
                (s = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                R.default.trackWithMetadata(
                  q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED,
                  {
                    type: s,
                    expression_id: e.id,
                    expression_name: e.name,
                    is_animated: e.animated,
                    is_custom: null != e.id,
                    nonce: this.nonce,
                  }
                ),
                l &&
                  null != a &&
                  !o &&
                  !this.userCanBurstReact() &&
                  G.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    location: {
                      page:
                        (null == a ? void 0 : a.getGuildId()) != null
                          ? q.AnalyticsPages.GUILD_CHANNEL
                          : q.AnalyticsPages.DM_CHANNEL,
                      section: (0, M.getBurstAnalyticsSection)(a),
                      object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                  });
            });
        }
      }
      es.defaultProps = { emojiSize: "jumbo" };
      let er = a.memo(e => {
          let { type: t, burst_colors: i, message: a, emoji: l } = e,
            o = t === K.ReactionTypes.BURST,
            s = (0, N.useEmojiColorPalette)(o && null != i ? i : []),
            r = (0, c.useStateFromStores)(
              [z.default],
              () =>
                void 0 !==
                z.default.getEffectForEmojiId(a.getChannelId(), a.id, l)
            ),
            u = (0, c.useStateFromStores)(
              [T.default],
              () => T.default.useReducedMotion
            ),
            d = b.AnimateEmoji.useSetting(),
            h = B.default.getCurrentUser(),
            m = (0, H.isPremium)(h),
            f = (0, c.useStateFromStores)([z.default], () =>
              z.default.getReactionPickerAnimation(a.id, l.name, l.id)
            ),
            p = o && (r || null != f);
          return (0, n.jsx)(es, {
            ...e,
            colors: s,
            isBurstReaction: o,
            hideEmoji: p,
            userHasPremium: m,
            reduceMotion: u,
            animateEmoji: d,
            animationStartPosition: f,
          });
        }),
        eu = e => {
          var t;
          let {
            emojiId: i,
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: l,
            onClose: o,
            popoutData: s,
            currentGuildId: r,
            nonce: u,
          } = e;
          (0, S.useTrackOpenPopout)({
            emojiId: i,
            currentGuildId: r,
            popoutData: s,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: u,
          });
          let c =
              null !== (t = null == a ? void 0 : a.isDiscoverable()) &&
              void 0 !== t &&
              t,
            d = null !== a && c;
          return (0, n.jsx)(n.Fragment, {
            children: d
              ? null == a
                ? null
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: ee.reactionEmojiDetailsUnfurlGuildDetails,
                        children: (0, n.jsx)(J.GuildDetails, {
                          expressionSourceGuild: a,
                          hasJoinedExpressionSourceGuild: l,
                          isDisplayingJoinGuildButtonInPopout:
                            s.type === W.EmojiPopoutType.JOIN_GUILD,
                        }),
                      }),
                      (0, n.jsx)(J.EmojiPopoutList, {
                        emojiId: i,
                        expressionSourceGuild: a,
                        hasJoinedEmojiSourceGuild: l,
                        onClose: o,
                        popoutData: s,
                        isDisplayingButtonInTopSection: !1,
                      }),
                    ],
                  })
              : (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  "aria-label": s.type,
                  children: s.emojiDescription,
                }),
          });
        },
        ec = e => {
          var t;
          let { emojiId: i, refreshPositionKey: l, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: u } = (0, c.useStateFromStoresObject)(
              [E.default, P.default],
              () => {
                let e = E.default.getCustomEmojiById(i);
                return {
                  joinedEmojiSourceGuild:
                    (null == e ? void 0 : e.type) === I.EmojiTypes.GUILD
                      ? P.default.getGuild(null == e ? void 0 : e.guildId)
                      : void 0,
                };
              }
            ),
            [d, h] = a.useState(void 0),
            [f, p] = a.useState(!1),
            [T, R] = a.useState(!1),
            [g, N] = a.useState(!1),
            S = null != u,
            v =
              null !== (t = null == d ? void 0 : d.isDiscoverable()) &&
              void 0 !== t &&
              t,
            C = U.default.getGuildId(),
            j =
              null != C &&
              (C === (null == d ? void 0 : d.id) ||
                C === (null == u ? void 0 : u.id)),
            O = B.default.getCurrentUser(),
            A = (0, W.getEmojiPopoutData)({
              isPremium: H.default.isPremium(O),
              hasJoinedEmojiSourceGuild: S,
              isDiscoverable: v,
              emojiComesFromCurrentGuild: j,
              isUnusableRoleSubscriptionEmoji: !1,
              userIsRoleSubscriber: !1,
              isRoleSubscriptionEmoji: !1,
              shouldHideRoleSubscriptionCTA: !1,
            });
          a.useEffect(() => {
            if (!f || g) return;
            let e = async () => {
              l(), R(!0);
              let e = await _.default.getGuildFromEmojiId(i);
              h(e), R(!1), N(!0), l();
            };
            e();
          }, [i, f, g, l]);
          if (S) return null;
          let x = () => {
              p(!f);
            },
            M = f && void 0 !== d;
          return (0, n.jsxs)("div", {
            children: [
              M
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: ee.reactionEmojiDetailsDivider,
                      }),
                      null != A.emojiDescription &&
                        A.type !== W.EmojiPopoutType.UNAVAILABLE &&
                        (0, n.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          "aria-label": A.type,
                          children: A.emojiDescription,
                        }),
                    ],
                  })
                : (() => {
                    let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                    return (0, n.jsxs)(m.Clickable, {
                      onClick: x,
                      className: ee.reactionEmojiDetailsClickable,
                      children: [
                        (0, n.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          color: "none",
                          "aria-label": e,
                          children: e,
                        }),
                        (0, n.jsx)(V.default, {
                          width: 16,
                          height: 16,
                          className: o(ee.reactionEmojiDetailsArrow, {
                            [ee.reactionEmojiDetailsArrowCollapsed]: !f,
                          }),
                        }),
                      ],
                    });
                  })(),
              T
                ? (0, n.jsx)(Y.PopoutLoadingAnimation, {
                    className: ee.emojiDetailsLoader,
                  })
                : M &&
                  (0, n.jsx)(eu, {
                    emojiId: i,
                    expressionSourceGuild: d,
                    hasJoinedExpressionSourceGuild: S,
                    onClose: s,
                    popoutData: A,
                    currentGuildId: C,
                    nonce: r,
                  }),
            ],
          });
        };
    },
    512306: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          BurstReactionSize: function () {
            return a;
          },
          default: function () {
            return g;
          },
        });
      var n,
        a,
        l = i("37983"),
        o = i("884691"),
        s = i("414456"),
        r = i.n(s),
        u = i("865981"),
        c = i.n(u),
        d = i("913144"),
        h = i("15935"),
        m = i("569512"),
        f = i("941723"),
        p = i("49111"),
        T = i("235735");
      ((n = a || (a = {}))[(n.NORMAL = 16)] = "NORMAL"),
        (n[(n.LARGE = 32)] = "LARGE");
      let R = async e => {
        var t;
        let { effect: i } = e,
          n = await (0, m.getBurstAnimation)(
            i.channelId,
            null !== (t = i.messageId) && void 0 !== t
              ? t
              : p.EMPTY_STRING_SNOWFLAKE_ID,
            i.emoji.name
          ),
          a = await (0, f.getResizedAnimation)(
            ""
              .concat(i.channelId, ":")
              .concat(i.messageId, ":")
              .concat(i.emoji.name),
            i.url,
            n,
            i.color
          );
        return (a.assets[0].p = i.url), a;
      };
      function g(e) {
        let { className: t, effect: i, onComplete: n, emojiSize: a = 16 } = e,
          s = o.useRef(null),
          u = a * f.ANIMATION_TO_EMOJI_RATIO,
          m = (u + a) / 2;
        return (
          o.useEffect(() => {
            let e;
            if (null != i)
              return (
                !(async function () {
                  if (null != s.current) {
                    let t = await R({ effect: i });
                    (e = c.loadAnimation({
                      container: s.current,
                      renderer: "svg",
                      loop: !1,
                      autoplay: !0,
                      animationData: t,
                    })).addEventListener("complete", () => {
                      null == n || n(), e.destroy();
                    }),
                      null != i.channelId &&
                        null != i.messageId &&
                        null != i.emoji &&
                        i.key === h.BurstReactionEffectSource.HOVER &&
                        d.default.dispatch({
                          type: "BURST_REACTION_ANIMATION_ADD",
                          channelId: i.channelId,
                          messageId: i.messageId,
                          emoji: i.emoji,
                          animation: e,
                        });
                  }
                })(),
                () => {
                  null != e && e.destroy();
                }
              );
          }, [n, i, a]),
          (0, l.jsx)("div", {
            className: T.effectsWrapper,
            children: (0, l.jsx)("div", {
              className: r(T.effect, t),
              style: {
                transform: "translateY(".concat(m, "px)"),
                height: u,
                width: u,
              },
              ref: s,
            }),
          })
        );
      }
    },
    81924: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return T;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("446674"),
        o = i("913144"),
        s = i("206230"),
        r = i("166257"),
        u = i("845579"),
        c = i("15935"),
        d = i("103475"),
        h = i("512306"),
        m = i("941723"),
        f = i("757616"),
        p = i("957044"),
        T = a.memo(function (e) {
          let {
              channelId: t,
              messageId: i,
              emoji: T,
              useChatFontScaling: R,
              color: g,
              count: E,
            } = e,
            I = (0, l.useStateFromStores)([c.default], () =>
              c.default.getEffectForEmojiId(t, i, T)
            ),
            N = R ? p : f,
            _ = a.useMemo(
              () => (0, m.buildEffect)(T, g, t, { key: I, messageId: i }),
              [g, I, T, t, i]
            ),
            [S, v] = a.useState(!1),
            C = (0, l.useStateFromStores)(
              [s.default],
              () => s.default.useReducedMotion
            ),
            j = u.AnimateEmoji.useSetting(),
            O = a.useCallback(() => {
              o.default.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: i,
                emoji: T,
              });
            }, [T, t, i]);
          return (a.useEffect(() => {
            let e = () => {
              if (S) return;
              let e = (0, d.getBurstAnimationHash)(
                  "".concat(Date.now()).concat(t).concat(i).concat(T.name)
                ),
                n = e % 10;
              (n += E > 4 ? 4 : E - 1) > 7 &&
                (v(!0),
                (0, r.playBurstReaction)({
                  channelId: t,
                  messageId: i,
                  emoji: T,
                  key: c.BurstReactionEffectSource.RANDOM,
                }));
            };
            if (S || (C && !j) || !j) return;
            e();
            let n = setInterval(e, 5e3);
            return () => {
              clearInterval(n);
            };
          }, [j, t, E, T, T.name, S, i, C]),
          null == I)
            ? null
            : (0, n.jsx)(h.default, {
                className: N.effect,
                effect: _,
                onComplete: O,
              });
        });
    },
    941723: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ANIMATION_TO_EMOJI_RATIO: function () {
            return u;
          },
          getResizedAnimation: function () {
            return c;
          },
          buildEffect: function () {
            return d;
          },
        }),
        i("781738");
      var n = i("917351"),
        a = i("748820"),
        l = i("407063"),
        o = i("397485"),
        s = i("284679"),
        r = i("103475");
      let u = 7.5,
        c = (0, n.memoize)(
          (e, t, i, n) =>
            new Promise(e => {
              let a = new Image();
              (a.src = t),
                (a.crossOrigin = "Anonymous"),
                (a.onload = () => {
                  let t = 32 * (0, l.getDevicePixelRatio)(),
                    o = JSON.stringify(i);
                  if (
                    (null != n &&
                      (o = (0, r.replaceAnimationColors)(
                        o,
                        (0, s.hexToRgb)(n)
                      )),
                    (a.width === t && a.height === t) ||
                      (0 === a.width && 0 === a.height))
                  )
                    e(JSON.parse(o));
                  else {
                    let t = (128 / a.width) * a.height;
                    e(
                      JSON.parse(
                        (o = (o = o.replace(
                          /"w":128,"h":128/,
                          '"w":128,"h":'.concat(t)
                        )).replace(
                          /"a":{"a":0,"k":\[64,64/,
                          '"a":{"a":0,"k":[64,'.concat(t / 2)
                        ))
                      )
                    );
                  }
                });
            })
        );
      function d(e, t, i, n) {
        let { emojiSize: l, key: s, messageId: r } = null != n ? n : {},
          u = (0, o.getEffectUrl)(e, null != l ? 2 * l : void 0);
        return {
          channelId: i,
          messageId: r,
          emoji: e,
          animationId: (0, a.v4)(),
          url: u,
          key: s,
          color: t,
        };
      }
    },
    232259: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useUsernameHook: function () {
            return c;
          },
        });
      var n = i("37983"),
        a = i("884691"),
        l = i("77078"),
        o = i("506885"),
        s = i("981601"),
        r = i("42203"),
        u = i("441823");
      function c(e, t, i) {
        var c, d;
        let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          m = arguments.length > 4 ? arguments[4] : void 0;
        let f =
          ((c = e),
          (d = t),
          a.useCallback(
            e => {
              let t = r.default.getChannel(d);
              null != t && null != c && (0, u.openUserContextMenu)(e, c, t);
            },
            [c, d]
          ));
        return a.useCallback(
          r => (u, c) => {
            let d = (e, t) =>
                (0, a.createElement)(l.NameWithRoleAnchor, {
                  ...(null != e ? e : {}),
                  key: t,
                  onContextMenu: f,
                  name: u,
                  color: null == r ? void 0 : r.colorString,
                  roleName: null == r ? void 0 : r.colorRoleName,
                  "aria-label": m,
                }),
              p = e => t => {
                h && t.stopPropagation(), e(t);
              };
            return null != e
              ? (0, n.jsx)(
                  l.Popout,
                  {
                    position: "right",
                    preload: () =>
                      (0, o.default)(e.id, e.getAvatarURL(i, 80), {
                        guildId: i,
                        channelId: t,
                      }),
                    renderPopout: a =>
                      (0, n.jsx)(s.default, {
                        ...a,
                        userId: e.id,
                        guildId: i,
                        channelId: t,
                      }),
                    children: e => {
                      let { onClick: t, ...i } = e;
                      return d({ onClick: p(t), ...i });
                    },
                  },
                  c
                )
              : d(void 0, c);
          },
          [e, t, i, f, h, m]
        );
      }
    },
    785621: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return m;
          },
        });
      var n = i("37983"),
        a = i("884691"),
        l = i("917351"),
        o = i("65597"),
        s = i("880731"),
        r = i("232268"),
        u = i("759432"),
        c = i("798592"),
        d = i("39141");
      function h(e) {
        let { reactionRef: t, count: i } = e,
          n = a.useRef(i),
          r = (0, o.default)([s.default], () => s.default.getState()),
          d = (0, c.default)(),
          h = (0, u.default)(t);
        return (
          a.useEffect(() => {
            if (i > n.current && null != h) {
              let e = (0, l.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
              d.fire(h.x, h.y, { count: e });
            }
            n.current = i;
          }, [i, h, d, r.confettiCount]),
          null
        );
      }
      function m(e) {
        return (0, n.jsx)(r.default, {
          confettiLocation: d.ConfettiLocation.REACTION,
          children: (0, n.jsx)(h, { ...e }),
        });
      }
    },
    85589: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
          openBurstReactionsUpsellModal: function () {
            return p;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("77078"),
        l = i("79112"),
        o = i("154889"),
        s = i("917247"),
        r = i("789946"),
        u = i("646718"),
        c = i("49111"),
        d = i("782340"),
        h = i("618080"),
        m = i("277064");
      function f(e) {
        var t, i;
        let { onClose: a, analyticsSource: f, ...p } = e,
          T = d.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
            onClick: () => {
              l.default.open(c.UserSettingsSections.PREMIUM), a();
            },
          }),
          R = (0, s.usePremiumTrialOffer)(),
          g = (0, o.usePremiumDiscountOffer)();
        return (0, n.jsx)(r.default, {
          artURL: m,
          artContainerClassName: h.artContainer,
          modalClassName: h.modalContainer,
          bodyClassName: h.bodyContainer,
          type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
          title: d.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
          body: T,
          glowUp: T,
          analyticsSource: f,
          analyticsLocation: {
            page: c.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
            object: c.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: a,
          subscribeButtonText:
            null != R || null != g
              ? void 0
              : d.default.Messages.PREMIUM_SETTINGS_GET,
          subscriptionTier:
            null !==
              (i =
                null == R
                  ? void 0
                  : null === (t = R.subscription_trial) || void 0 === t
                    ? void 0
                    : t.sku_id) && void 0 !== i
              ? i
              : u.PremiumSubscriptionSKUs.TIER_2,
          backButtonText: d.default.Messages.NO_THANKS,
          ...p,
        });
      }
      function p(e) {
        let { analytics: t } = e;
        (0, a.openModalLazy)(async () => {
          let { default: e } = await i.el("85589").then(i.bind(i, "85589"));
          return i => (0, n.jsx)(e, { analyticsSource: t, ...i });
        });
      }
    },
    738107: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getMinCounterWidth: function () {
            return f;
          },
          default: function () {
            return o;
          },
        });
      var n,
        a,
        l,
        o,
        s = i("37983"),
        r = i("884691"),
        u = i("917351"),
        c = i.n(u),
        d = i("458960"),
        h = i("471671");
      function m(e, t) {
        return {
          toValue: e,
          duration: null != t ? t : 300,
          easing: d.default.Easing.inOut(d.default.Easing.back()),
        };
      }
      function f(e, t, i) {
        if (null != t) {
          let n = Math.ceil(Math.log10(e + 1));
          return null != i && i > 0 ? Math.min(n, i) * t : n * t;
        }
      }
      ((n = l || (l = {}))[(n.ABOVE = 0)] = "ABOVE"),
        (n[(n.VISIBLE = 1)] = "VISIBLE"),
        (n[(n.BELOW = 2)] = "BELOW"),
        ((a = class extends r.PureComponent {
          static getDerivedStateFromProps(e, t) {
            let { prevValue: i, currValue: n, nextValue: a } = t;
            return null == i && n !== e.value
              ? {
                  prevValue: h.default.isFocused() ? n : null,
                  currValue: e.value,
                }
              : null != a && a !== e.value
                ? { nextValue: e.value }
                : null;
          }
          componentDidUpdate(e, t) {
            let { prevValue: i, currValue: n } = this.state;
            i !== t.prevValue && null != i && this.animateBetween(i, n);
          }
          animateBetween(e, t) {
            let i;
            let { forcePosition: n, animationSpeed: a } = this.props;
            this.prevAnimate.setValue(1),
              null != n
                ? 0 === n
                  ? (this.currAnimate.setValue(0), (i = 2))
                  : 2 === n && (this.currAnimate.setValue(2), (i = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (i = 2))
                  : (this.currAnimate.setValue(2), (i = 0)),
              d.default
                .parallel([
                  d.default.timing(this.prevAnimate, m(i, a)),
                  d.default.timing(this.currAnimate, m(1, a)),
                ])
                .start(this.animateNext);
          }
          getAnimatedStyle(e) {
            let { animationColor: t } = this.props;
            return {
              transform: [
                {
                  translateY: e.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: ["-100%", "0%", "100%"],
                  }),
                },
              ],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...(null != t && { color: t }),
            };
          }
          getMinWidth(e) {
            let { digitWidth: t, padStartLength: i } = this.props;
            return f(e, t, i);
          }
          padValue(e) {
            let { padStartLength: t } = this.props;
            return null != t ? String(e).padStart(t, "0") : e;
          }
          render() {
            let { prevValue: e, currValue: t } = this.state,
              { color: i, formatString: n } = this.props,
              a = c.omit(this.props, [
                "value",
                "digitWidth",
                "padStartLength",
                "forcePosition",
              ]);
            if (null == e)
              return (0, s.jsx)("div", {
                ...a,
                style: { color: i, minWidth: this.getMinWidth(t) },
                children: null != n ? n(this.padValue(t)) : this.padValue(t),
              });
            let l = Math.max(e, t);
            return (0, s.jsxs)("div", {
              ...a,
              style: { color: i, position: "relative", overflow: "hidden" },
              children: [
                (0, s.jsx)("div", {
                  style: {
                    visibility: "hidden",
                    minWidth: this.getMinWidth(l),
                  },
                  children: this.padValue(l),
                }),
                (0, s.jsx)(d.default.div, {
                  style: {
                    color: i,
                    ...this.getAnimatedStyle(this.prevAnimate),
                  },
                  children: null != n ? n(this.padValue(e)) : this.padValue(e),
                }),
                (0, s.jsx)(d.default.div, {
                  style: {
                    color: i,
                    ...this.getAnimatedStyle(this.currAnimate),
                  },
                  children: null != n ? n(this.padValue(t)) : this.padValue(t),
                }),
              ],
            });
          }
          constructor(e) {
            super(e),
              (this.animateNext = () => {
                let { currValue: e, nextValue: t } = this.state;
                null != t
                  ? this.setState({
                      prevValue: h.default.isFocused() ? e : null,
                      currValue: t,
                      nextValue: null,
                    })
                  : this.setState({ prevValue: null });
              }),
              (this.state = {
                prevValue: null,
                currValue: e.value,
                nextValue: null,
              }),
              (this.prevAnimate = new d.default.Value(0)),
              (this.currAnimate = new d.default.Value(1));
          }
        }).Positions = l),
        (o = a);
    },
    211162: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PinIcon: function () {
            return o;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("669491"),
        l = i("82169");
      let o = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: o = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...r
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
            className: s,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=89a2a038bf0ab6053ffb.js.map

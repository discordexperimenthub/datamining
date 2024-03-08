(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64823"],
  {
    57155: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return et;
          },
        }),
        n("222007"),
        n("424973"),
        n("860677"),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        r = n("414456"),
        i = n.n(r),
        o = n("627445"),
        s = n.n(o),
        u = n("917351"),
        c = n.n(u),
        d = n("509043"),
        h = n("446674"),
        f = n("819855"),
        m = n("77078"),
        g = n("430568"),
        R = n("145079"),
        p = n("87657"),
        E = n("206230"),
        T = n("867805"),
        S = n("584375"),
        A = n("430475"),
        j = n("390236"),
        N = n("185014"),
        I = n("875978"),
        v = n("512306"),
        M = n("941723"),
        b = n("166257"),
        _ = n("432173"),
        C = n("300322"),
        O = n("161778"),
        x = n("42203"),
        y = n("26989"),
        U = n("486996"),
        w = n("377253"),
        L = n("957255"),
        B = n("27618"),
        k = n("697218"),
        D = n("145131"),
        F = n("945330"),
        z = n("315102"),
        H = n("402671"),
        P = n("387111"),
        G = n("299039"),
        V = n("441823"),
        Y = n("49111"),
        J = n("782340"),
        X = n("726347"),
        q = n("890957");
      function K(e) {
        return null == e.id
          ? T.default.convertSurrogateToName(e.name)
          : ":".concat(e.name, ":");
      }
      let W = e => {
        let { emoji: t, channelId: n, messageId: r } = e,
          [o, s] = a.useState(!0),
          [u, c] = a.useState([]),
          d = a.useMemo(() => {
            if (null == u || u.length < 1) return;
            let e = (0, M.buildEffect)(t, u[0], n, {
              emojiSize: v.BurstReactionSize.LARGE,
              messageId: r,
            });
            return (0, l.jsx)(v.default, {
              className: X.effect,
              effect: e,
              emojiSize: v.BurstReactionSize.LARGE,
              onComplete: () => s(!1),
            });
          }, [u, t, n, r]);
        return (
          a.useEffect(() => {
            let e = !1;
            return (
              s(!0),
              !(async function () {
                let n = await (0, H.getEmojiColors)(t);
                Array.isArray(n) && n.length > 0 && !e && c(n);
              })(),
              () => {
                e = !0;
              }
            );
          }, [t]),
          (0, l.jsxs)("div", {
            className: X.burstEmojiSection,
            children: [
              d,
              (0, l.jsx)(g.default, {
                className: i(X.burstEmoji, { [X.hideEmoji]: o }),
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated,
                size: "reaction",
              }),
              (0, l.jsx)(m.Text, { variant: "text-md/medium", children: K(t) }),
            ],
          })
        );
      };
      class Z extends a.PureComponent {
        render() {
          let {
              emoji: e,
              count: t,
              isSelected: n,
              setSelected: a,
              reactionType: r,
              colors: o,
            } = this.props,
            s = K(e),
            u = (function (e, t, n, a) {
              let r =
                null == e.id
                  ? H.default.getURL(e.name)
                  : z.default.getEmojiURL({
                      id: e.id,
                      animated: e.animated,
                      size: 24,
                    });
              return null != r && "" !== r
                ? (0, l.jsx)("img", { className: n, src: r, alt: e.name })
                : (0, l.jsx)("span", { className: a, children: e.name });
            })(e, 24, X.emoji, i(X.emoji, X.emojiText)),
            c = r === I.ReactionTypes.BURST,
            h = c
              ? J.default.Messages.BURST_REACTION_REACTORS_A11Y
              : J.default.Messages.REACTION_REACTORS_A11Y,
            f = h.format({ name: s, n: t }),
            g = {},
            R = {};
          if (c) {
            let {
              backgroundColor: e = "",
              opacity: t = 1,
              accentColor: l = "",
            } = null != o ? o : {};
            if (((R.color = l), n)) {
              var p;
              g.background =
                null !== (p = (0, d.hex2rgb)(e, t)) && void 0 !== p ? p : "";
            }
          }
          return (0, l.jsx)(m.Tooltip, {
            position: "left",
            text: s,
            children: o => {
              let { onMouseEnter: s, onMouseLeave: c } = o;
              return (0, l.jsxs)(m.Clickable, {
                className: i({
                  [X.reactionDefault]: !n,
                  [X.reactionSelected]: n,
                }),
                "aria-label": f,
                onClick: () => a({ emoji: e, reactionType: r }),
                onMouseEnter: s,
                onMouseLeave: c,
                style: g,
                children: [
                  u,
                  (0, l.jsx)(m.Text, {
                    variant: "text-sm/bold",
                    style: R,
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
            user: n,
            message: a,
            channel: r,
            guildId: i,
            reactionType: o,
            onRemoveReactor: u,
            disableManage: c = !1,
          } = e,
          d = k.default.getCurrentUser(),
          f = (0, h.useStateFromStores)(
            [k.default],
            () => k.default.getUser(n.id),
            [n]
          );
        s(null != d, "Reactor: currentUser cannot be undefined");
        let g = (0, C.useIsActiveChannelOrUnarchivableThread)(r),
          E = (0, h.useStateFromStores)(
            [L.default],
            () => L.default.can(Y.Permissions.MANAGE_MESSAGES, r) && g
          ),
          T = E || d.id === n.id,
          S = (0, h.useStateFromStores)([y.default, x.default, B.default], () =>
            P.default.getName(i, r.id, n)
          );
        return (0, l.jsxs)(D.default, {
          className: X.reactorDefault,
          onContextMenu: e => (0, V.openUserContextMenu)(e, n, r),
          align: D.default.Align.CENTER,
          children: [
            (0, l.jsx)(D.default.Child, {
              wrap: !0,
              grow: 0,
              shrink: 0,
              className: q.marginReset,
              children: (0, l.jsx)(p.default, {
                user: null != f ? f : n,
                size: m.AvatarSizes.SIZE_24,
              }),
            }),
            (0, l.jsx)(D.default.Child, {
              children: (0, l.jsxs)(m.Text, {
                tag: "strong",
                variant: "text-md/normal",
                className: X.name,
                children: [
                  null != S &&
                    "" !== S &&
                    (0, l.jsx)("span", {
                      className: n.isPomelo() ? "" : X.nickname,
                      children: S,
                    }),
                  (0, l.jsx)(R.default, {
                    user: n,
                    className: null != S && "" !== S ? X.tagFaded : null,
                    usernameClass: X.username,
                    discriminatorClass: X.discriminator,
                    forceUsername: !0,
                  }),
                ],
              }),
            }),
            !c &&
              T &&
              (0, l.jsx)(m.Clickable, {
                onClick: function () {
                  b.removeReactionWithConfirmation({
                    emoji: t,
                    userId: n.id,
                    channelId: r.id,
                    messageId: a.id,
                    reactionType: o,
                    isMe: (null == d ? void 0 : d.id) === n.id,
                  }),
                    null == u || u();
                },
                children: (0, l.jsx)(F.default, {
                  width: 16,
                  height: 16,
                  className: X.remove,
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
          let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: l } = this.state;
          this.setState({ loadingMore: !0 }),
            b
              .getReactors({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: Y.DEFAULT_NUM_REACTION_USERS,
                after: l,
                type: n,
              })
              .then(e => {
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
              reaction: n,
              message: a,
              reactionType: r,
            } = this.props,
            i = [];
          return (
            0 === t.length && this.state.loadingMore
              ? i.push(length)
              : (i.push(t.length), e && i.push(1)),
            (0, l.jsxs)("div", {
              className: X.reactorsContainer,
              children: [
                r === I.ReactionTypes.BURST &&
                  (0, l.jsx)(W, {
                    emoji: n.emoji,
                    channelId: a.getChannelId(),
                    messageId: a.id,
                  }),
                (0, l.jsx)(m.List, {
                  className: X.reactors,
                  fade: !0,
                  ref: this.scrollerRef,
                  sections: i,
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
              let { reactors: n } = this.props;
              if (1 === e) return 0 === t ? 44 : 0;
              if (0 === e) {
                if (0 === t && 0 === n.length) return 440;
                if (null != this.props.reactors[t]) return 44;
              }
              return 0;
            }),
            (this.renderRow = e => {
              let { section: t, row: n } = e,
                {
                  message: a,
                  guildId: r,
                  channel: i,
                  reaction: o,
                  reactors: s,
                  reactionType: u,
                  disableManage: c,
                } = this.props,
                d = s[n];
              if (1 === t)
                return 0 === n
                  ? (0, l.jsx)(
                      m.Spinner,
                      { className: X.spinnerMore },
                      "hasMore"
                    )
                  : null;
              return 0 === s.length && this.state.loadingMore
                ? (0, l.jsx)(m.Spinner, { className: X.spinner }, "loadingMore")
                : null != d &&
                    (0, l.jsx)(
                      Q,
                      {
                        message: a,
                        emoji: o.emoji,
                        guildId: r,
                        channel: i,
                        user: d,
                        reaction: o,
                        reactionType: u,
                        disableManage: c,
                      },
                      d.id
                    );
            });
        }
      }
      let ee = h.default.connectStores([U.default], e => {
        let { message: t, reaction: n, reactionType: l } = e,
          a = U.default.getReactions(
            t.getChannelId(),
            t.id,
            n.emoji,
            Y.DEFAULT_NUM_REACTION_USERS,
            l
          );
        if (null == a) return { reactors: [], hasMore: !1 };
        let r = Object.values(a),
          i = l === I.ReactionTypes.BURST ? n.burst_count : n.count,
          o = i > r.length;
        return { reactors: r, hasMore: o };
      })($);
      function et(e) {
        var t;
        let {
            message: n,
            selectedReaction: r,
            disableManage: i = !1,
            disableTabs: o = !1,
            onClose: s,
            transitionState: u,
            "aria-label": c = J.default.Messages.REACTIONS,
          } = e,
          d = (0, h.useStateFromStores)([x.default], () =>
            x.default.getChannel(n.getChannelId())
          ),
          g = null == d ? void 0 : d.getGuildId(),
          R = (0, h.useStateFromStores)(
            [w.default, A.default, N.default],
            () => {
              var e, t, l;
              let a =
                null !==
                  (l =
                    null !==
                      (t = w.default.getMessage(n.getChannelId(), n.id)) &&
                    void 0 !== t
                      ? t
                      : null ===
                            (e = A.default.getMessage(
                              G.default.castMessageIdAsChannelId(n.id)
                            )) || void 0 === e
                        ? void 0
                        : e.firstMessage) && void 0 !== l
                  ? l
                  : null != g
                    ? N.default.getCachedMessage(g, n.getChannelId(), n.id)
                    : void 0;
              return null != a ? a.reactions : [];
            },
            [n, g]
          );
        let p =
            ((t = R),
            a.useMemo(() => {
              let e = [];
              return (
                t.forEach(t => {
                  t.burst_count > 0 && e.push({ ...t, count: 0 }),
                    t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                  let n = e.burst_count > 0 ? e.burst_count : e.count,
                    l = t.burst_count > 0 ? t.burst_count : t.count;
                  return l - n;
                }),
                e
              );
            }, [t])),
          T = p[0],
          v =
            null != T
              ? {
                  emoji: T.emoji,
                  reactionType:
                    T.burst_count > 0
                      ? I.ReactionTypes.BURST
                      : I.ReactionTypes.NORMAL,
                }
              : null,
          [M, b] = (function (e, t, n) {
            let [l, r] = a.useState(null != e ? e : t);
            return (
              a.useEffect(() => {
                if (null != l) {
                  let e = n.find(e => {
                    let t =
                      null != e.me_vote
                        ? I.ReactionTypes.VOTE
                        : e.burst_count > 0
                          ? I.ReactionTypes.BURST
                          : I.ReactionTypes.NORMAL;
                    return (
                      (0, _.emojiEquals)(e.emoji, l.emoji) &&
                      t === l.reactionType
                    );
                  });
                  null == e && r(t);
                }
              }, [l, r, n, t]),
              [l, r]
            );
          })(r, v, R),
          C = a.useMemo(() => {
            var e;
            return null == M
              ? null
              : null !==
                    (e = R.find(e => (0, _.emojiEquals)(e.emoji, M.emoji))) &&
                  void 0 !== e
                ? e
                : null;
          }, [R, M]),
          y = (0, h.useStateFromStores)(
            [E.default],
            () => E.default.saturation
          ),
          U = (0, h.useStateFromStores)([O.default], () =>
            (0, f.isThemeDark)(O.default.theme)
          );
        if (
          (a.useEffect(() => {
            (0 === R.length || (null == M && null == C)) && setImmediate(s);
          }, [s, R.length, C, M]),
          null == M || null == C)
        )
          return (0, l.jsx)(m.Spinner, {});
        if (null == d)
          throw Error(
            "MessageReactions.render: Message does not have a channelId"
          );
        return (0, l.jsx)(j.default.Provider, {
          value: null != g ? g : void 0,
          children: (0, l.jsxs)(m.ModalRoot, {
            "aria-label": c,
            transitionState: u,
            size: m.ModalSize.DYNAMIC,
            className: X.container,
            children: [
              o
                ? null
                : (0, l.jsx)(m.Scroller, {
                    className: X.scroller,
                    fade: !0,
                    children: p.map(e => {
                      var t;
                      let n = e.burst_count > 0;
                      return (0, l.jsx)(
                        Z,
                        {
                          isSelected: en(
                            M,
                            e,
                            n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL
                          ),
                          setSelected: b,
                          reactionType: n
                            ? I.ReactionTypes.BURST
                            : I.ReactionTypes.NORMAL,
                          emoji: e.emoji,
                          count: n ? e.burst_count : e.count,
                          colors:
                            null != e.burst_colors
                              ? (0, S.buildEmojiColorPalette)(
                                  e.burst_colors,
                                  y,
                                  U
                                )
                              : void 0,
                        },
                        ""
                          .concat(n ? "burst-" : "normal-")
                          .concat(
                            null !== (t = e.emoji.id) && void 0 !== t ? t : "",
                            ":"
                          )
                          .concat(e.emoji.name)
                      );
                    }),
                  }),
              (0, l.jsx)(ee, {
                message: n,
                reaction: C,
                guildId: g,
                channel: d,
                reactionType: M.reactionType,
                disableManage: i,
              }),
            ],
          }),
        });
      }
      let en = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n;
    },
    15935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BurstReactionEffectSource: function () {
            return l;
          },
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l,
        a,
        r = n("446674"),
        i = n("913144");
      ((a = l || (l = {})).HOVER = "HOVER"),
        (a.EXTERNAL = "EXTERNAL"),
        (a.RANDOM = "RANDOM");
      let o = {},
        s = {},
        u = {},
        c = (e, t) => {
          let n = null != t.id ? t.id : t.name;
          return "".concat(e, ":").concat(n);
        },
        d = (e, t) => {
          var n;
          let l;
          switch (e) {
            case "HOVER":
              l = "HOVER";
              break;
            case "RANDOM":
              l = "RANDOM";
              break;
            default:
              l = "EXTERNAL";
          }
          let a = Object.entries(null !== (n = s[t]) && void 0 !== n ? n : {}),
            r = a.filter(e => {
              let [, t] = e;
              return t === l;
            }),
            i = Object.fromEntries(r);
          if (Object.keys(i).length >= 5 && "EXTERNAL" === e) {
            for (let e in i)
              if (null == u[t] || null == u[t][e]) {
                delete s[t][e], delete i[e];
                break;
              }
          }
          return Object.keys(i).length;
        };
      class h extends r.default.Store {
        getReactionPickerAnimation(e, t, n) {
          return o[
            ""
              .concat(e, ":")
              .concat(t, ":")
              .concat(null != n ? n : "")
          ];
        }
        getEffectForEmojiId(e, t, n) {
          var l;
          let a = c(t, n);
          return null === (l = s[e]) || void 0 === l ? void 0 : l[a];
        }
      }
      h.displayName = "BurstReactionEffectsStore";
      var f = new h(i.default, {
        BURST_REACTION_EFFECT_CLEAR: e => {
          var t;
          let { channelId: n, messageId: l, emoji: a } = e,
            r = c(l, a);
          null === (t = s[n]) || void 0 === t || delete t[r];
        },
        BURST_REACTION_EFFECT_PLAY: e => {
          var t, n, l;
          let { channelId: a, messageId: r, emoji: i, key: o } = e,
            h = c(r, i);
          if (d(o, a) >= 5) return;
          let f = null !== (t = s[a]) && void 0 !== t ? t : {},
            m = null !== (n = u[a]) && void 0 !== n ? n : {},
            g = m[h],
            R = f[h];
          if ("HOVER" !== o || null == R) {
            "HOVER" === R &&
              "EXTERNAL" === o &&
              null != g &&
              ("function" == typeof g.destroy && g.destroy(),
              null === (l = u[a]) || void 0 === l || delete l[h],
              (R = void 0));
            null == R && (null != s[a] ? (s[a][h] = o) : (s[a] = { [h]: o }));
          }
        },
        BURST_REACTION_ANIMATION_ADD: e => {
          let { channelId: t, messageId: n, emoji: l, animation: a } = e,
            r = c(n, l);
          null == u[t] && (u[t] = {}), (u[t][r] = a);
        },
        BURST_REACTION_PICKER_ANIMATION_ADD: e => {
          let { messageId: t, emojiName: n, emojiId: l, startPosition: a } = e;
          o[
            ""
              .concat(t, ":")
              .concat(n, ":")
              .concat(null != l ? l : "")
          ] = a;
        },
        BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
          let { messageId: t, emojiName: n, emojiId: l } = e;
          delete o[
            ""
              .concat(t, ":")
              .concat(n, ":")
              .concat(null != l ? l : "")
          ];
        },
      });
    },
    103475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          replaceAnimationColors: function () {
            return i;
          },
          getBurstAnimationHash: function () {
            return o;
          },
        }),
        n("781738");
      var l,
        a = n("917351"),
        r = n("284679");
      (l || (l = {})).OUT_OF_BURSTS = "out of burst reactions modal";
      let i = (e, t) => {
          let n = (0, r.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
          return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            "["
              .concat(n[0][0] / 255, ",")
              .concat(n[0][1] / 255, ",")
              .concat(n[0][2] / 255, ",")
          )).replace(
            /\[0,0,1,/g,
            "["
              .concat(n[1][0] / 255, ",")
              .concat(n[1][1] / 255, ",")
              .concat(n[1][2] / 255, ",")
          ));
        },
        o = (0, a.memoize)(e => {
          let t = 0;
          for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
          return Math.abs(t);
        });
    },
    569512: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getBurstAnimation: function () {
            return r;
          },
        });
      var l = n("103475");
      let a = [
          { load: () => n.el("448779").then(n.t.bind(n, "448779", 19)) },
          { load: () => n.el("734436").then(n.t.bind(n, "734436", 19)) },
          { load: () => n.el("494925").then(n.t.bind(n, "494925", 19)) },
          { load: () => n.el("199777").then(n.t.bind(n, "199777", 19)) },
          { load: () => n.el("942466").then(n.t.bind(n, "942466", 19)) },
          { load: () => n.el("56957").then(n.t.bind(n, "56957", 19)) },
          { load: () => n.el("547173").then(n.t.bind(n, "547173", 19)) },
          { load: () => n.el("485996").then(n.t.bind(n, "485996", 19)) },
          { load: () => n.el("871996").then(n.t.bind(n, "871996", 19)) },
          { load: () => n.el("584037").then(n.t.bind(n, "584037", 19)) },
          { load: () => n.el("320512").then(n.t.bind(n, "320512", 19)) },
          { load: () => n.el("925536").then(n.t.bind(n, "925536", 19)) },
          { load: () => n.el("522373").then(n.t.bind(n, "522373", 19)) },
          { load: () => n.el("837366").then(n.t.bind(n, "837366", 19)) },
          { load: () => n.el("42949").then(n.t.bind(n, "42949", 19)) },
          { load: () => n.el("294705").then(n.t.bind(n, "294705", 19)) },
          { load: () => n.el("454599").then(n.t.bind(n, "454599", 19)) },
          { load: () => n.el("814738").then(n.t.bind(n, "814738", 19)) },
        ],
        r = async function (e, t, n) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let r = (0, l.getBurstAnimationHash)(
              "".concat(e).concat(t).concat(n)
            ),
            i = a[r % a.length];
          return await i.load();
        };
    },
    512306: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BurstReactionSize: function () {
            return a;
          },
          default: function () {
            return E;
          },
        });
      var l,
        a,
        r = n("37983"),
        i = n("884691"),
        o = n("414456"),
        s = n.n(o),
        u = n("865981"),
        c = n.n(u),
        d = n("913144"),
        h = n("15935"),
        f = n("569512"),
        m = n("941723"),
        g = n("49111"),
        R = n("235735");
      ((l = a || (a = {}))[(l.NORMAL = 16)] = "NORMAL"),
        (l[(l.LARGE = 32)] = "LARGE");
      let p = async e => {
        var t;
        let { effect: n } = e,
          l = await (0, f.getBurstAnimation)(
            n.channelId,
            null !== (t = n.messageId) && void 0 !== t
              ? t
              : g.EMPTY_STRING_SNOWFLAKE_ID,
            n.emoji.name
          ),
          a = await (0, m.getResizedAnimation)(
            ""
              .concat(n.channelId, ":")
              .concat(n.messageId, ":")
              .concat(n.emoji.name),
            n.url,
            l,
            n.color
          );
        return (a.assets[0].p = n.url), a;
      };
      function E(e) {
        let { className: t, effect: n, onComplete: l, emojiSize: a = 16 } = e,
          o = i.useRef(null),
          u = a * m.ANIMATION_TO_EMOJI_RATIO,
          f = (u + a) / 2;
        return (
          i.useEffect(() => {
            let e;
            if (null != n)
              return (
                !(async function () {
                  if (null != o.current) {
                    let t = await p({ effect: n });
                    (e = c.loadAnimation({
                      container: o.current,
                      renderer: "svg",
                      loop: !1,
                      autoplay: !0,
                      animationData: t,
                    })).addEventListener("complete", () => {
                      null == l || l(), e.destroy();
                    }),
                      null != n.channelId &&
                        null != n.messageId &&
                        null != n.emoji &&
                        n.key === h.BurstReactionEffectSource.HOVER &&
                        d.default.dispatch({
                          type: "BURST_REACTION_ANIMATION_ADD",
                          channelId: n.channelId,
                          messageId: n.messageId,
                          emoji: n.emoji,
                          animation: e,
                        });
                  }
                })(),
                () => {
                  null != e && e.destroy();
                }
              );
          }, [l, n, a]),
          (0, r.jsx)("div", {
            className: R.effectsWrapper,
            children: (0, r.jsx)("div", {
              className: s(R.effect, t),
              style: {
                transform: "translateY(".concat(f, "px)"),
                height: u,
                width: u,
              },
              ref: o,
            }),
          })
        );
      }
    },
    941723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
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
        n("781738");
      var l = n("917351"),
        a = n("748820"),
        r = n("407063"),
        i = n("397485"),
        o = n("284679"),
        s = n("103475");
      let u = 7.5,
        c = (0, l.memoize)(
          (e, t, n, l) =>
            new Promise(e => {
              let a = new Image();
              (a.src = t),
                (a.crossOrigin = "Anonymous"),
                (a.onload = () => {
                  let t = 32 * (0, r.getDevicePixelRatio)(),
                    i = JSON.stringify(n);
                  if (
                    (null != l &&
                      (i = (0, s.replaceAnimationColors)(
                        i,
                        (0, o.hexToRgb)(l)
                      )),
                    (a.width === t && a.height === t) ||
                      (0 === a.width && 0 === a.height))
                  )
                    e(JSON.parse(i));
                  else {
                    let t = (128 / a.width) * a.height;
                    e(
                      JSON.parse(
                        (i = (i = i.replace(
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
      function d(e, t, n, l) {
        let { emojiSize: r, key: o, messageId: s } = null != l ? l : {},
          u = (0, i.getEffectUrl)(e, null != r ? 2 * r : void 0);
        return {
          channelId: n,
          messageId: s,
          emoji: e,
          animationId: (0, a.v4)(),
          url: u,
          key: o,
          color: t,
        };
      }
    },
  },
]);
//# sourceMappingURL=7852a1d68b76921ee10e.js.map

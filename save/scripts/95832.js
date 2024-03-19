(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95832"],
  {
    401033: function (e, t, n) {
      "use strict";
      e.exports = n.p + "19728c4ebf529273554d.svg";
    },
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        r = n("390236"),
        i = l.memo(function (e) {
          var t, n, i, o;
          let {
              user: u,
              size: d = s.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": m = !1,
              ...f
            } = e,
            h = l.useContext(r.default);
          return (0, a.jsx)(s.Avatar, {
            src:
              ((t = u),
              (n = (0, s.getAvatarSize)(d)),
              (i = c),
              (o = h),
              t.getAvatarURL(o, n, i)),
            size: d,
            "aria-label": m ? void 0 : u.username,
            "aria-hidden": m,
            ...f,
          });
        });
    },
    446341: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("714617"),
        l = n.n(a),
        s = n("917351"),
        r = n.n(s),
        i = n("446674"),
        o = n("875978"),
        u = n("486996"),
        d = n("49111");
      function c(e) {
        var t, n;
        let { channelId: a, messageId: s, reaction: c } = e,
          m = (0, i.useStateFromStores)(
            [u.default],
            () => {
              let e = u.default.getReactions(
                a,
                s,
                c.emoji,
                d.DEFAULT_NUM_REACTION_USERS,
                o.ReactionTypes.VOTE
              );
              return r.map(e, e => e);
            },
            [a, s, c.emoji],
            l
          ),
          f =
            null !==
              (n =
                null === (t = c.count_details) || void 0 === t
                  ? void 0
                  : t.vote) && void 0 !== n
              ? n
              : 0;
        return { reactors: m, hasMore: f > m.length };
      }
    },
    915299: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("222007"),
        n("424973"),
        n("70102");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        r = n.n(s),
        i = n("446674"),
        o = n("77078"),
        u = n("145079"),
        d = n("87657"),
        c = n("841098"),
        m = n("875978"),
        f = n("166257"),
        h = n("42203"),
        x = n("697218"),
        g = n("941886"),
        p = n("98292"),
        j = n("315102"),
        v = n("402671"),
        C = n("387111"),
        M = n("441823"),
        S = n("562228"),
        T = n("905206"),
        E = n("446341"),
        N = n("49111"),
        _ = n("782340"),
        y = n("595406"),
        L = n("401033");
      let I = m.ReactionTypes.VOTE;
      function R() {
        let e = (0, c.default)();
        return (0, a.jsxs)(g.default, {
          theme: e,
          children: [
            (0, a.jsx)(g.EmptyStateImage, {
              darkSrc: L,
              lightSrc: L,
              width: 106,
              height: 100,
              style: { marginBottom: 10 },
            }),
            (0, a.jsx)(g.EmptyStateText, {
              note: _.default.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
              noteClassName: y.emptyText,
              className: y.emptyTitle,
              children: _.default.Messages.POLL_VOTES_NO_RESULTS_TITLE,
            }),
          ],
        });
      }
      function w(e) {
        var t;
        let {
            emoji: n,
            emojiSize: l,
            imageClassNames: s,
            textClassNames: r,
          } = e,
          i =
            null == n.id
              ? v.default.getURL(n.name)
              : j.default.getEmojiURL({
                  id: n.id,
                  animated: null !== (t = n.animated) && void 0 !== t && t,
                  size: l,
                });
        return null != i && "" !== i
          ? (0, a.jsx)("img", { className: s, src: i, alt: n.name })
          : (0, a.jsx)("span", { className: r, children: n.name });
      }
      function b(e) {
        let { answer: t, count: n, isSelected: s, setSelected: i } = e,
          { emoji: u, text: d } = t.poll_media,
          c = l.useCallback(() => i(String(t.answer_id)), [i, t.answer_id]),
          m = _.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
            numVotes: n,
            option: d,
          });
        return (0, a.jsxs)(o.Clickable, {
          className: r({ [y.voteDefault]: !s, [y.voteSelected]: s }),
          "aria-label": m,
          onClick: c,
          children: [
            null != u
              ? (0, a.jsx)(w, {
                  emoji: u,
                  emojiSize: 16,
                  imageClassNames: y.emoji,
                  textClassNames: r(y.emoji, y.emojiText),
                  "aria-hidden": !0,
                })
              : null,
            (0, a.jsx)(o.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              lineClamp: 1,
              children: (0, a.jsx)(p.default, {
                position: "left",
                "aria-hidden": !0,
                children: d,
              }),
            }),
            (0, a.jsxs)(o.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              className: y.voteCount,
              children: ["(", n, ")"],
            }),
          ],
        });
      }
      function A(e) {
        let { user: t, channel: n } = e,
          l = (0, i.useStateFromStores)(
            [x.default],
            () => x.default.getUser(t.id),
            [t]
          ),
          s = C.default.useName(n.guild_id, n.id, t);
        return (0, a.jsxs)("div", {
          className: y.voterDefault,
          onContextMenu: e => (0, M.openUserContextMenu)(e, t, n),
          children: [
            (0, a.jsx)("div", {
              className: y.voterAvatarContainer,
              children: (0, a.jsx)(d.default, {
                user: null != l ? l : t,
                size: o.AvatarSizes.SIZE_24,
                "aria-hidden": !0,
              }),
            }),
            (0, a.jsxs)(o.Text, {
              tag: "span",
              variant: "text-md/normal",
              className: y.name,
              "aria-label": s,
              children: [
                (0, a.jsx)("span", {
                  className: t.isPomelo() ? "" : y.nickname,
                  children: s,
                }),
                (0, a.jsx)(u.default, {
                  user: t,
                  className: y.tagFaded,
                  usernameClass: y.username,
                  discriminatorClass: y.discriminator,
                  forceUsername: !0,
                }),
              ],
            }),
          ],
        });
      }
      function O(e) {
        let { message: t, reaction: n, channel: s } = e,
          { reactors: r, hasMore: i } = (0, E.default)({
            channelId: s.id,
            messageId: t.id,
            reaction: n,
          }),
          u = l.useRef(null),
          d = l.useRef(null),
          [c, m] = l.useState(!1),
          h = l.useCallback(async () => {
            let e = d.current;
            m(!0);
            let a = await f.getReactors({
              channelId: s.id,
              messageId: t.id,
              emoji: n.emoji,
              limit: N.DEFAULT_NUM_REACTION_USERS,
              after: e,
              type: I,
            });
            (d.current = a[a.length - 1].id), m(!1);
          }, [s.id, t.id, n.emoji]);
        l.useEffect(() => {
          h();
        }, []);
        let x = l.useCallback(() => {
            let { current: e } = u;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 &&
              i &&
              c &&
              h();
          }, [u, i, c, h]),
          g = l.useCallback(
            (e, t) => {
              if (1 === e) return 0 === t ? 40 : 0;
              if (0 === e) {
                if (0 === t && 0 === r.length) return 440;
                if (null != r[t]) return 40;
              }
              return 0;
            },
            [r]
          ),
          p = l.useCallback(
            e => {
              let { section: t, row: n } = e,
                l = r[n];
              if (1 === t)
                return 0 === n
                  ? (0, a.jsx)(
                      o.Spinner,
                      { className: y.spinnerMore },
                      "hasMore"
                    )
                  : null;
              return 0 === r.length && c
                ? (0, a.jsx)(o.Spinner, { className: y.spinner }, "loadingMore")
                : null != l && (0, a.jsx)(A, { channel: s, user: l }, l.id);
            },
            [s, c, r]
          ),
          j = l.useMemo(() => {
            let e = [];
            return (
              0 === r.length && c
                ? e.push(0)
                : (e.push(r.length), i && e.push(1)),
              e
            );
          }, [i, c, r.length]);
        return (0, a.jsx)("div", {
          className: y.votersListContainer,
          children: (0, a.jsx)(o.List, {
            className: y.voters,
            fade: !0,
            ref: u,
            sections: j,
            sectionHeight: 0,
            rowHeight: g,
            renderRow: p,
            onScroll: i ? x : void 0,
          }),
        });
      }
      function U(e) {
        let {
            message: t,
            initialAnswerId: n,
            onClose: s,
            transitionState: r,
          } = e,
          u = (0, i.useStateFromStores)([h.default], () =>
            h.default.getChannel(t.getChannelId())
          ),
          [d, c] = l.useState(n),
          m = l.useMemo(() => {
            if (null != t.reactions)
              return (0, T.reactionForId)(t.reactions, d);
          }, [t.reactions, d]),
          f = l.useMemo(() => (0, S.getTotalVotes)(t.reactions), [t.reactions]),
          x = l.useMemo(
            () =>
              (function (e) {
                let t = {};
                for (let l of e) {
                  var n, a;
                  let e =
                      null !==
                        (a =
                          null === (n = l.count_details) || void 0 === n
                            ? void 0
                            : n.vote) && void 0 !== a
                        ? a
                        : 0,
                    s = l.emoji.id;
                  null != s && (t[s] = e);
                }
                return t;
              })(t.reactions),
            [t.reactions]
          ),
          g = x[d];
        if (null == u)
          throw Error(
            "PollVotesModal.render: Message does not have a channelId"
          );
        if (null == t.poll)
          throw Error("PollVotesModal.render: Message does not have a poll");
        return (0, a.jsxs)(o.ModalRoot, {
          "aria-label": _.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
          transitionState: r,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              className: y.header,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-md/semibold",
                      className: y.question,
                      children: t.poll.question.text,
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-normal",
                      children: _.default.Messages.POLL_VOTES_COUNT.format({
                        count: String(f),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(o.ModalCloseButton, {
                  onClick: s,
                  className: y.close,
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: y.content,
              children: [
                (0, a.jsx)(o.Scroller, {
                  className: y.scroller,
                  fade: !0,
                  children: t.poll.answers.map(e => {
                    var t;
                    let n = e.answer_id,
                      l = d === String(n),
                      s = null !== (t = x[n]) && void 0 !== t ? t : 0;
                    return (0, a.jsx)(
                      b,
                      { isSelected: l, setSelected: c, answer: e, count: s },
                      n
                    );
                  }),
                }),
                null != m && g > 0
                  ? (0, a.jsx)(O, { message: t, reaction: m, channel: u })
                  : (0, a.jsx)(R, {}),
              ],
            }),
          ],
        });
      }
    },
    941886: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EmptyStateImage: function () {
            return p;
          },
          EmptyStateText: function () {
            return j;
          },
          default: function () {
            return l;
          },
        });
      var a,
        l,
        s = n("37983"),
        r = n("884691"),
        i = n("414456"),
        o = n.n(i),
        u = n("819855"),
        d = n("77078"),
        c = n("145131"),
        m = n("49111"),
        f = n("177914"),
        h = n("890957");
      let { Provider: x, Consumer: g } = r.createContext(m.ThemeTypes.DARK);
      class p extends r.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: t,
            width: n,
            height: a,
            offsetX: l,
            offsetY: r,
            style: i,
          } = this.props;
          return (0, s.jsx)(g, {
            children: d =>
              (0, s.jsx)(c.default.Child, {
                grow: 0,
                className: o(f.image, h.marginBottom40),
                style: {
                  ...i,
                  width: n,
                  height: a,
                  marginLeft: l,
                  marginTop: r,
                  backgroundImage: "url(".concat(
                    (0, u.isThemeDark)(d) ? t : e,
                    ")"
                  ),
                },
              }),
          });
        }
      }
      let j = e => {
        let {
          children: t,
          className: n,
          noteClassName: a,
          note: l,
          style: r,
        } = e;
        return (0, s.jsxs)(c.default.Child, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          style: r,
          children: [
            null != t &&
              (0, s.jsx)(d.H, { className: o(n, f.title), children: t }),
            null != l
              ? (0, s.jsx)("div", {
                  className: o(a, f.text, h.marginTop8),
                  children: l,
                })
              : null,
          ],
        });
      };
      ((a = class extends r.PureComponent {
        render() {
          let { children: e, theme: t, className: n, style: a } = this.props;
          return (0, s.jsx)(x, {
            value: t,
            children: (0, s.jsx)(c.default, {
              direction: c.default.Direction.VERTICAL,
              align: c.default.Align.CENTER,
              justify: c.default.Justify.CENTER,
              className: o(f.wrapper, n),
              style: a,
              children: e,
            }),
          });
        }
      }).Text = j),
        (a.Image = p),
        (l = a);
    },
    441823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openUserContextMenu: function () {
            return s;
          },
          openModerateUserContextMenu: function () {
            return r;
          },
          openModerateRoleContextMenu: function () {
            return i;
          },
          openModerationRaidContextMenu: function () {
            return o;
          },
        }),
        n("70102");
      var a = n("37983");
      n("884691");
      var l = n("272030");
      function s(e, t, s) {
        s.isGroupDM()
          ? (0, l.openContextMenuLazy)(e, async () => {
              let { default: e } = await n
                .el("166452")
                .then(n.bind(n, "166452"));
              return n => (0, a.jsx)(e, { ...n, user: t, channel: s });
            })
          : s.isDM()
            ? (0, l.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("130074")
                  .then(n.bind(n, "130074"));
                return n =>
                  (0, a.jsx)(e, {
                    ...n,
                    user: t,
                    channel: s,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != s.guild_id
              ? (0, l.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("834247")
                    .then(n.bind(n, "834247"));
                  return n =>
                    (0, a.jsx)(e, {
                      ...n,
                      user: t,
                      channel: s,
                      guildId: s.guild_id,
                    });
                })
              : (0, l.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("406784")
                    .then(n.bind(n, "406784"));
                  return n => (0, a.jsx)(e, { ...n, user: t });
                });
      }
      function r(e, t) {
        let { user: s, channel: r, moderationAlertId: i, guildId: o, ...u } = t;
        if (
          (null == r ? void 0 : r.isGroupDM()) ||
          (null == r ? void 0 : r.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != o ? o : null == r ? void 0 : r.getGuildId();
        null != d &&
          (0, l.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("467940").then(n.bind(n, "467940"));
            return t =>
              (0, a.jsx)(e, {
                ...t,
                user: s,
                channelId: null == r ? void 0 : r.id,
                guildId: d,
                moderationAlertId: i,
                ...u,
              });
          });
      }
      function i(e, t) {
        let {
          user: s,
          guildId: r,
          analyticsLocations: i,
          onCloseContextMenu: o,
        } = t;
        (0, l.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("522651").then(n.bind(n, "522651"));
          return t =>
            (0, a.jsx)(e, {
              ...t,
              user: s,
              guildId: r,
              analyticsLocations: i,
              onCloseContextMenu: o,
            });
        });
      }
      function o(e, t, s) {
        null != s &&
          (0, l.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("701587").then(n.bind(n, "701587"));
            return t => (0, a.jsx)(e, { ...t, guildId: s });
          });
      }
    },
  },
]);
//# sourceMappingURL=c0b5a1129707694cd057.js.map

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
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        r = n("390236"),
        i = a.memo(function (e) {
          var t, n, i, o;
          let {
              user: u,
              size: d = s.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": m = !1,
              ...f
            } = e,
            x = a.useContext(r.default);
          return (0, l.jsx)(s.Avatar, {
            src:
              ((t = u),
              (n = (0, s.getAvatarSize)(d)),
              (i = c),
              (o = x),
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
      var l = n("714617"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        i = n("446674"),
        o = n("875978"),
        u = n("486996"),
        d = n("49111");
      function c(e) {
        var t, n;
        let { channelId: l, messageId: s, reaction: c } = e,
          m = (0, i.useStateFromStores)(
            [u.default],
            () => {
              let e = u.default.getReactions(
                l,
                s,
                c.emoji,
                d.DEFAULT_NUM_REACTION_USERS,
                o.ReactionTypes.VOTE
              );
              return r.map(e, e => e);
            },
            [l, s, c.emoji],
            a
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
            return O;
          },
        }),
        n("222007"),
        n("424973"),
        n("860677"),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        i = n("446674"),
        o = n("77078"),
        u = n("145079"),
        d = n("87657"),
        c = n("841098"),
        m = n("875978"),
        f = n("166257"),
        x = n("42203"),
        h = n("697218"),
        g = n("941886"),
        p = n("315102"),
        j = n("402671"),
        M = n("387111"),
        v = n("441823"),
        C = n("562228"),
        S = n("905206"),
        T = n("446341"),
        E = n("49111"),
        N = n("782340"),
        _ = n("595406"),
        L = n("401033");
      let y = m.ReactionTypes.VOTE;
      function I() {
        let e = (0, c.default)();
        return (0, l.jsxs)(g.default, {
          theme: e,
          children: [
            (0, l.jsx)(g.EmptyStateImage, {
              darkSrc: L,
              lightSrc: L,
              width: 106,
              height: 100,
              style: { marginBottom: 10 },
            }),
            (0, l.jsx)(g.EmptyStateText, {
              note: N.default.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
              noteClassName: _.emptyText,
              className: _.emptyTitle,
              children: N.default.Messages.POLL_VOTES_NO_RESULTS_TITLE,
            }),
          ],
        });
      }
      function R(e) {
        var t;
        let {
            emoji: n,
            emojiSize: a,
            imageClassNames: s,
            textClassNames: r,
          } = e,
          i =
            null == n.id
              ? j.default.getURL(n.name)
              : p.default.getEmojiURL({
                  id: n.id,
                  animated: null !== (t = n.animated) && void 0 !== t && t,
                  size: a,
                });
        return null != i && "" !== i
          ? (0, l.jsx)("img", { className: s, src: i, alt: n.name })
          : (0, l.jsx)("span", { className: r, children: n.name });
      }
      function w(e) {
        let { answer: t, count: n, isSelected: s, setSelected: i } = e,
          { emoji: u, text: d } = t.poll_media,
          c = a.useCallback(() => i(String(t.answer_id)), [i, t.answer_id]),
          m = N.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
            numVotes: n,
            option: d,
          });
        return (0, l.jsx)(o.Tooltip, {
          position: "left",
          text: d,
          children: e => {
            let { onMouseEnter: t, onMouseLeave: a } = e;
            return (0, l.jsxs)(o.Clickable, {
              className: r({ [_.voteDefault]: !s, [_.voteSelected]: s }),
              "aria-label": m,
              onClick: c,
              onMouseEnter: t,
              onMouseLeave: a,
              children: [
                null != u
                  ? (0, l.jsx)(R, {
                      emoji: u,
                      emojiSize: 16,
                      imageClassNames: _.emoji,
                      textClassNames: r(_.emoji, _.emojiText),
                      "aria-hidden": !0,
                    })
                  : null,
                null != d
                  ? (0, l.jsx)(o.Text, {
                      variant: "text-sm/semibold",
                      color: "text-secondary",
                      lineClamp: 1,
                      children: d,
                    })
                  : null,
                (0, l.jsxs)(o.Text, {
                  variant: "text-sm/semibold",
                  color: "text-secondary",
                  className: _.voteCount,
                  children: ["(", n, ")"],
                }),
              ],
            });
          },
        });
      }
      function b(e) {
        let { user: t, channel: n } = e,
          a = (0, i.useStateFromStores)(
            [h.default],
            () => h.default.getUser(t.id),
            [t]
          ),
          s = M.default.useName(n.guild_id, n.id, t);
        return (0, l.jsxs)("div", {
          className: _.voterDefault,
          onContextMenu: e => (0, v.openUserContextMenu)(e, t, n),
          children: [
            (0, l.jsx)("div", {
              className: _.voterAvatarContainer,
              children: (0, l.jsx)(d.default, {
                user: null != a ? a : t,
                size: o.AvatarSizes.SIZE_24,
                "aria-hidden": !0,
              }),
            }),
            (0, l.jsxs)(o.Text, {
              tag: "span",
              variant: "text-md/normal",
              className: _.name,
              "aria-label": s,
              children: [
                (0, l.jsx)("span", {
                  className: t.isPomelo() ? "" : _.nickname,
                  children: s,
                }),
                (0, l.jsx)(u.default, {
                  user: t,
                  className: _.tagFaded,
                  usernameClass: _.username,
                  discriminatorClass: _.discriminator,
                  forceUsername: !0,
                }),
              ],
            }),
          ],
        });
      }
      function A(e) {
        let { message: t, reaction: n, channel: s } = e,
          { reactors: r, hasMore: i } = (0, T.default)({
            channelId: s.id,
            messageId: t.id,
            reaction: n,
          }),
          u = a.useRef(null),
          d = a.useRef(null),
          [c, m] = a.useState(!1),
          x = a.useCallback(async () => {
            let e = d.current;
            m(!0);
            let l = await f.getReactors({
              channelId: s.id,
              messageId: t.id,
              emoji: n.emoji,
              limit: E.DEFAULT_NUM_REACTION_USERS,
              after: e,
              type: y,
            });
            (d.current = l[l.length - 1].id), m(!1);
          }, [s.id, t.id, n.emoji]);
        a.useEffect(() => {
          x();
        }, []);
        let h = a.useCallback(() => {
            let { current: e } = u;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 &&
              i &&
              c &&
              x();
          }, [u, i, c, x]),
          g = a.useCallback(
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
          p = a.useCallback(
            e => {
              let { section: t, row: n } = e,
                a = r[n];
              if (1 === t)
                return 0 === n
                  ? (0, l.jsx)(
                      o.Spinner,
                      { className: _.spinnerMore },
                      "hasMore"
                    )
                  : null;
              return 0 === r.length && c
                ? (0, l.jsx)(o.Spinner, { className: _.spinner }, "loadingMore")
                : null != a && (0, l.jsx)(b, { channel: s, user: a }, a.id);
            },
            [s, c, r]
          ),
          j = a.useMemo(() => {
            let e = [];
            return (
              0 === r.length && c
                ? e.push(0)
                : (e.push(r.length), i && e.push(1)),
              e
            );
          }, [i, c, r.length]);
        return (0, l.jsx)("div", {
          className: _.votersListContainer,
          children: (0, l.jsx)(o.List, {
            className: _.voters,
            fade: !0,
            ref: u,
            sections: j,
            sectionHeight: 0,
            rowHeight: g,
            renderRow: p,
            onScroll: i ? h : void 0,
          }),
        });
      }
      function O(e) {
        let {
            message: t,
            initialAnswerId: n,
            onClose: s,
            transitionState: r,
          } = e,
          u = (0, i.useStateFromStores)([x.default], () =>
            x.default.getChannel(t.getChannelId())
          ),
          [d, c] = a.useState(n),
          m = a.useMemo(() => {
            if (null != t.reactions)
              return (0, S.reactionForId)(t.reactions, d);
          }, [t.reactions, d]),
          f = a.useMemo(() => (0, C.getTotalVotes)(t.reactions), [t.reactions]),
          h = a.useMemo(
            () =>
              (function (e) {
                let t = {};
                for (let a of e) {
                  var n, l;
                  let e =
                      null !==
                        (l =
                          null === (n = a.count_details) || void 0 === n
                            ? void 0
                            : n.vote) && void 0 !== l
                        ? l
                        : 0,
                    s = a.emoji.id;
                  null != s && (t[s] = e);
                }
                return t;
              })(t.reactions),
            [t.reactions]
          ),
          g = h[d];
        if (
          (a.useEffect(() => {
            null == d && null == m && setImmediate(s);
          }, [s, m, d]),
          null == d || null == m)
        )
          return (0, l.jsx)(o.Spinner, {});
        if (null == u)
          throw Error(
            "PollVotesModal.render: Message does not have a channelId"
          );
        if (null == t.poll)
          throw Error("PollVotesModal.render: Message does not have a poll");
        return (0, l.jsxs)(o.ModalRoot, {
          "aria-label": N.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
          transitionState: r,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: _.header,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-md/semibold",
                      className: _.question,
                      children: t.poll.question.text,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-normal",
                      children: N.default.Messages.POLL_VOTES_COUNT.format({
                        count: String(f),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(o.ModalCloseButton, {
                  onClick: s,
                  className: _.close,
                }),
              ],
            }),
            (0, l.jsxs)(o.ModalContent, {
              className: _.content,
              children: [
                (0, l.jsx)(o.Scroller, {
                  className: _.scroller,
                  fade: !0,
                  children: t.poll.answers.map(e => {
                    let t = e.answer_id,
                      n = d === String(t),
                      a = h[t];
                    return (0, l.jsx)(
                      w,
                      { isSelected: n, setSelected: c, answer: e, count: a },
                      t
                    );
                  }),
                }),
                null != m && g > 0
                  ? (0, l.jsx)(A, { message: t, reaction: m, channel: u })
                  : (0, l.jsx)(I, {}),
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
            return a;
          },
        });
      var l,
        a,
        s = n("37983"),
        r = n("884691"),
        i = n("414456"),
        o = n.n(i),
        u = n("819855"),
        d = n("77078"),
        c = n("145131"),
        m = n("49111"),
        f = n("177914"),
        x = n("890957");
      let { Provider: h, Consumer: g } = r.createContext(m.ThemeTypes.DARK);
      class p extends r.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: t,
            width: n,
            height: l,
            offsetX: a,
            offsetY: r,
            style: i,
          } = this.props;
          return (0, s.jsx)(g, {
            children: d =>
              (0, s.jsx)(c.default.Child, {
                grow: 0,
                className: o(f.image, x.marginBottom40),
                style: {
                  ...i,
                  width: n,
                  height: l,
                  marginLeft: a,
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
          noteClassName: l,
          note: a,
          style: r,
        } = e;
        return (0, s.jsxs)(c.default.Child, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          style: r,
          children: [
            null != t &&
              (0, s.jsx)(d.H, { className: o(n, f.title), children: t }),
            null != a
              ? (0, s.jsx)("div", {
                  className: o(l, f.text, x.marginTop8),
                  children: a,
                })
              : null,
          ],
        });
      };
      ((l = class extends r.PureComponent {
        render() {
          let { children: e, theme: t, className: n, style: l } = this.props;
          return (0, s.jsx)(h, {
            value: t,
            children: (0, s.jsx)(c.default, {
              direction: c.default.Direction.VERTICAL,
              align: c.default.Align.CENTER,
              justify: c.default.Justify.CENTER,
              className: o(f.wrapper, n),
              style: l,
              children: e,
            }),
          });
        }
      }).Text = j),
        (l.Image = p),
        (a = l);
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
      var l = n("37983");
      n("884691");
      var a = n("272030");
      function s(e, t, s) {
        s.isGroupDM()
          ? (0, a.openContextMenuLazy)(e, async () => {
              let { default: e } = await n
                .el("166452")
                .then(n.bind(n, "166452"));
              return n => (0, l.jsx)(e, { ...n, user: t, channel: s });
            })
          : s.isDM()
            ? (0, a.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("130074")
                  .then(n.bind(n, "130074"));
                return n =>
                  (0, l.jsx)(e, {
                    ...n,
                    user: t,
                    channel: s,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != s.guild_id
              ? (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("834247")
                    .then(n.bind(n, "834247"));
                  return n =>
                    (0, l.jsx)(e, {
                      ...n,
                      user: t,
                      channel: s,
                      guildId: s.guild_id,
                    });
                })
              : (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("406784")
                    .then(n.bind(n, "406784"));
                  return n => (0, l.jsx)(e, { ...n, user: t });
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
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("467940").then(n.bind(n, "467940"));
            return t =>
              (0, l.jsx)(e, {
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
        (0, a.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("522651").then(n.bind(n, "522651"));
          return t =>
            (0, l.jsx)(e, {
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
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("701587").then(n.bind(n, "701587"));
            return t => (0, l.jsx)(e, { ...t, guildId: s });
          });
      }
    },
  },
]);
//# sourceMappingURL=4d3cb2d607b0b24b4077.js.map

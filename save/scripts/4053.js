(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4053"],
  {
    582139: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("414456"),
        r = l.n(a),
        u = l("446674"),
        o = l("77078"),
        i = l("636974"),
        c = l("137223"),
        d = l("123225"),
        p = l("843962"),
        m = l("656038"),
        A = l("679653"),
        T = l("497753"),
        h = l("593195"),
        f = l("361777"),
        E = l("497757"),
        I = l("659500"),
        C = l("49111"),
        N = l("782340"),
        _ = l("229971"),
        y = l("890957");
      let v = e => {
          let { channel: t, categoryName: l, guildName: n } = e,
            a = h.default;
          return (
            (0, m.default)(t) ? (a = f.default) : t.isNSFW() && (a = E.default),
            (0, s.jsxs)("div", {
              className: _.result,
              children: [
                (0, s.jsx)(a, {
                  className: _.resultIcon,
                  background: _.resultIconBackground,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsxs)("div", {
                  className: _.resultText,
                  children: [
                    (0, s.jsx)("span", { children: t.name }),
                    (0, s.jsx)("span", {
                      className: _.resultCategoryName,
                      children: l,
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: _.resultGuildName,
                  children: n,
                }),
              ],
            })
          );
        },
        R = e => {
          let { channel: t } = e,
            l = (0, A.default)(t);
          return (0, s.jsxs)("div", {
            className: _.result,
            children: [
              (0, s.jsx)(o.Avatar, {
                src: (0, p.getChannelIconURL)(t),
                "aria-label": null != l ? l : "",
                className: _.resultAvatar,
                size: o.AvatarSizes.SIZE_32,
              }),
              (0, s.jsx)("div", { className: _.resultText, children: l }),
            ],
          });
        },
        g = e => {
          let t,
            { user: l, comparator: n, status: a } = e;
          if (null != n && n === l.tag) {
            let e = n.split("#");
            e.pop(), (t = e.join("#"));
          } else t = null != n && "" !== n ? n : l.username;
          return (0, s.jsxs)("div", {
            className: _.result,
            children: [
              (0, s.jsx)(o.Avatar, {
                src: l.getAvatarURL(void 0, 32),
                "aria-label": l.username,
                className: _.resultAvatar,
                size: o.AvatarSizes.SIZE_32,
                status: a,
              }),
              (0, s.jsxs)("div", {
                className: _.resultText,
                children: [
                  (0, s.jsx)("span", { children: t }),
                  (0, s.jsx)("span", {
                    className: _.resultUsername,
                    children: l.tag,
                  }),
                ],
              }),
            ],
          });
        };
      class L extends n.Component {
        render() {
          let e, t;
          let { result: l, selected: n, sending: a } = this.props;
          switch (l.type) {
            case d.AutocompleterResultTypes.GROUP_DM:
              e = (0, s.jsx)(R, { channel: l.data.record });
              break;
            case d.AutocompleterResultTypes.TEXT_CHANNEL: {
              let { categoryName: t, guildName: n } = l;
              e = (0, s.jsx)(v, {
                channel: l.data.record,
                categoryName: t,
                guildName: n,
              });
              break;
            }
            case d.AutocompleterResultTypes.USER: {
              let {
                data: { comparator: t, record: n },
                status: a,
              } = l;
              e = (0, s.jsx)(g, { comparator: t, user: n, status: a });
            }
          }
          return (
            (t = l.sent
              ? (0, s.jsx)(o.Button, {
                  className: _.inviteButton,
                  look: o.Button.Looks.LINK,
                  size: o.Button.Sizes.SMALL,
                  disabled: !0,
                  color: o.Button.Colors.WHITE,
                  children: N.default.Messages.ACTIVITY_INVITE_MODAL_SENT,
                })
              : (0, s.jsx)(o.Button, {
                  color: o.Button.Colors.GREEN,
                  look: n ? o.Button.Looks.FILLED : o.Button.Looks.OUTLINED,
                  className: _.inviteButton,
                  size: o.Button.Sizes.SMALL,
                  submitting: a,
                  onClick: this.handleClick,
                  children: N.default.Messages.ACTIVITY_INVITE_MODAL_INVITE,
                })),
            (0, s.jsxs)("div", {
              className: r(_.resultWrapper, { [_.resultWrapperSelected]: n }),
              onMouseEnter: this.handleMouseEnter,
              children: [e, t],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.handleClick = () => {
              let { onInvite: e, row: t } = this.props;
              e(t);
            }),
            (this.handleMouseEnter = () => {
              let { onMouseEnter: e, row: t } = this.props;
              e(t);
            });
        }
      }
      function S(e) {
        let { transitionState: t, onClose: l } = e,
          {
            results: a,
            query: r,
            activity: p,
          } = (0, u.useStateFromStoresObject)(
            [T.default],
            () => ({
              results: T.default.getResults(),
              query: T.default.getQuery(),
              activity: T.default.getActivity(),
            }),
            []
          ),
          [m, A] = n.useState(r),
          [h, f] = n.useState(0),
          [E, v] = n.useState([]),
          [R, g] = n.useState(!1),
          S = n.useRef(null),
          M = n.useCallback(() => {
            var e;
            null === (e = S.current) ||
              void 0 === e ||
              e.scrollPageUp({ animate: !0 });
          }, [S]),
          x = n.useCallback(() => {
            var e;
            null === (e = S.current) ||
              void 0 === e ||
              e.scrollPageDown({ animate: !0 });
          }, [S]);
        n.useEffect(
          () => (
            I.ComponentDispatch.subscribe(C.ComponentActions.SCROLL_PAGE_UP, M),
            () => {
              I.ComponentDispatch.unsubscribe(
                C.ComponentActions.SCROLL_PAGE_UP,
                M
              );
            }
          ),
          [M]
        ),
          n.useEffect(
            () => (
              I.ComponentDispatch.subscribe(
                C.ComponentActions.SCROLL_PAGE_DOWN,
                x
              ),
              () => {
                I.ComponentDispatch.unsubscribe(
                  C.ComponentActions.SCROLL_PAGE_DOWN,
                  x
                );
              }
            ),
            [x]
          ),
          n.useEffect(() => {
            null == p && l();
          }, [l, p]),
          n.useEffect(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollToTop(), f(0);
          }, [S, a]);
        let D = n.useCallback(
            e => {
              let {
                data: t,
                data: {
                  record: { id: l },
                },
              } = a[e];
              if (!(null == l || E.includes(l)))
                switch ((v([...E, l]), t.type)) {
                  case d.AutocompleterResultTypes.GROUP_DM:
                  case d.AutocompleterResultTypes.TEXT_CHANNEL:
                    (0, i.inviteChannel)(t.record.id);
                    break;
                  case d.AutocompleterResultTypes.USER:
                    (0, i.inviteUser)(t.record.id);
                }
            },
            [a, E]
          ),
          O = n.useCallback(
            e => {
              f(e);
            },
            [f]
          ),
          j = () => {
            U("");
          },
          U = e => {
            A(e), (0, i.updateQuery)(e);
          };
        return null == p
          ? null
          : (0, s.jsxs)(o.ModalRoot, {
              transitionState: t,
              size: o.ModalSize.SMALL,
              "aria-label":
                N.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                  name: p.name,
                }),
              children: [
                (0, s.jsxs)(o.ModalHeader, {
                  separator: R,
                  children: [
                    (0, s.jsx)(o.ModalCloseButton, {
                      className: _.closeButton,
                      onClick: l,
                    }),
                    (0, s.jsxs)("div", {
                      className: _.header,
                      children: [
                        (0, s.jsx)(o.FormTitle, {
                          tag: "h2",
                          className: y.marginBottom8,
                          children:
                            N.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format(
                              { name: p.name }
                            ),
                        }),
                        (0, s.jsx)(c.default, {
                          size: c.default.Sizes.MEDIUM,
                          query: m,
                          selectedSection: 0,
                          selectedRow: h,
                          sections: [a.length],
                          className: y.marginTop4,
                          onSelect: (e, t) => {
                            null == t ? j() : D(t);
                          },
                          onSelectionChange: (e, t) => {
                            var l;
                            f(t),
                              null === (l = S.current) ||
                                void 0 === l ||
                                l.scrollIntoViewRect({
                                  start: 44 * t,
                                  end: 44 * t + 44,
                                });
                          },
                          onQueryChange: U,
                          placeholder:
                            N.default.Messages
                              .ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,
                          autoFocus: !0,
                          onClear: j,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(o.ModalListContent, {
                  scrollerRef: S,
                  className: 0 === a.length ? _.noResults : _.results,
                  paddingBottom: 8,
                  sections: [a.length],
                  sectionHeight: 0,
                  renderSection: C.NOOP_NULL,
                  rowHeight: (e, t) => (e > 0 ? 0 : null != a[t] ? 44 : 0),
                  renderRow: e => {
                    let { section: t, row: l } = e;
                    if (t > 0) return null;
                    let n = a[l];
                    return null == n
                      ? null
                      : (0, s.jsx)(
                          L,
                          {
                            row: l,
                            result: n,
                            sending:
                              null != n.data.record.id &&
                              E.includes(n.data.record.id),
                            selected: l === h,
                            onMouseEnter: O,
                            onInvite: D,
                          },
                          n.data.record.id
                        );
                  },
                  onScroll: e => {
                    let t = e.currentTarget.scrollTop > 0;
                    R !== t && g(t);
                  },
                }),
              ],
            });
      }
    },
    497753: function (e, t, l) {
      "use strict";
      let s;
      l.r(t),
        l.d(t, {
          default: function () {
            return L;
          },
        }),
        l("222007"),
        l("424973"),
        l("70102");
      var n = l("446674"),
        a = l("913144"),
        r = l("260365"),
        u = l("123225"),
        o = l("679653"),
        i = l("42203"),
        c = l("305961"),
        d = l("52028"),
        p = l("824563"),
        m = l("27618"),
        A = l("697218"),
        T = l("287850"),
        h = l("49111");
      let f = [
          u.AutocompleterResultTypes.TEXT_CHANNEL,
          u.AutocompleterResultTypes.GROUP_DM,
          u.AutocompleterResultTypes.USER,
        ],
        E = null,
        I = null,
        C = [],
        N = [];
      function _(e) {
        (C = [...C, e]),
          (N = N.map(e => ({ ...e, sent: C.includes(e.data.record.id) }))),
          g.emitChange();
      }
      function y() {
        (E = null), null != s && (s.destroy(), (s = null)), null != I && I();
      }
      function v() {
        let e =
          null != E && null != E.application_id
            ? d.default.getApplicationActivity(E.application_id)
            : null;
        if (null != E && (null == e || null == e.party || null == e.party.id))
          return y();
      }
      class R extends n.default.Store {
        initialize() {
          this.waitFor(d.default);
        }
        getActivity() {
          return E;
        }
        getQuery() {
          var e;
          return null !== (e = null == s ? void 0 : s.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return N;
        }
      }
      R.displayName = "ActivityInviteModalStore";
      let g = new R(a.default, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (E = e.activity),
            (I = e.resolve),
            (C = []),
            null == s &&
              (s = new u.default(
                (e, t) => {
                  var l;
                  return (
                    (l = e),
                    void ((N = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              T.default.getPrivateChannelIds().forEach(t => {
                                let l = i.default.getChannel(t);
                                if (null != l) {
                                  if (l.type === h.ChannelTypes.DM) {
                                    let t = l.getRecipientId(),
                                      s =
                                        null != t ? A.default.getUser(t) : null;
                                    null != s &&
                                      e.push({
                                        type: u.AutocompleterResultTypes.USER,
                                        record: s,
                                        score: 0,
                                      });
                                  } else
                                    l.isMultiUserDM() &&
                                      e.push({
                                        type: u.AutocompleterResultTypes
                                          .GROUP_DM,
                                        record: l,
                                        score: 0,
                                      });
                                }
                              }),
                              e
                            );
                          })()
                        : l
                    ).map(e => {
                      switch (e.type) {
                        case u.AutocompleterResultTypes.USER: {
                          let { record: t } = e;
                          return {
                            type: u.AutocompleterResultTypes.USER,
                            sent: C.includes(t.id),
                            status: p.default.getStatus(t.id),
                            data: e,
                          };
                        }
                        case u.AutocompleterResultTypes.TEXT_CHANNEL: {
                          let { record: t } = e,
                            l = i.default.getChannel(t.parent_id),
                            s = c.default.getGuild(t.guild_id);
                          return {
                            type: u.AutocompleterResultTypes.TEXT_CHANNEL,
                            sent: C.includes(t.id),
                            categoryName:
                              null != l
                                ? (0, o.computeChannelName)(
                                    l,
                                    A.default,
                                    m.default
                                  )
                                : "",
                            guildName: null != s ? s.toString() : "",
                            data: e,
                          };
                        }
                        case u.AutocompleterResultTypes.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: u.AutocompleterResultTypes.GROUP_DM,
                            sent: C.includes(t.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    g.emitChange())
                  );
                },
                f,
                100
              )),
            s.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != s && s.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == E) return;
          let t = e.channelId,
            l = e.userId;
          null != t
            ? r.default
                .sendActivityInvite({
                  channelId: t,
                  type: h.ActivityActionTypes.JOIN,
                  activity: E,
                  location: "Channel Text Area - Invite to Join Modal",
                })
                .then(() => _(t))
            : null != l &&
              r.default
                .sendActivityInviteUser({
                  userId: l,
                  type: h.ActivityActionTypes.JOIN,
                  activity: E,
                  location: "Channel Text Area - Invite to Join Modal",
                })
                .then(() => _(l));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: y,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != E && (y(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: v,
        RPC_APP_DISCONNECTED: v,
      });
      var L = g;
    },
  },
]);
//# sourceMappingURL=8e8a422b252c17b3bd02.js.map

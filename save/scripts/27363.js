(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27363"],
  {
    138219: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          usePaginatedMemberApplications: function () {
            return c;
          },
        }),
        s("222007");
      var a = s("884691"),
        l = s("866227"),
        i = s.n(l),
        n = s("448993"),
        r = s("299039"),
        u = s("549103"),
        o = s("567054");
      let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;
      function c(e) {
        let { guildId: t, guildJoinRequests: s } = e,
          l = a.useRef(!1),
          [c, E] = a.useState(null),
          I = a.useRef(null),
          f = a.useRef(!1),
          T = a.useCallback(
            async (e, a) => {
              if (l.current) return;
              let T = "".concat(e, "-").concat(a),
                R = !1;
              if (
                (T !== I.current &&
                  ((I.current = T), (f.current = !1), (R = !0)),
                f.current)
              )
                return;
              null != c && E(null);
              let S = (function (e, t, s, a) {
                let l = s === o.GuildJoinRequestApplicationStatuses.SUBMITTED;
                if (t === o.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                  if (a) {
                    let e = r.default.fromTimestamp(new Date().getTime());
                    return { before: e };
                  }
                  {
                    let t = e[e.length - 1],
                      s = l ? t.id : t.actionedAt;
                    return { before: s };
                  }
                }
                if (a) {
                  let e = r.default.fromTimestamp(
                    i().subtract(180, "days").valueOf()
                  );
                  return { after: e };
                }
                {
                  let t = e[e.length - 1],
                    s = l ? t.id : t.actionedAt;
                  return { after: s };
                }
              })(s, e, a, R);
              try {
                l.current = !0;
                let e = await u.default.fetchGuildJoinRequests({
                  guildId: t,
                  status: a,
                  limit: d,
                  ...S,
                });
                if (null != e) {
                  let { guild_join_requests: t } = e.body;
                  t.length < d && (f.current = !0);
                }
              } catch (t) {
                let e = new n.APIError(t);
                E(e.getAnyErrorMessage());
              } finally {
                l.current = !1;
              }
            },
            [c, t, s]
          );
        return { fetchNextPage: T, error: c };
      }
    },
    722390: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useSelectedApplicationTab: function () {
            return i;
          },
        });
      var a = s("446674"),
        l = s("90490");
      function i(e) {
        let { guildId: t } = e,
          s = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.getSelectedApplicationTab(t),
            [t]
          );
        return s;
      }
    },
    122766: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useSelectedGuildJoinRequest: function () {
            return i;
          },
        });
      var a = s("446674"),
        l = s("90490");
      function i(e) {
        let { guildId: t } = e,
          s = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.getSelectedGuildJoinRequest(t),
            [t]
          );
        return s;
      }
    },
    268027: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useSelectedSortOrder: function () {
            return i;
          },
        });
      var a = s("446674"),
        l = s("90490");
      function i(e) {
        let { guildId: t } = e,
          s = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.getSelectedSortOrder(t),
            [t]
          );
        return s;
      }
    },
    533788: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useSortedMemberApplications: function () {
            return r;
          },
        }),
        s("222007");
      var a = s("884691"),
        l = s("446674"),
        i = s("90490"),
        n = s("567054");
      function r(e) {
        let { guildId: t, applicationStatus: s, sortOrder: r } = e,
          u = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.getRequests(t, s),
            [s, t]
          ),
          o = a.useMemo(
            () =>
              r === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC
                ? [...u].reverse()
                : u,
            [r, u]
          );
        return { guildJoinRequests: o };
      }
    },
    597235: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return R;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        n = s("69927"),
        r = s("766274"),
        u = s("305961"),
        o = s("549103"),
        d = s("50926"),
        c = s("122766"),
        E = s("117370"),
        I = s("276566"),
        f = s("782340"),
        T = s("652059"),
        R = function (e) {
          let { guildId: t } = e,
            s = (0, c.useSelectedGuildJoinRequest)({ guildId: t }),
            { user: R } = null != s ? s : {},
            S = l.useMemo(() => (null != R ? new r.default(R) : null), [R]),
            _ = (0, i.useStateFromStores)(
              [u.default],
              () => u.default.getGuild(t),
              [t]
            );
          return (
            (0, n.usePageTitle)({
              subsection:
                f.default.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
              location: null == _ ? void 0 : _.name,
            }),
            l.useEffect(() => {
              d.default.fetchVerificationForm(t);
            }, [t]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: T.content,
                  children: (0, a.jsx)(E.default, { guildId: t }),
                }),
                null != s &&
                  null != _ &&
                  null != S &&
                  (0, a.jsx)("section", {
                    className: T.sidebar,
                    children: (0, a.jsx)(I.default, {
                      guild: _,
                      guildJoinRequest: s,
                      guildJoinRequestUser: S,
                      onClose: () =>
                        o.default.setSelectedGuildJoinRequest(t, null),
                    }),
                  }),
              ],
            })
          );
        };
    },
    946128: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("77078"),
        n = s("567054"),
        r = s("782340"),
        u = function (e) {
          let { className: t, sortOrder: s, onSortChange: u } = e,
            o = l.useMemo(
              () => [
                {
                  value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
                  label:
                    r.default.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST,
                },
                {
                  value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
                  label:
                    r.default.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST,
                },
              ],
              []
            );
          return (0, a.jsx)(i.SingleSelect, {
            className: t,
            onChange: u,
            value: s,
            options: o,
          });
        };
    },
    117370: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return p;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        n = s("77078"),
        r = s("439979"),
        u = s("305961"),
        o = s("549103"),
        d = s("567054"),
        c = s("138219"),
        E = s("722390"),
        I = s("122766"),
        f = s("268027"),
        T = s("533788"),
        R = s("859130"),
        S = s("946128"),
        _ = s("652469"),
        m = s("255941"),
        N = s("782340"),
        M = s("283518");
      function A(e) {
        let { guildId: t } = e,
          s = l.useRef(null),
          [A, p] = l.useState((0, E.useSelectedApplicationTab)({ guildId: t })),
          h = (0, f.useSelectedSortOrder)({ guildId: t }),
          x = (0, I.useSelectedGuildJoinRequest)({ guildId: t }),
          C = (0, R.useSubmittedGuildJoinRequestTotal)({ guildId: t }),
          { guildJoinRequests: g } = (0, T.useSortedMemberApplications)({
            guildId: t,
            applicationStatus:
              "REVIEW_APPLICATION" === A
                ? d.GuildJoinRequestApplicationStatuses.SUBMITTED
                : A,
            sortOrder: h,
          }),
          { fetchNextPage: P } = (0, c.usePaginatedMemberApplications)({
            guildId: t,
            guildJoinRequests: g,
          }),
          j = l.useRef(!1);
        !j.current &&
          ((j.current = !0),
          P(
            h,
            "REVIEW_APPLICATION" === A
              ? d.GuildJoinRequestApplicationStatuses.SUBMITTED
              : A
          ));
        let G = l.useRef(!1);
        l.useEffect(() => {
          G.current = !0;
        }, [h, A]),
          l.useEffect(() => {
            if (G.current && 0 !== g.length) {
              var e;
              (G.current = !1),
                o.default.setSelectedGuildJoinRequest(t, g[0]),
                null === (e = s.current) || void 0 === e || e.scrollToTop();
            }
          }, [t, g, x]);
        let v = l.useCallback(
            async e => {
              if ("REVIEW_APPLICATION" !== A)
                h !== e &&
                  (o.default.setSelectedSortOrder(t, e), await P(e, A));
            },
            [A, h, t, P]
          ),
          O = l.useCallback(
            async e => {
              if (A !== e)
                p(e),
                  "REVIEW_APPLICATION" !== e &&
                    (o.default.setSelectedApplicationTab(t, e),
                    o.default.setSelectedGuildJoinRequest(t, null),
                    await P(h, e));
            },
            [A, h, t, P]
          ),
          D = l.useCallback(async () => {
            var e;
            if ("REVIEW_APPLICATION" === A) return;
            let t =
              null === (e = s.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null == t) return;
            let a = t.scrollHeight - t.scrollTop - t.offsetHeight;
            a < 200 && (await P(h, A));
          }, [A, h, P]),
          L = (0, i.useStateFromStores)([u.default], () =>
            u.default.getGuild(t)
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(_.default, {
              currentTab: A,
              onTabItemSelect: O,
              pendingGuildJoinRequestsTotal: C,
              showSetupTab: !0,
            }),
            (0, a.jsx)("div", {
              className: M.content,
              children:
                "REVIEW_APPLICATION" === A
                  ? null != L
                    ? (0, a.jsx)(r.default, { guild: L })
                    : null
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", {
                          className: M.listControls,
                          children: (0, a.jsx)(S.default, {
                            className: M.sortSelect,
                            sortOrder: h,
                            onSortChange: v,
                          }),
                        }),
                        (0, a.jsx)(n.Text, {
                          className: M.description,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children:
                            N.default.Messages
                              .GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION,
                        }),
                        (0, a.jsx)(m.default, {
                          applicationStatus: A,
                          guildJoinRequests: g,
                          guildId: t,
                          onScroll: D,
                          listRef: s,
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      var p = l.memo(function (e) {
        let { guildId: t } = e;
        return (0, a.jsx)(A, { guildId: t });
      });
    },
    652469: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("77078"),
        i = s("539938"),
        n = s("922577"),
        r = s("567054"),
        u = s("782340"),
        o = s("421611"),
        d = function (e) {
          let {
            pendingGuildJoinRequestsTotal: t,
            currentTab: s,
            onTabItemSelect: d,
            showSetupTab: c,
          } = e;
          return (0, a.jsxs)(i.default, {
            className: o.container,
            hideSearch: !0,
            toolbar: (0, a.jsx)("div", {}),
            children: [
              (0, a.jsx)(i.default.Icon, {
                icon: n.default,
                disabled: !0,
                "aria-label":
                  u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
              }),
              (0, a.jsx)(i.default.Title, {
                className: o.title,
                children:
                  u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
              }),
              (0, a.jsx)(i.default.Divider, { className: o.divider }),
              (0, a.jsxs)(l.TabBar, {
                "aria-label": u.default.Messages.FRIENDS,
                selectedItem: s,
                type: "top-pill",
                onItemSelect: d,
                className: o.tabBar,
                children: [
                  c
                    ? (0, a.jsx)(l.TabBar.Item, {
                        id: "REVIEW_APPLICATION",
                        children:
                          u.default.Messages
                            .GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE,
                      })
                    : null,
                  (0, a.jsx)(l.TabBar.Item, {
                    id: r.GuildJoinRequestApplicationStatuses.SUBMITTED,
                    children:
                      0 === t
                        ? u.default.Messages
                            .GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING
                        : u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format(
                            { count: t }
                          ),
                  }),
                  (0, a.jsx)(l.TabBar.Item, {
                    id: r.GuildJoinRequestApplicationStatuses.APPROVED,
                    children:
                      u.default.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED,
                  }),
                  (0, a.jsx)(l.TabBar.Item, {
                    id: r.GuildJoinRequestApplicationStatuses.REJECTED,
                    children:
                      u.default.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED,
                  }),
                ],
              }),
            ],
          });
        };
    },
    255941: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        i = s.n(l),
        n = s("974667"),
        r = s("446674"),
        u = s("77078"),
        o = s("302437"),
        d = s("305961"),
        c = s("36694"),
        E = s("128295"),
        I = s("414868"),
        f = s("549103"),
        T = s("90490"),
        R = s("567054"),
        S = s("122766"),
        _ = s("859130"),
        m = s("667793"),
        N = s("782340"),
        M = s("26900");
      let A = () => null;
      function p(e) {
        let { status: t } = e,
          s =
            N.default.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE,
          l =
            N.default.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
        switch (t) {
          case R.GuildJoinRequestApplicationStatuses.REJECTED:
            (s =
              N.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE),
              (l =
                N.default.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY);
            break;
          case R.GuildJoinRequestApplicationStatuses.APPROVED:
            (s =
              N.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE),
              (l =
                N.default.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY);
            break;
          default:
            (s =
              N.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE),
              (l =
                N.default.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY);
        }
        return (0, a.jsxs)("div", {
          className: M.emptyContainer,
          children: [
            (0, a.jsxs)("div", {
              className: M.emptyIcon,
              children: [
                (0, a.jsx)(I.default, { className: M.star }),
                (0, a.jsx)(c.default, { className: M.checkmark }),
                (0, a.jsx)(E.default, { className: M.plus }),
              ],
            }),
            (0, a.jsx)(u.Heading, {
              variant: "heading-xl/semibold",
              children: s,
            }),
            (0, a.jsx)(u.Text, {
              color: "header-secondary",
              className: M.emptyBody,
              variant: "text-sm/normal",
              children: l,
            }),
          ],
        });
      }
      var h = function (e) {
        let {
            applicationStatus: t,
            guildJoinRequests: s,
            guildId: l,
            onScroll: c,
            listRef: E,
          } = e,
          I = (0, r.useStateFromStores)(
            [d.default],
            () => d.default.getGuild(l),
            [l]
          ),
          h = (0, r.useStateFromStores)([T.default], () =>
            T.default.isFetching()
          ),
          x = h ? [s.length + 25] : [s.length],
          C = (0, S.useSelectedGuildJoinRequest)({ guildId: l }),
          g = (0, _.useSubmittedGuildJoinRequestTotal)({ guildId: l }),
          P = (0, o.default)("guild-join-requests"),
          j = e => {
            let { row: n } = e,
              r = s[n];
            return null == r
              ? (0, a.jsx)(m.MemberApplicationsListRowPlaceholder, {}, n)
              : (0, a.jsx)(
                  m.MemberApplicationsListRow,
                  {
                    className: i({
                      [M.selected]: C === r,
                      [M.siblingSelected]: C === s[n - 1],
                    }),
                    guild: I,
                    guildJoinRequest: r,
                    onClick: () => f.default.setSelectedGuildJoinRequest(l, r),
                    applicationStatus: t,
                  },
                  ""
                    .concat(r.userId, "-")
                    .concat(r.applicationStatus, "-")
                    .concat(n)
                );
          };
        return h || 0 !== s.length
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                0 !== g &&
                  t === R.GuildJoinRequestApplicationStatuses.SUBMITTED &&
                  (0, a.jsx)(u.Text, {
                    className: M.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, t) {
                      let s = t.toLocaleString();
                      switch (e) {
                        case R.GuildJoinRequestApplicationStatuses.SUBMITTED:
                          return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format(
                            { count: s }
                          );
                        case R.GuildJoinRequestApplicationStatuses.REJECTED:
                          return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format(
                            { count: s }
                          );
                        case R.GuildJoinRequestApplicationStatuses.APPROVED:
                          return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format(
                            { count: s }
                          );
                        default:
                          return "";
                      }
                    })(t, g).toUpperCase(),
                  }),
                (0, a.jsx)(n.ListNavigatorProvider, {
                  navigator: P,
                  children: (0, a.jsx)(n.ListNavigatorContainer, {
                    children: e => {
                      let { ref: t, role: s, ...l } = e;
                      return (0, a.jsx)(
                        u.List,
                        {
                          innerRole: s,
                          innerAriaLabel: N.default.Messages.MEMBERS,
                          ref: e => {
                            var s;
                            (E.current = e),
                              (t.current =
                                null !==
                                  (s =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== s
                                  ? s
                                  : null);
                          },
                          paddingTop: 0,
                          paddingBottom: 16,
                          sectionHeight: 0,
                          rowHeight: 64,
                          renderSection: A,
                          renderRow: j,
                          sections: x,
                          onScroll: c,
                          fade: !0,
                          ...l,
                        },
                        "guild-application-review"
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, a.jsx)(p, { status: t });
      };
    },
    667793: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MemberApplicationsListRow: function () {
            return M;
          },
          MemberApplicationsListRowPlaceholder: function () {
            return A;
          },
        }),
        s("222007"),
        s("70102");
      var a = s("37983"),
        l = s("884691"),
        i = s("414456"),
        n = s.n(i),
        r = s("866227"),
        u = s.n(r),
        o = s("77078"),
        d = s("272030"),
        c = s("766274"),
        E = s("36694"),
        I = s("945330"),
        f = s("433487"),
        T = s("315102"),
        R = s("549103"),
        S = s("567054"),
        _ = s("782340"),
        m = s("26900");
      function N(e) {
        let { icon: t, onClick: s, submitting: l, disabled: i } = e;
        return (0, a.jsx)(o.Clickable, {
          className: n(m.actionIconContainer, { [m.disabled]: i || l }),
          onClick: s,
          children: l
            ? (0, a.jsx)(o.Dots, {
                className: m.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, a.jsx)(t, { className: m.icon, height: 12, width: 12 }),
        });
      }
      function M(e) {
        let {
            applicationStatus: t,
            guild: i,
            guildJoinRequest: r,
            className: M,
            onClick: A,
          } = e,
          [p, h] = l.useState(null),
          { user: x, createdAt: C } = r;
        if (null == x) throw Error("Missing user on this guild join request!");
        let g = l.useMemo(() => new c.default(x), [x]),
          P = T.default.getUserAvatarURL(g),
          j = t === S.GuildJoinRequestApplicationStatuses.SUBMITTED,
          G = l.useCallback(
            async (e, t) => {
              let { guildId: s, userId: a } = e;
              if (null == p) {
                h(t);
                try {
                  await R.default.updateGuildJoinRequest(s, a, t);
                } catch (e) {
                  (0, o.showToast)(
                    (0, o.createToast)(
                      _.default.Messages.ERROR_GENERIC_TITLE,
                      o.ToastType.FAILURE
                    )
                  ),
                    h(null);
                }
              }
            },
            [p]
          ),
          v = async () => {
            await G(r, S.GuildJoinRequestApplicationStatuses.APPROVED);
          },
          O = async () => {
            await G(r, S.GuildJoinRequestApplicationStatuses.REJECTED);
          };
        return (0, a.jsxs)(o.Clickable, {
          className: n(m.container, M),
          onClick: A,
          children: [
            (0, a.jsx)(o.Avatar, {
              src: P,
              size: o.AvatarSizes.SIZE_40,
              "aria-label": x.username,
              className: m.spacer,
            }),
            (0, a.jsxs)("div", {
              className: m.userDetails,
              children: [
                (0, a.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: x.username,
                }),
                (0, a.jsx)(o.Text, {
                  className: m.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: u(C).format("lll"),
                }),
              ],
            }),
            j &&
              (0, a.jsx)(N, {
                icon: E.default,
                onClick: v,
                submitting:
                  p === S.GuildJoinRequestApplicationStatuses.APPROVED,
                disabled:
                  null != p &&
                  p !== S.GuildJoinRequestApplicationStatuses.APPROVED,
              }),
            j &&
              (0, a.jsx)(N, {
                icon: I.default,
                onClick: O,
                submitting:
                  p === S.GuildJoinRequestApplicationStatuses.REJECTED,
                disabled:
                  null != p &&
                  p !== S.GuildJoinRequestApplicationStatuses.REJECTED,
              }),
            (0, a.jsx)(o.Clickable, {
              className: n(m.overflowMenuContainer, {
                [m.disabled]: null != p,
              }),
              onClick: e => {
                (0, d.openContextMenuLazy)(
                  e,
                  async () => {
                    let { default: e } = await s
                      .el("176032")
                      .then(s.bind(s, "176032"));
                    return t => (0, a.jsx)(e, { ...t, guild: i, user: g });
                  },
                  { position: "bottom", align: "right" }
                );
              },
              children: (0, a.jsx)(f.default, { className: m.icon, width: 18 }),
            }),
          ],
        });
      }
      function A() {
        return (0, a.jsxs)("div", {
          className: m.placeholder,
          children: [
            (0, a.jsx)("div", { className: n(m.placeholderAvatar) }),
            (0, a.jsxs)("div", {
              className: m.userDetails,
              children: [
                (0, a.jsx)("div", {
                  className: m.placeholderUsername,
                  style: {
                    maxWidth: "".concat(
                      Math.floor(50 * Math.random()) + 100,
                      "px"
                    ),
                  },
                }),
                (0, a.jsx)("div", {
                  className: m.placeholderCreatedAt,
                  style: {
                    maxWidth: "".concat(
                      Math.floor(25 * Math.random()) + 50,
                      "px"
                    ),
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    709863: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        i = s("866227"),
        n = s.n(i),
        r = s("446674"),
        u = s("669491"),
        o = s("77078"),
        d = s("272030"),
        c = s("401642"),
        E = s("26989"),
        I = s("697218"),
        f = s("578706"),
        T = s("381546"),
        R = s("841811"),
        S = s("433487"),
        _ = s("299039"),
        m = s("549103"),
        N = s("567054"),
        M = s("49111"),
        A = s("782340"),
        p = s("73266");
      function h(e) {
        var t;
        let { guildJoinRequest: i, guild: h, guildJoinRequestUser: x } = e,
          [C, g] = l.useState(!1),
          { createdAt: P, actionedAt: j, guildId: G, userId: v } = i,
          O = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id,
          D = (0, r.useStateFromStores)([I.default], () =>
            I.default.getUser(O)
          ),
          L = (0, r.useStateFromStores)(
            [E.default],
            () => (null != O ? E.default.getMember(G, O) : null),
            [O, G]
          ),
          b = l.useCallback(() => {
            (0, o.showToast)(
              (0, o.createToast)(
                A.default.Messages.ERROR_GENERIC_TITLE,
                o.ToastType.FAILURE
              )
            );
          }, []),
          F = async () => {
            if (!C) {
              g(!0);
              try {
                await m.default.updateGuildJoinRequest(
                  G,
                  v,
                  N.GuildJoinRequestApplicationStatuses.APPROVED
                );
              } catch {
                b();
              } finally {
                g(!1);
              }
            }
          },
          V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING,
          B = (0, a.jsx)(R.default, {
            width: 24,
            height: 24,
            className: p.icon,
          });
        i.applicationStatus === N.GuildJoinRequestApplicationStatuses.APPROVED
          ? ((V =
              A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED),
            (B = (0, a.jsx)(f.default, {
              width: 24,
              height: 24,
              className: p.iconApproved,
              backgroundColor: u.default.unsafe_rawColors.WHITE_500.css,
            })))
          : i.applicationStatus ===
              N.GuildJoinRequestApplicationStatuses.REJECTED &&
            ((V =
              A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED),
            (B = (0, a.jsx)(T.default, {
              width: 24,
              height: 24,
              className: p.iconRejected,
              backgroundColor: u.default.unsafe_rawColors.WHITE_500.css,
            })));
        let J =
          null != D && null != j
            ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format(
                {
                  date: n(_.default.extractTimestamp(j)).format("ll"),
                  usernameHook: function () {
                    var e;
                    return (0, a.jsx)(
                      o.Clickable,
                      {
                        className: p.actionedByUser,
                        onClick: () =>
                          (0, c.openUserProfileModal)({
                            userId: D.id,
                            guildId: G,
                            analyticsLocation: {
                              section:
                                M.AnalyticsSections
                                  .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                              object: M.AnalyticsObjects.ACTIONED_BY_USER,
                            },
                          }),
                        tag: "div",
                        role: "link",
                        children: (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null !== (e = null == L ? void 0 : L.nick) &&
                            void 0 !== e
                              ? e
                              : D.username,
                        }),
                      },
                      "username-hook"
                    );
                  },
                }
              )
            : n(P).format("lll");
        return (0, a.jsxs)("div", {
          className: p.container,
          children: [
            (0, a.jsxs)("div", {
              className: p.wrapper,
              children: [
                (0, a.jsxs)("div", {
                  className: p.inline,
                  children: [
                    B,
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          children: V,
                        }),
                        (0, a.jsx)(o.Text, {
                          className: p.headerSubtext,
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: J,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: p.inline,
                  children: [
                    i.applicationStatus ===
                      N.GuildJoinRequestApplicationStatuses.SUBMITTED &&
                      (0, a.jsxs)("div", {
                        className: p.buttons,
                        children: [
                          (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.GREEN,
                            submitting: C,
                            onClick: () => F(),
                            children:
                              A.default.Messages
                                .GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION,
                          }),
                          (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: () => {
                              (0, o.openModalLazy)(async () => {
                                let { default: e } = await s
                                  .el("155554")
                                  .then(s.bind(s, "155554"));
                                return t =>
                                  (0, a.jsx)(e, {
                                    modalProps: t,
                                    guildId: G,
                                    userId: v,
                                    onError: b,
                                  });
                              });
                            },
                            disabled: C,
                            children:
                              A.default.Messages
                                .GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
                          }),
                        ],
                      }),
                    (0, a.jsx)(o.Clickable, {
                      onClick: e => {
                        (0, d.openContextMenuLazy)(e, async () => {
                          let { default: e } = await s
                            .el("176032")
                            .then(s.bind(s, "176032"));
                          return t =>
                            (0, a.jsx)(e, { ...t, guild: h, user: x });
                        });
                      },
                      className: p.overflow,
                      children: (0, a.jsx)(S.default, {
                        width: 20,
                        height: 20,
                        className: p.iconInteractive,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            i.applicationStatus ===
              N.GuildJoinRequestApplicationStatuses.REJECTED &&
              null != i.rejectionReason &&
              (0, a.jsx)("div", {
                className: p.rejectionReason,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: i.rejectionReason,
                }),
              }),
          ],
        });
      }
    },
    227457: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        i = s.n(l),
        n = s("77078"),
        r = s("401642"),
        u = s("315102"),
        o = s("49111"),
        d = s("782340"),
        c = s("870690");
      function E(e) {
        let { user: t, className: s } = e,
          { discriminator: l, username: E } = t,
          I = u.default.getUserAvatarURL(t);
        return (0, a.jsxs)("div", {
          className: i(c.container, s),
          children: [
            (0, a.jsx)(n.Avatar, {
              src: I,
              size: n.AvatarSizes.SIZE_80,
              "aria-label": E,
              className: c.avatar,
            }),
            (0, a.jsxs)("div", {
              className: c.username,
              children: [
                (0, a.jsx)(n.Heading, {
                  variant: "heading-xl/semibold",
                  children: E,
                }),
                (0, a.jsxs)(n.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: ["#", l],
                }),
              ],
            }),
            (0, a.jsx)(n.Anchor, {
              onClick: () => {
                (0, r.openUserProfileModal)({
                  userId: t.id,
                  analyticsLocation: {
                    section:
                      o.AnalyticsSections
                        .GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: o.AnalyticsObjects.JOIN_REQUEST,
                  },
                });
              },
              children: d.default.Messages.VIEW_PROFILE,
            }),
          ],
        });
      }
    },
    276566: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("77078"),
        n = s("945330"),
        r = s("781896"),
        u = s("664336"),
        o = s("158998"),
        d = s("781609"),
        c = s("709863"),
        E = s("227457"),
        I = s("782340"),
        f = s("104585"),
        T = function (e) {
          let {
              guild: t,
              guildJoinRequest: s,
              guildJoinRequestUser: T,
              onClose: R,
            } = e,
            S = l.useMemo(() => {
              var e;
              return null !== (e = s.formResponses) && void 0 !== e ? e : [];
            }, [s.formResponses]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(u.default, {
                toolbar: (0, a.jsx)(u.default.Icon, {
                  icon: n.default,
                  onClick: R,
                  tooltip: I.default.Messages.CLOSE,
                }),
                children: [
                  (0, a.jsx)(u.default.Icon, {
                    icon: r.default,
                    disabled: !0,
                    "aria-label":
                      I.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION,
                  }),
                  (0, a.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: o.default.getName(T),
                  }),
                ],
              }),
              (0, a.jsx)(c.default, {
                guildJoinRequest: s,
                guildJoinRequestUser: T,
                guild: t,
              }),
              (0, a.jsxs)(i.Scroller, {
                children: [
                  (0, a.jsx)(E.default, { user: T, className: f.container }),
                  (0, a.jsx)("div", {
                    className: f.disabledFormRenderer,
                    children: (0, a.jsx)(d.default, {
                      guildId: t.id,
                      formFields: S,
                      user: T,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    781609: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("446674"),
        i = s("697218"),
        n = s("975743"),
        r = s("567054"),
        u = s("272460"),
        o = s("472850"),
        d = s("199901"),
        c = s("772970"),
        E = s("621115"),
        I = s("782340"),
        f = function (e) {
          let { formFields: t, user: s } = e,
            f = (0, l.useStateFromStores)([i.default], () =>
              null != s ? s : i.default.getCurrentUser()
            );
          return null == f
            ? null
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(u.RequirementRenderer, {
                    icon: n.default,
                    text: I.default.Messages
                      .MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                    meetsRequirement: !0,
                  }),
                  t.map((e, t) =>
                    (function (e, t) {
                      switch (e.field_type) {
                        case r.VerificationFormFieldTypes.TERMS:
                          return (0, a.jsx)(
                            c.DisabledTermsRequirementFormField,
                            { formField: e },
                            t
                          );
                        case r.VerificationFormFieldTypes.TEXT_INPUT:
                          return (0, a.jsx)(
                            E.DisabledTextInputFormField,
                            { formField: e },
                            t
                          );
                        case r.VerificationFormFieldTypes.PARAGRAPH:
                          return (0, a.jsx)(
                            d.DisabledParagraphFormField,
                            { formField: e },
                            t
                          );
                        case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                          return (0, a.jsx)(
                            o.DisabledMultipleChoiceFormField,
                            { formField: e },
                            t
                          );
                      }
                    })(e, t)
                  ),
                ],
              });
        };
    },
    975743: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("469563"),
        i = s("877585"),
        n = s("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: l = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, n.default)(r),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: i,
                fill: l,
                d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z",
              }),
            });
          },
          i.ShieldIcon,
          void 0,
          { size: 24 }
        );
    },
    641892: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("469563"),
        i = s("797350"),
        n = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: l = "currentColor",
              className: i,
              foreground: n,
            } = e;
            return (0, a.jsx)("svg", {
              className: i,
              width: t,
              height: s,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                className: n,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.5 17.2916V3.74996H17.5V18.3333H4.5C3.3955 18.3333 2.5 17.4005 2.5 16.25V3.74996C2.5 2.59944 3.3955 1.66663 4.5 1.66663H15.5V15.2083H4.5C3.94775 15.2083 3.5 15.6742 3.5 16.25C3.5 16.8257 3.94775 17.2916 4.5 17.2916H16.5ZM11.9859 4.99996L7.94446 8.9957L6.35432 7.42204L5 8.75288L7.94427 11.6666L13.3333 6.33344L11.9859 4.99996Z",
              }),
            });
          },
          i.BookCheckIcon,
          void 0,
          { size: 16 }
        );
    },
  },
]);
//# sourceMappingURL=623b5b149668f8fc0c6c.js.map
